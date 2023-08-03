import './App.css'
import './global.css'
import Nav from './components/Nav'
import MilHeader from './components/MilHeader'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import { useNavigate } from 'react-router-dom'
import CountDown from './components/CountDown'

function App () {
  const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'

  fetch(apiUrl)
    .then(res => res.json())
    .then(myJson => {
      console.log(myJson)
    })
  const movePage = useNavigate()

  const [currentEventName, setCurrentEventName] = useState('미지정')

  function clickMode (e) {
    const modeName = e.target.textContent
    setCurrentEventName(modeName)
  }
  useEffect(() => {
    console.log(currentEventName)
  }, [currentEventName])

  const [isGameStart, setGameStart] = useState(false)

  useEffect(() => {
    if (isGameStart) {
      setTimeout(() => {
        movePage('/quiz')
      }, 3950)
    }
  }, [isGameStart])

  return (
    <div className="App">
      { isGameStart && <CountDown/> }
      <MilHeader></MilHeader>
      <Modal modeName={currentEventName} setModeName={setCurrentEventName} setGameStart={setGameStart}></Modal>
      <div className='infoBox'>
      </div>
      <div className="content">
        <div className="mainContent">
          <div className="todayQuiz" onClick={clickMode}>
            <h1>오늘의 퀴즈!</h1>
          </div>
          <div className="quiz" onClick={clickMode}>
            <h1>전체 퀴즈!</h1>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default App
