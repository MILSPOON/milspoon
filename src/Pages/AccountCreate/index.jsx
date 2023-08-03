import MotionLogo from '../../components/MotionLogo'
import MilHeader from '../../components/MilHeader'
import Nav from '../../components/Nav'
import './style.css'

const AccountCreate = () => {
  return (
    <div className='accountCreate'>
      <MilHeader/>
      <MotionLogo></MotionLogo>
      <div className="accountCreate">
        <h1>회원가입</h1>
        <input type='text' name='userId' placeholder='이름...'/>
        <input type='text' name='userPw' placeholder='아이디...'/>
        <input type='text' name='userPws' placeholder='비밀번호...'/>
        <button className='loginBtn'>회원가입</button>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default AccountCreate
