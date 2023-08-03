import logo from '../../media/MILSP.svg'
import './style.css'
import anime from 'animejs/lib/anime.es.js'
import { useRef, useEffect } from 'react'
import { PropTypes } from 'prop-types'

function MotionLogo ({ text }) {
  // Wrap every letter in a span
  const textWrapper = useRef(null)
  useEffect(() => {
    textWrapper.current.innerHTML = textWrapper.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
    anime.timeline({ loop: false })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 100 * i
      })
  }, [])

  return (
    <div className="motionLogo">
        <img src = {logo} alt="움직이는 로고" />
        <p className="ml2" ref={textWrapper}>{ text }</p>
    </div>
  )
}
MotionLogo.propTypes = {
  text: PropTypes.string
}

export default MotionLogo
