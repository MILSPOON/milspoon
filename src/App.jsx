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
  useEffect(() => {
    if (window.innerWidth >= 600) {
      // alert(
      //   'pc 접속 시 레거시 CSS 인해 ui가 깨질 수 있습니다.\nCSS 개선 작업중이니 크롬 개발자 도구나 모바일에서 접속을 권장합니다.'
      // )
    }
  })

  const movePage = useNavigate()

  const [currentEventName, setCurrentEventName] = useState('미지정')

  function clickMode (e) {
    const modeName = e.target.classList.contains('quiz')
      ? '전체 퀴즈'
      : '오늘의 퀴즈'
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
    <div className='App'>
      {isGameStart && <CountDown />}
      <div className='grayWrap'></div>
      <MilHeader></MilHeader>
      <Modal
        modeName={currentEventName}
        setModeName={setCurrentEventName}
        setGameStart={setGameStart}
      ></Modal>
      <div className='content'>
        <div className='rankingContent'>
          <img src={Trophy} className='trophy' />
          <div className='rankingContext'>
            <h2>순위 🏆️</h2>
            <div className='hr'></div>
            <ul className='ranking'>
              <li>
                <div className='left'>
                  <h3>1</h3>
                  <div className='player'>Siesta</div>
                </div>
                <p className='point'>99900pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>2</h3>
                  <div className='player'>홍석철</div>
                </div>
                <p className='point'>3400pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>3</h3>
                  <div className='player'>철수1</div>
                </div>
                <p className='point'>1000pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>4</h3>
                  <div className='player'>철수2</div>
                </div>
                <p className='point'>900pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>5</h3>
                  <div className='player'>철수3</div>
                </div>
                <p className='point'>800pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>6</h3>
                  <div className='player'>철수4</div>
                </div>
                <p className='point'>700pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>7</h3>
                  <div className='player'>철수5</div>
                </div>
                <p className='point'>600pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>8</h3>
                  <div className='player'>철수6</div>
                </div>
                <p className='point'>500pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>9</h3>
                  <div className='player'>철수7</div>
                </div>
                <p className='point'>400pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>10</h3>
                  <div className='player'>철수8</div>
                </div>
                <p className='point'>300pt</p>
              </li>
              <li>
                <div className='left'>
                  <h3>11</h3>
                  <div className='player'>황재하</div>
                </div>
                <p className='point'>0pt</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='mainContent'>
          <div className='todayQuiz' onClick={clickMode}>
            <h1>오늘의 퀴즈!</h1>
            <img src={Target} className='target' />
          </div>
          <div className='quiz' onClick={clickMode}>
            <h1>전체 퀴즈!</h1>
            <img src={Flag} className='flag' />
          </div>
        </div>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default App
