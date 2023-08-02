/* eslint-disable import/no-duplicates */
import './style.css'
import logo from '../../media/MILSP.svg'

function milHeader () {
  return (
      <div className="menubar">
        <img src={logo} alt="logo"/>
        <div className="circle"></div>
      </div>
  )
}

export default milHeader
