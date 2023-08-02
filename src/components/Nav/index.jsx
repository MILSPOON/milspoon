/* eslint-disable import/no-duplicates */
import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line no-unused-vars
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

function Nav () {
  return (
    <div className="nav">
      <div className="nav">
        <nav>
          <Link to={'/dictionary'} href="/" className="navBtn">
            <FontAwesomeIcon className='navIcon' icon={faBook} style={{ color: '#b7b7b7' }} />
            사전
          </Link>
          <Link to={'/dictionary'} href="/" className="navBtn">
            <FontAwesomeIcon className='navIcon' icon={faPersonRunning} style={{ color: '#b7b7b7' }} />
            대피소
          </Link>
          <Link to={'/'} href="/" className="navBtn">
            <FontAwesomeIcon className='navIcon' icon={faQuestion} style={{ color: '#b7b7b7' }} />
            퀴즈
          </Link>
          <Link to={'/artillery'} href="https://artillery-signal-msa.vercel.app/" className="navBtn">
            <FontAwesomeIcon className='navIcon' icon={faPersonRays} style={{ color: '#b7b7b7' }} />
            포병
          </Link>
          <Link to={'/dictionary'} href="/" className="navBtn">
            <FontAwesomeIcon className='navIcon' icon={faUser} style={{ color: '#b7b7b7' }} />
            내정보
          </Link>
        </nav>
</div>
    </div>
  )
}

export default Nav
