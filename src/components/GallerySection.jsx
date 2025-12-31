import { useState, useRef, useEffect } from 'react'
import { useCountdown } from '../hooks/useCountdown'

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  alt: `사진 ${i + 1}`
}))

const VISIBLE_COUNT = 3 // 화면에 보이는 이미지 개수

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)
  const countdown = useCountdown()

  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // 다음으로 이동 (무한 스와이프)
      setCurrentIndex(prev => (prev + 1) % GALLERY_IMAGES.length)
    }
    if (isRightSwipe) {
      // 이전으로 이동 (무한 스와이프)
      setCurrentIndex(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }

    setIsDragging(false)
    setTouchStart(0)
    setTouchEnd(0)
  }

  // 마우스 드래그 지원
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTouchEnd(e.clientX)
    }
  }

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // 다음으로 이동 (무한 스와이프)
      setCurrentIndex(prev => (prev + 1) % GALLERY_IMAGES.length)
    }
    if (isRightSwipe) {
      // 이전으로 이동 (무한 스와이프)
      setCurrentIndex(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }

    setIsDragging(false)
    setTouchStart(0)
    setTouchEnd(0)
  }

  useEffect(() => {
    if (isDragging) {
      const handleMouseMoveWrapper = (e) => handleMouseMove(e)
      const handleMouseUpWrapper = () => handleMouseUp()
      
      document.addEventListener('mousemove', handleMouseMoveWrapper)
      document.addEventListener('mouseup', handleMouseUpWrapper)
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveWrapper)
        document.removeEventListener('mouseup', handleMouseUpWrapper)
      }
    }
  }, [isDragging, touchStart, touchEnd, currentIndex])


  // translateX 계산 - 선택된 사진이 가운데에 오도록 조정
  // 가운데 사진이 정확히 중앙에 오려면 각 사진의 너비만큼 이동
  const translateX = -(currentIndex * (100 / VISIBLE_COUNT))
  
  // 현재 선택된 사진 정보
  const selectedImage = GALLERY_IMAGES[currentIndex]

  return (
    <section className="section section-gallery">
      {/* 선택된 사진을 크게 표시하는 오버레이 */}
      <div className="gallery-selected-overlay">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          draggable={false}
          onContextMenu={(e) => {
            e.preventDefault()
            return false
          }}
          onDragStart={(e) => {
            e.preventDefault()
            return false
          }}
          onTouchStart={(e) => {
            if (e.touches.length > 1) {
              e.preventDefault()
            }
          }}
          onTouchMove={(e) => {
            if (e.touches.length > 1) {
              e.preventDefault()
            }
          }}
        />
      </div>
      
      <div 
        className="gallery-carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          maxWidth: '414px',
          margin: '0 auto',
          touchAction: 'pan-x' // 가로 스와이프만 허용
        }}
      >
        <div className="gallery-carousel-wrapper">
          <div
            ref={carouselRef}
            className="gallery-carousel"
            style={{
              display: 'flex',
              transform: `translateX(${translateX}%)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              willChange: 'transform'
            }}
          >
          {GALLERY_IMAGES.map((img, index) => {
            return (
              <div
                key={img.id}
                className="gallery-carousel-item"
                style={{
                  flex: `0 0 ${100 / VISIBLE_COUNT}%`,
                  padding: '4px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  className="gallery-carousel-image-wrapper film-frame"
                  onContextMenu={(e) => {
                    e.preventDefault()
                    return false
                  }}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    overflow: 'visible',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    position: 'relative',
                    backgroundImage: 'url(/images/film.jpg)',
                    backgroundSize: '103% 103%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // transform: 'scale(0.85)',
                    // opacity: 0.6,
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                  }}
                >
                <div className="film-image-container">
                  <img
                    src={img.src}
                    alt={img.alt}
                    draggable={false}
                    loading="lazy"
                    className="film-image"
                    onContextMenu={(e) => {
                      e.preventDefault()
                      return false
                    }}
                    onDragStart={(e) => {
                      e.preventDefault()
                      return false
                    }}
                    onTouchStart={(e) => {
                      // 다중 터치(핀치 줌)만 방지
                      if (e.touches.length > 1) {
                        e.preventDefault()
                      }
                    }}
                    onTouchMove={(e) => {
                      // 다중 터치(핀치 줌)만 방지
                      if (e.touches.length > 1) {
                        e.preventDefault()
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            )
          })}
          </div>
        </div>
        
        {/* 인디케이터 - 각 사진마다 표시 */}
        <div className="gallery-carousel-indicators">
          {GALLERY_IMAGES.map((_, index) => (
            <div
              key={index}
              className={`gallery-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>
      
      <div>
        <img src="/images/calendar.jpg" alt="calendar" />
      </div>
      
      <div className="countdown-section">
        <div className="countdown-container">
          <div className="countdown-card">
            <div className="countdown-label">DAYS</div>
            <div className="countdown-value">{String(countdown.days).padStart(2, '0')}</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-label">HOUR</div>
            <div className="countdown-value">{String(countdown.hours).padStart(2, '0')}</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-label">MIN</div>
            <div className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-label">SEC</div>
            <div className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</div>
          </div>
        </div>
        <div className="countdown-message">
          <span>김현동 <span className="heart">♥</span> 이경서의 결혼식이 <span className="days-highlight">{countdown.days}</span>일 남았습니다.</span>
        </div>
      </div>
    </section>
  )
}

