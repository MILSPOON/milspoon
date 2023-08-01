import { useState, useEffect } from 'react'
import './style.css'

function Quiz () {
  const [question, setQuestion] = useState('')
  const [realAnswer, setRealAnswer] = useState('')
  const [answerNum, setAnswerNum] = useState(['', '', '', ''])
  const [isNext, setNext] = useState(false)
  const [myJson, setMyJson] = useState({})
  async function api () {
    if (isNext) {
      console.log(myJson)
      let randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
      setQuestion(myJson.data[randomNum].설명)
      const realAnswerNum = Math.round(Math.random() * 3)
      setRealAnswer(myJson.data[realAnswerNum].표제어)
      const newAnswerNum = [...answerNum]
      for (let i = 0; i < 4; i++) {
        randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
        if (realAnswerNum === i) {
          newAnswerNum[i] = realAnswer
          console.log(realAnswer)
        } else {
          newAnswerNum[i] = myJson.data[randomNum].표제어
        }
      }
      setNext(true)
      setAnswerNum(newAnswerNum)
    } else {
      const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'
      await fetch(apiUrl)
        .then(res => res.json())
        .then(resJson => {
          setMyJson(resJson)
        })
    }
  }
  useEffect(() => {
    console.log(isNext)
    if (isNext) {
      console.log(myJson)
      let randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
      setQuestion(myJson.data[randomNum].설명)
      const realAnswerNum = Math.round(Math.random() * 3)
      setRealAnswer(myJson.data[realAnswerNum].표제어)
      const newAnswerNum = [...answerNum]
      for (let i = 0; i < 4; i++) {
        randomNum = Math.round(Math.random() * Object.keys(myJson.data).length)
        if (realAnswerNum === i) {
          newAnswerNum[i] = realAnswer
          console.log(realAnswer)
        } else {
          newAnswerNum[i] = myJson.data[randomNum].표제어
        }
      }
      setAnswerNum(newAnswerNum)
    }
  }, isNext)
  api()

  return (
    <div className='quizSite'>
      <div className="questionContent">
        <h3 className='question'>{question}</h3>
      </div>
      <div className="quizContent">
        <button className="answerBtn">{answerNum[0]}</button>
        <button className="answerBtn">{answerNum[1]}</button>
        <button className="answerBtn">{answerNum[2]}</button>
        <button className="answerBtn">{answerNum[3]}</button>
      </div>
    </div>
  )
}

export default Quiz
