import { useEffect, useState } from 'react'

export default function OpeningAnimation({ onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose()
      }, 800)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const handleClick = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 800)
  }

  return (
    <div className={`opening-overlay ${!isVisible ? 'hide' : ''}`} onClick={handleClick}>
      <div className="opening-content">
        <img src="/images/opening_1.png" alt="opening" className="opening-img-1" />
        <img src="/images/opening_3.png" alt="opening" className="opening-img-3" />
        <img src="/images/opening_2.png" alt="opening" className="opening-img-2" />
        {/* <div className="opening-text">
          <h1 className="opening-title">Kim Hyun Dong</h1>
          <div className="opening-heart">♥</div>
          <h1 className="opening-title">Lee Kyung Seo</h1>
        </div>
        <p className="opening-subtitle">결혼합니다</p> */}
      </div>
    </div>
  )
}

