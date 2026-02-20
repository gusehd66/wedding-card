import { useEffect, useState } from 'react'
import './App.css'
import OpeningAnimation from './components/OpeningAnimation'
import HeaderImage from './components/HeaderImage'
import DateSection from './components/DateSection'
import CardSection from './components/CardSection'
import ParentsSection from './components/ParentsSection'
import TogetherSection from './components/TogetherSection'
import GallerySection from './components/GallerySection'
import TransportSection from './components/TransportSection'
import AccountSection from './components/AccountSection'
import ShareSection from './components/ShareSection'
import Footer from './components/Footer'
import { initKakaoSDK, shareMessage } from './utils/kakao'
import { initNaverMap } from './utils/naverMap'
import { initScrollAnimation } from './utils/scrollAnimation'

function App() {
  const [showOpening, setShowOpening] = useState(true)

  useEffect(() => {
    // 카카오 SDK 초기화
    initKakaoSDK()

    // URL에 ?action=share 있으면 공유 창 자동 실행 (카카오 카드 '공유하기' 버튼용)
    const params = new URLSearchParams(window.location.search)
    if (params.get('action') === 'share') {
      const timer = setTimeout(() => {
        shareMessage()
        window.history.replaceState({}, '', window.location.pathname || '/')
      }, 500)
      return () => clearTimeout(timer)
    }

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

  return (
    <div className={showOpening ? 'opening-active' : ''}>
      <OpeningAnimation onClose={() => setShowOpening(false)} />
      <HeaderImage />
      <main>
        <section className="section custom-made-section">
          <p>신랑이 직접 제작한 모바일 청첩장입니다</p>
          <p>재밌게 봐주세요 ^_^</p>
        </section>
        <CardSection />
        <DateSection />
        <ParentsSection />
        <TogetherSection />
        <GallerySection />
        <TransportSection />
        <AccountSection />
        <ShareSection />
        <Footer />
      </main>
    </div>
  )
}

export default App

