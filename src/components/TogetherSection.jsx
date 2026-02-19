import { useEffect, useRef, useState } from 'react'
import { useTogetherTime } from '../hooks/useTogetherTime'

// 각 dot에 대한 이미지 설정 (필요에 따라 수정 가능)
const timelineImages = {
  start: '/images/ago_1.jpg', // 시작 날짜 이미지
  // second: '/images/ago_2.jpg', // 두 번째 날짜 이미지
  third: '/images/ago_4.jpg', // 세 번째 날짜 이미지
  fourth: '/images/ago_3.jpg', // 네 번째 날짜 이미지
  today: '/images/meta.jpg' // 오늘 이미지
}

export default function TogetherSection() {
  const { days, hours, minutes, seconds } = useTogetherTime()
  const progressBarRef = useRef(null)
  const [activeTooltip, setActiveTooltip] = useState(null) // 'start' | 'third' | 'fourth' | 'today' | null
  const [modalImage, setModalImage] = useState(null)
  const [userHasClicked, setUserHasClicked] = useState(false) // 사용자가 클릭했는지 여부
  const autoPlayIndexRef = useRef(0) // 자동 재생 인덱스

  useEffect(() => {
    const updateProgress = () => {
      if (!progressBarRef.current) return

      const firstDate = new Date('2012-06-18T00:00:00')
      const weddingDate = new Date('2026-04-12T00:00:00')
      const now = new Date()

      const totalTime = weddingDate - firstDate
      const elapsedTime = now - firstDate
      let percentage = (elapsedTime / totalTime) * 100
      percentage = Math.max(0, Math.min(100, percentage))

      const timelineWrapper = progressBarRef.current.parentElement
      if (timelineWrapper) {
        const lineWidth = timelineWrapper.offsetWidth - 80
        // 실제 날짜 비율로 계산한 길이
        let progressWidth = (percentage / 100) * lineWidth
        // 바 끝을 살짝 더 오른쪽으로 보이게 + 여유 길이(px)
        const extraWidth = 30
        progressWidth = Math.min(progressWidth + extraWidth, lineWidth)
        progressBarRef.current.style.width = progressWidth + 'px'
      }
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  // 자동 재생: 사용자가 클릭하기 전까지 5초마다 순차적으로 이미지 표시 (start, third, fourth, today 4개)
  useEffect(() => {
    if (userHasClicked) return // 사용자가 클릭하면 자동 재생 중지

    const timelineOrder = ['start', 'third', 'fourth', 'today']

    const autoPlayInterval = setInterval(() => {
      const currentIndex = autoPlayIndexRef.current
      // 바로 다음 이미지로 전환 (중간 딜레이 없이)
      setActiveTooltip(timelineOrder[currentIndex])
      autoPlayIndexRef.current = (currentIndex + 1) % timelineOrder.length
    }, 5000) // 5초마다 변경

    // 초기값 설정
    setActiveTooltip(timelineOrder[0])
    autoPlayIndexRef.current = 1

    return () => clearInterval(autoPlayInterval)
  }, [userHasClicked])

  return (
    <section className="section section-together">
      <div className="together-container">
        <h2 className="together-title">D+Day</h2>
        <p className="together-subtitle">우리가 함께한 지</p>

        <div className="timeline-container">
          <div className="timeline-wrapper">
            <div className="timeline-line" id="timeline-line"></div>
            <div className="timeline-progress" id="timeline-progress" ref={progressBarRef}></div>
            <div className="timeline-hearts">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="heart-blue-svg" height="1em" width="1em">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="heart-red-svg" height="1em" width="1em">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
              </svg>
            </div>
            <div className="timeline-start-marker"></div>
            <div className="timeline-arrow-marker"></div>
            {/* 시작 날짜 */}
            <div className="timeline-start-date">
              <span>2012-06-18</span>
              <div
                className="timeline-dot start-dot"
                onClick={() => {
                  setUserHasClicked(true)
                  setActiveTooltip(activeTooltip === 'start' ? null : 'start')
                }}
                style={{ cursor: 'pointer' }}
              ></div>
              {activeTooltip === 'start' && (
                <div className="timeline-tooltip">
                  <img
                    src={timelineImages.start}
                    alt="시작 날짜"
                    onClick={() => setModalImage(timelineImages.start)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>
            {/* 세 번째 날짜 */}
            {/* 두 번째 날짜는 현재 사용하지 않아 주석 처리 */}
            {/* <div className="timeline-second-date">...</div> */}
            <div className="timeline-third-date">
              <span>2018-12-01</span>
              <div
                className="timeline-dot start-dot"
                onClick={() => {
                  setUserHasClicked(true)
                  setActiveTooltip(activeTooltip === 'third' ? null : 'third')
                }}
                style={{ cursor: 'pointer' }}
              ></div>
              {activeTooltip === 'third' && (
                <div className="timeline-tooltip">
                  <img
                    src={timelineImages.third}
                    alt="세 번째 날짜"
                    onClick={() => setModalImage(timelineImages.third)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>
            {/* 네 번째 날짜 */}
            <div className="timeline-fourth-date">
              <span>2021-08-23</span>
              <div
                className="timeline-dot start-dot"
                onClick={() => {
                  setUserHasClicked(true)
                  setActiveTooltip(activeTooltip === 'fourth' ? null : 'fourth')
                }}
                style={{ cursor: 'pointer' }}
              ></div>
              {activeTooltip === 'fourth' && (
                <div className="timeline-tooltip">
                  <img
                    src={timelineImages.fourth}
                    alt="네 번째 날짜"
                    onClick={() => setModalImage(timelineImages.fourth)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>
            {/* <div className="timeline-info">
              <span className="timeline-label">오늘</span>
              <div className="timeline-dot today-dot"></div>
            </div> */}
            <div className="timeline-today" id="timeline-today">
              <span className="timeline-label">~ing</span>
              <div
                className="timeline-dot today-dot"
                onClick={() => {
                  setUserHasClicked(true)
                  setActiveTooltip(activeTooltip === 'today' ? null : 'today')
                }}
                style={{ cursor: 'pointer' }}
              ></div>
              {activeTooltip === 'today' && (
                <div className="timeline-tooltip">
                  <img
                    src={timelineImages.today}
                    alt="오늘"
                    onClick={() => setModalImage(timelineImages.today)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="together-duration" id="together-duration">
          <span>{days.toLocaleString()}</span>일
          <span>{hours}</span>시간
          <span>{minutes}</span>분
          <span>{seconds}</span>초
        </div>
      </div>

      {/* 이미지 모달 */}
      {modalImage && (
        <div
          className="timeline-image-modal"
          onClick={() => setModalImage(null)}
        >
          <div className="timeline-image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="timeline-image-modal-close"
              onClick={() => setModalImage(null)}
            >×</button>
            <img src={modalImage} alt="확대 이미지" />
          </div>
        </div>
      )}
    </section>
  )
}

