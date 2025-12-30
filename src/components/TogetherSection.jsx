import { useEffect, useRef } from 'react'
import { useTogetherTime } from '../hooks/useTogetherTime'

export default function TogetherSection() {
  const { days, hours, minutes, seconds } = useTogetherTime()
  const progressBarRef = useRef(null)

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
        const progressWidth = (percentage / 100) * lineWidth
        progressBarRef.current.style.width = progressWidth + 'px'
      }
    }
    
    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

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
            <div className="timeline-start-date">
              <span>2012-06-18</span>
              <div className="timeline-dot start-dot"></div>
            </div>
            <div className="timeline-today" id="timeline-today">
              <span className="timeline-label">오늘</span>
              <div className="timeline-dot today-dot"></div>
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
    </section>
  )
}

