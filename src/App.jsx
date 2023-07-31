import './App.css'
import './global.css'

function App () {
  const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'

  fetch(apiUrl)
    .then(res => res.json())
    .then(myJson => {
      console.log(myJson)
    })

  return (
    <div className="App">
      <div className="content">
        <div className="mainContent">
          <div className="todayQuiz">
            <h1>오늘의 퀴즈!</h1>
          </div>
          <div className="quiz">
            <h1>전체 퀴즈!</h1>
          </div>
        </div>
        <nav>
          <div>사전</div>
          <div>대피소</div>
          <div>퀴즈</div>
          <div>테스트</div>
          <div>내정보</div>
        </nav>
      </div>
    </div>
  )
}

export default App
