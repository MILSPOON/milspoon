import './App.css'
import './global.css'
import Nav from './components/Nav'
import MilHeader from './components/MilHeader'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import { useNavigate } from 'react-router-dom'
import CountDown from './components/CountDown'
import Trophy from './media/trophy-dynamic-premium.png'
import Flag from './media/flag-dynamic-color.png'
import Target from './media/target-dynamic-color.png'
function App () {
  const movePage = useNavigate()

  const [currentEventName, setCurrentEventName] = useState('미지정')

  function clickMode (e) {
    const modeName = e.target.classList.contains('quiz') ? '전체 퀴즈' : '오늘의 퀴즈'
    setCurrentEventName(modeName)
  }
  useEffect(() => {
    console.log(currentEventName)
  }, [currentEventName])

  const [isGameStart, setGameStart] = useState(false)

  useEffect(() => {
    if (isGameStart) {
      setTimeout(() => {
        movePage('/quiz', { state: { currentMode: currentEventName } })
      }, 3950)
    }
  }, [isGameStart])

  return (
    <div className="App">
      { isGameStart && <CountDown/> }
      <div className="grayWrap"></div>
      <MilHeader></MilHeader>
      <Modal modeName={currentEventName} setModeName={setCurrentEventName} setGameStart={setGameStart}></Modal>
      <div className="content">
        <div className="rankingContent">
          <img src={Trophy} className='trophy'/>
          <div className="rankingContext">
            <h2>순위 🏆️</h2>
            <div className="hr"></div>
            <ul className='ranking'>
              <li>
                <div className="left">
                  <h3>1</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>2</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>3</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>4</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>5</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>6</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>7</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>8</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>9</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>10</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
              <li>
                <div className="left">
                  <h3>11</h3>
                  <div className='player'>홍길동</div>
                </div>
                  <p className="point">0pt</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainContent">
          <div className="todayQuiz" onClick={clickMode}>
            <h1>오늘의 퀴즈!</h1>
          <img src={Target} className='target'/>
          </div>
          <div className="quiz" onClick={clickMode}>
            <h1>전체 퀴즈!</h1>
            <img src={Flag} className='flag'/>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default App
