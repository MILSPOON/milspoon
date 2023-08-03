import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'

function QuizResult () {
  const location = useLocation()
  const movePage = useNavigate()

  const currentMode = location.state.currentMode
  const score = location.state.score
  console.log('ds')
  function retry () {
    movePage('/quiz', { state: { currentMode } })
  }
  function goHome () {
    movePage('/')
  }
  return (
    <div className="result">
      <div className="resultContent">
        <h1>{currentMode}</h1>
        <div>
          <h2>최고 점수</h2>
          <p>99999999</p>
        </div>
        <div>
          <h2>현재 점수</h2>
          <p>{score}</p>
        </div>
        <div className='btnSet'>
          <button onClick={retry}>다시하기</button>
          <button onClick={goHome}>돌아가기</button>
        </div>
      </div>
    </div>
  )
}

export default QuizResult
