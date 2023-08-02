import { useState, useEffect } from 'react'
import './style.css'

function Quiz () {
  const [question, setQuestion] = useState('')
  const [realAnswer, setRealAnswer] = useState('')
  const [answerNum, setAnswerNum] = useState(['', '', '', ''])
  const [isNext, setNext] = useState(false)

  const [score, setScore] = useState(0)

  async function api () {
    if (isNext) return
    const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'
    await fetch(apiUrl)
      .then(res => res.json())
      .then(myJson => {
        let randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
        const realAnswerNum = Math.round(Math.random() * 3)
        setQuestion(myJson.data[randomNum].설명)
        setRealAnswer(myJson.data[randomNum].표제어)

        console.log(randomNum)
        const newAnswerNum = [...answerNum]
        for (let i = 0; i < 4; i++) {
          if (realAnswerNum === i) {
            newAnswerNum[i] = myJson.data[randomNum].표제어
          } else {
            newAnswerNum[i] = myJson.data[randomNum].표제어
          }
          randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
        }
        console.log(myJson.data[realAnswerNum].표제어)
        setAnswerNum(newAnswerNum)
      })
    setNext(true)
  }

  console.log(realAnswer)

  function answerCheck (e) {
    if (!isNext) return
    if (e.target.textContent === realAnswer) {
      setNext(false)
      setScore(score + 1)
    } else {
      console.log('오답')
    }
  }

  useEffect(() => {
    api()
  }, [score])
  return (
    <div className='quizSite'>
      <div className='container'>

        <div className="questionContent">
          <div className="info">
            <div className="timer">
              <div className="timerRange">
                <div className="fillRange"></div>
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
