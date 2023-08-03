import './style.css'

function QuizResult () {
  return (
    <div className="result">
      <div className="resultContent">
        <div>
          <h2>최고 점수</h2>
          <p>99999999</p>
        </div>
        <div>
          <h2>현재 점수</h2>
          <p>99999999</p>
        </div>
        <div className='btnSet'>
          <button>다시하기</button>
          <button>돌아가기</button>
        </div>
      </div>
    </div>
  )
}

export default QuizResult
