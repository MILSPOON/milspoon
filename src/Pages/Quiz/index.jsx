import './style.css'

function Quiz () {
  const apiUrl = 'https://api.odcloud.kr/api/15089127/v1/uddi:858d65b9-ce3c-4a68-94b2-989ac92385c9?page=1&perPage=2000&serviceKey=BP1Ko40djjq%2FdGO47n5u7rYb2mIGEFcqZte4zYQihF59HR99CJxkSuEEwTXhErxIX1apz0eudJwcp9HowwFSSA%3D%3D'

  fetch(apiUrl)
    .then(res => res.json())
    .then(myJson => {
      console.log(myJson)
    })
  return (
    <div className='quizSite'>
      <div className="questionContent">
        <h3 className='question'>(1) 네트워크를 효율적으로 운용하기 위해 여러 개의 에이전트를 두고 매니저는 필요 시 에이전트에 게 정보를 요청하면 에이전트는 응답하는 방식의 TCP/ IP 망 관리 프로토콜. TCP/IP의 단순형 게이트웨이 모니터링 프로토콜(SGMP)을 바탕으로 개발되었으며, 개방형 시스템 간 상호 접속(OSI)의 망 공통 관리 정보 프로토콜CMIP)에 대응한다. 요구와 응답의 2가지 기능을 사용하여 망 관리 정보를 수집, 관리한다. 1988년에 RFC 1157로 간이 망 관리 프로토콜(SNMP) 표준이 발표되었으며, 1991년에 개정판인 SNMP2가 개발되어 SNMP2에 대응하는 제품도 판매되고 있다. (2) SNMP와 밀접한 관계가 있는 망 관리 정보 베이스(MIB)의 총칭. ☜ SNMP(Simple Network Management Protocol)</h3>
      </div>
      <div className="quizContent">
        <button className="answerBtn">버튼1</button>
        <button className="answerBtn">버튼2</button>
        <button className="answerBtn">버튼3</button>
        <button className="answerBtn">버튼4</button>
        <button className="answerBtn">버튼5</button>
      </div>
    </div>
  )
}

export default Quiz
