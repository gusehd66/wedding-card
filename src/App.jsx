import { useEffect, useState } from 'react'
import './App.css'
import OpeningAnimation from './components/OpeningAnimation'
import HeaderImage from './components/HeaderImage'
import DateSection from './components/DateSection'
import ParentsSection from './components/ParentsSection'
import TogetherSection from './components/TogetherSection'
import GallerySection from './components/GallerySection'
import TransportSection from './components/TransportSection'
import AccountSection from './components/AccountSection'
import ShareSection from './components/ShareSection'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { initKakaoSDK } from './utils/kakao'
import { initNaverMap } from './utils/naverMap'
import { initScrollAnimation } from './utils/scrollAnimation'

const GALLERY_IMAGES_COUNT = 23

function App() {
  const [showOpening, setShowOpening] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    // 카카오 SDK 초기화
    initKakaoSDK()
    
    // 네이버 지도 초기화
    if (typeof window !== 'undefined' && window.naver?.maps) {
      initNaverMap()
    } else {
      window.addEventListener('load', () => {
        if (window.naver?.maps) {
          initNaverMap()
        }
      })
    }

    // 스크롤 애니메이션 초기화
    initScrollAnimation()
  }, [])

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleLightboxClose = () => {
    setLightboxOpen(false)
  }

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES_COUNT) % GALLERY_IMAGES_COUNT)
  }

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES_COUNT)
  }

  return (
    <div className={showOpening ? 'opening-active' : ''}>
      <OpeningAnimation onClose={() => setShowOpening(false)} />
      <HeaderImage />
      <main>
        <DateSection />
        <ParentsSection />
        <TogetherSection />
        <GallerySection onImageClick={handleImageClick} />
        <TransportSection />
        <AccountSection />
        <ShareSection />
        <Footer />
      </main>
      <Lightbox 
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={handleLightboxClose}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />
    </div>
  )
}

export default App

