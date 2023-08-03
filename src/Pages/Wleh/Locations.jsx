import React, { useEffect, useState } from 'react'

const MapWithCurrentLocation = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    }

    function success (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }

    function error () {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435
      })
      console.log('위치 받기 실패')
    }
  }, [])

  return (
    <div>
      {typeof location === 'string'
        ? (
        <p>{location}</p>
          )
        : (
        <p>
          위도: {location.latitude}, 경도: {location.longitude}
        </p>
          )}
    </div>
  )
}

export default MapWithCurrentLocation
