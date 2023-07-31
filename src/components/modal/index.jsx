import './style.css'

function btnClick (e) {
  console.log('아')
}

function modal (props) {
  return (
    <div className='bg' style={{ display: props.modeName === '미지정' ? 'none' : 'block' }}>
      <div className='modal'>
        <p>{props.modeName}를 도전하시겠습니까?</p>
        <button onClick={btnClick}>확인</button>
        <button onClick={btnClick}>취소</button>
      </div>
    </div>
  )
}

export default modal
