/* eslint-disable no-unused-vars */
import './style.css'
import { NavLink, isActive } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBook,
  faPersonRunning,
  faQuestion,
  faPersonRays,
  faUser
} from '@fortawesome/free-solid-svg-icons'

library.add(faBook,
  faPersonRunning,
  faQuestion,
  faPersonRays,
  faUser)

const activeStyle = {
  color: '#D0FF00'
}
const notActiveStyle = {
  color: '#b7b7b7'
}
function Nav () {
  return (
    <div className="nav">
      <div className="nav">
        <nav>
          <NavLink to={'/dictionary'} href="/" className="navBtn" style={({ isActive }) => isActive ? activeStyle : notActiveStyle }>
            <FontAwesomeIcon className='navIcon' icon={faBook}/>
            사전
          </NavLink>
          <NavLink to={'/dictionary'} href="/" className="navBtn" style={({ isActive }) => isActive ? activeStyle : notActiveStyle }>
            <FontAwesomeIcon className='navIcon' icon={faPersonRunning} />
            대피소
          </NavLink>
          <NavLink to={'/'} href="/" className="navBtn" style={({ isActive }) => isActive ? activeStyle : notActiveStyle }>
            <FontAwesomeIcon className='navIcon' icon={faQuestion} />
            퀴즈
          </NavLink>
          <NavLink to={'/artillery'} href="https://artillery-signal-msa.vercel.app/" className="navBtn" style={({ isActive }) => isActive ? activeStyle : notActiveStyle }>
            <FontAwesomeIcon className='navIcon' icon={faPersonRays} />
            포병
          </NavLink>
          <NavLink to={'/account'} href="/" className="navBtn" style={({ isActive }) => isActive ? activeStyle : notActiveStyle }>
            <FontAwesomeIcon className='navIcon' icon={faUser} />
            내정보
          </NavLink>
        </nav>
</div>
    </div>
  )
}

export default Nav
