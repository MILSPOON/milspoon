import './App.css'
import './global.css'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import { Link } from 'react-router-dom'
import chartIcon from './media/3dChartIcon.png'
function App () {
  // const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'

  // fetch(apiUrl)
  //   .then(res => res.json())
  //   .then(myJson => {
  //     console.log(myJson)
  //   })
  const [currentEventName, setCurrentEventName] = useState('미지정')

  function clickMode (e) {
    const modeName = e.target.textContent
    setCurrentEventName(modeName)
  }
  useEffect(() => {
    console.log(currentEventName)
  }, [currentEventName])
  return (
    <div className="App">
      <Modal modeName={currentEventName} setModeName={setCurrentEventName}></Modal>
      <div className='infoBox'>
        <img src={chartIcon} width='250' className='chart'/>
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
        <nav>
          <Link to={'/dictionary'}>사전</Link>
          <Link to={'/dictionary'}>대피소</Link>
          <Link to={'/dictionary'}>퀴즈</Link>
          <Link to={'/dictionary'}>테스트</Link>
          <Link to={'/dictionary'}>내정보</Link>
        </nav>
      </div>
    </div>
  )
}

export default App
