import MotionLogo from '../../components/MotionLogo'
import MilHeader from '../../components/MilHeader'
import Nav from '../../components/Nav'
import './style.css'

const AccountCreate = () => {
  return (
    <div className='createWrap'>
      <MilHeader/>
      <MotionLogo></MotionLogo>
      <div className="accountCreate">
        <div className="verBar"></div>
        <p>회원가입</p>
        <input className='nameInput' type='text' name='userId' placeholder='이름...'/>
        <input className='idInput' type='text' name='userPw' placeholder='아이디...'/>
        <input className='psInput' type='text' name='userPws' placeholder='비밀번호...'/>
        <button className='loginBtn'>회원가입</button>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default AccountCreate
