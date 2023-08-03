import { useState, useEffect, useRef } from 'react'
import './style.css'
import TimeOverAnimation from '../../components/TimeOverAnimation'
import { useLocation, useNavigate } from 'react-router-dom'

function Quiz () {
  const [question, setQuestion] = useState('')
  const [realAnswer, setRealAnswer] = useState('')
  const [answerNum, setAnswerNum] = useState(['', '', '', ''])
  const [isNext, setNext] = useState(false)

  const maxTime = 60
  const [time, setTime] = useState(maxTime)
  const [score, setScore] = useState(0)

  const [percentTime, setPercentTime] = useState(100)

  const [isTimeOver, setTimeOver] = useState(false)

  const location = useLocation()
  const movePage = useNavigate()
  const currentMode = location.state.currentMode

  function useInterval (callback, delay) {
    const savedCallback = useRef() // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

    useEffect(() => {
      savedCallback.current = callback // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback])

    useEffect(() => {
      function tick () {
        savedCallback.current() // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if (delay !== null) { // 만약 delay가 null이 아니라면
        const id = setInterval(tick, delay) // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id) // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]) // delay가 바뀔 때마다 새로 실행된다.
  }
  useInterval(() => {
    if (time >= 0) {
      setTime(time - 0.1)
      setPercentTime(time / maxTime * 100)
    } else {
      setPercentTime(0)
      setTimeOver(true)
    }
  }, 100)
  useEffect(() => {
    if (isTimeOver) {
      const timeoutId = setTimeout(() => {
        movePage('/quiz/result', {
          state: {
            currentMode,
            score
          }
        })
      }, 2000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [isTimeOver])
  async function api () {
    if (isNext) return
    console.log(currentMode)
    const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'
    await fetch(apiUrl)
      .then(res => res.json())
      .then(myJson => {
        let randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
        const realAnswerNum = Math.round(Math.random() * 3)
        setQuestion(myJson.data[randomNum].설명)
        setRealAnswer(myJson.data[randomNum].표제어)

        const realAnswerTemp = myJson.data[randomNum].표제어
        const newAnswerNum = [...answerNum]
        for (let i = 0; i < 4; i++) {
          randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
          if (realAnswerNum === i) {
            newAnswerNum[i] = realAnswerTemp
          } else {
            newAnswerNum[i] = myJson.data[randomNum].표제어
          }
        }
        console.log(myJson.data[realAnswerNum].표제어)
        setAnswerNum(newAnswerNum)
      })
    setNext(true)
  }

  function answerCheck (e) {
    if (!isNext) return
    if (e.target.textContent === realAnswer) {
      setNext(false)
      setScore(score + 100)
    } else {
      setTime(prevTime => prevTime - 5)
    }
  }

  useEffect(() => {
    api()
  }, [score])
  return (
    <div className='quizSite'>
      { isTimeOver && (<TimeOverAnimation/>)}
      <div className='container'>
        <div className="questionContent">
          <div className="info">
            <div className="timer">
              <div className="timerRange">
                <div className="fillRange" style={{ width: `${percentTime}%` }}></div>
              </div>
            </div>
              <h1 className="scoreCount">
                {score}
              </h1>
          </div>
          <h3 className='question'>{question}</h3>
        </div>
        <div className="quizContent">
          <button className="answerBtn" onClick={answerCheck}>{answerNum[0]}</button>
          <button className="answerBtn" onClick={answerCheck}>{answerNum[1]}</button>
          <button className="answerBtn" onClick={answerCheck}>{answerNum[2]}</button>
          <button className="answerBtn" onClick={answerCheck}>{answerNum[3]}</button>
        </div>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Quiz
