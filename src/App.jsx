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
      <div className="mainContent">
        <h1>테스트</h1>
        <p>테스트</p>
      </div>
    </div>
  )
}

export default App
