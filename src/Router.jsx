import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dictionary from './Pages/Dictionary'
import App from './App'
function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dictionary' element={<Dictionary/>}></Route>
        <Route path='/' element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
