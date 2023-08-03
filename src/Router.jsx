import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dictionary from './Pages/Dictionary'
import Account from './Pages/Account'
import AccountCreate from './Pages/AccountCreate'
import DictionaryDetail from './Pages/DictionaryDetail'
import Quiz from './Pages/Quiz'
import Artillery from './Pages/Artillery'
import App from './App'
import QuizResult from './Pages/QuizResult'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/Quiz/Result' element={<QuizResult/>}></Route>
        <Route path='/dictionary' element={<Dictionary/>}></Route>
        <Route path='/dictionary/detail' element={<DictionaryDetail/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/account/create' element={<AccountCreate/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/artillery' element={<Artillery/>}></Route>
        <Route path='/' element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
