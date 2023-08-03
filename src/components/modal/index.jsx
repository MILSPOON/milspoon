import './style.css'
// d
function modal (props) {
  function btnClick (e) {
    if (e.target.textContent === '확인') {
      props.setGameStart(true)
    } else {
      props.setModeName('미지정')
    }
  }
  return (
    <div className='bg' style={{ display: props.modeName === '미지정' ? 'none' : 'block' }}>
      <div className='modal'>
        <p>{props.modeName}를 도전하시겠습니까?</p>
        <div className='btnBox'>
          <button className='YesBtn' onClick={btnClick}>확인</button>
          <button className='NoBtn' onClick={btnClick}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default modal
