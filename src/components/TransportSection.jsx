import { useEffect } from 'react'
import { copyAccountNumber } from '../utils/copy'
import { initNaverMap } from '../utils/naverMap'

export default function TransportSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.naver?.maps) {
      initNaverMap()
    } else {
      const checkNaver = setInterval(() => {
        if (window.naver?.maps) {
          initNaverMap()
          clearInterval(checkNaver)
        }
      }, 100)
      
      return () => clearInterval(checkNaver)
    }
  }, [])

  return (
    <section className="section section-transport">
      <div className="direction-image-wrapper">
        <img src="/images/direction.png" alt="direction" className="direction-image" />
      </div>
      <div className="map-section">
        <div id="map-container" style={{ width: '100%', height: '300px', margin: '20px 0' }}></div>
        <div className="map-section-content">
          <div className="map-section-content-left">
            <div id="map">서울 광진구 능동로 87</div>
            <div id="map2" style={{ fontWeight: 'bold' }}>까사그랑데</div>
          </div>
          <div>
            <button className='copy-btn' onClick={() => copyAccountNumber('map')}>복사하기</button>
          </div>
        </div>
      </div>

      <div className="transport-info">
        <p><strong>🚙 자가용</strong><br />네비게이션: "까사그랑데" 또는 "건대입구역 자이엘라" 입력<br /></p>
        <p><strong>🏁 주차</strong><br />건물 내 B1 ~ B5 + 외부 주차장<br />주차 요원의 안내를 받으세요.</p>
        <p><strong>🚊 지하철</strong><br />2호선, 7호선 건대입구역 하차<br />5번출구에서 전방 직진 30M</p>
        <p><strong>🚌 버스</strong><br />건대로데오거리입구 정류장 하차<br />간선: 240, 721, 지선: 2222, 2224, 직행: 3500, 마을버스: 광진05</p>
      </div>
    </section>
  )
}

