import './style.css'
import { useEffect } from 'react'
import Nav from '../../components/Nav'
import MilHeader from '../../components/MilHeader'

function Wleh () {
  const newScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.addEventListener('load', () => {
        resolve()
      })
      script.addEventListener('error', (e) => {
        reject(e)
      })
      document.head.appendChild(script)
    })
  }

  useEffect(() => {
    const myScript = newScript(
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1c922636412b5fe52a8e8dc6660f837e'
    )

    myScript.then(() => {
      const kakao = window.kakao
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map')
        const options = {
          center: new kakao.maps.LatLng(37.495453, 127.038860), // 지도 중심 좌표 수정
          level: 5
        }
        const map = new kakao.maps.Map(mapContainer, options)
        const markerPosition1 = new kakao.maps.LatLng(37.4990705204077, 127.038367267624)
        const markerPosition2 = new kakao.maps.LatLng(37.495453, 127.038860) // 두 번째 마커 위치

        // 첫 번째 마커 생성
        const marker1 = new kakao.maps.Marker({
          position: markerPosition1
        })
        marker1.setMap(map)

        // 두 번째 마커 생성
        const marker2 = new kakao.maps.Marker({
          position: markerPosition2
        })
        marker2.setMap(map)

        // 첫 번째 마커의 CustomOverlay를 사용하여 텍스트 표시
        const content1 = '<div style="padding: 5px; background-color: white; border: 1px solid #ccc;">가장 가까운 대피소</div>'
        const customOverlay1 = new kakao.maps.CustomOverlay({
          content: content1,
          position: markerPosition1,
          xAnchor: 0.5,
          yAnchor: 2.1
        })
        customOverlay1.setMap(map)

        // 두 번째 마커의 CustomOverlay를 사용하여 텍스트 표시
        const content2 = '<div style="padding: 5px; background-color: white; border: 1px solid #ccc;">현재 위치dla</div>'
        const customOverlay2 = new kakao.maps.CustomOverlay({
          content: content2,
          position: markerPosition2,
          xAnchor: 0.5,
          yAnchor: 2.1
        })
        customOverlay2.setMap(map)
      })
    })
  }, [])

  return (
    <div className="Wleh">
      <MilHeader></MilHeader>
      <div id="map" className="map" />
      <div className="di">
        <p>현재 나의 위치 서울특별시 강남구 역삼로 180</p>
        <p>서울특별시 강남구 논현로 430 역삼동, 아세아타워빌딩</p>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default Wleh
