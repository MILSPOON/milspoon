/* eslint-disable no-undef */
import './style.css'
import MotionLogo from '../../components/MotionLogo'
import MilHeader from '../../components/MilHeader'
import Nav from '../../components/Nav'
const Account = () => {
  return (
    <div>
          <MilHeader></MilHeader>
          <MotionLogo text="떠 먹여주는 군사지식"></MotionLogo>
          <input type='text' name='userId' value={user.userId} onChange={onChange}/>
          <input type='text' name='userPw' value={user.userPw} onChange={onChange}/>
          <button onClick={onClick}>로그인</button>
          <Nav></Nav>
    </div>
  )
}

export default Account
