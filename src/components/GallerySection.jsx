import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useCountdown } from '../hooks/useCountdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxTouchStart, setLightboxTouchStart] = useState(0)
  const [lightboxTouchEnd, setLightboxTouchEnd] = useState(0)
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

  // 모달이 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])


  // Swiper에서 currentIndex는 onSlideChange로 관리됨

  return (
    <section className="section section-gallery">

      {/* Tailwind CSS 모달 - Portal을 사용하여 body에 직접 렌더링 */}
      {lightboxOpen && createPortal(
        <div
          id="gallery-modal"
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/95 overflow-y-auto overflow-x-hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setLightboxOpen(false)
            }
          }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-5"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflow: 'hidden'
            }}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-5 right-6 bg-gradient-to-br from-black/70 to-black/50 hover:from-black/90 hover:to-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 select-none touch-manipulation z-[10000] backdrop-blur-sm border border-white/20 md:top-3 md:right-4 md:w-10 md:h-10"
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000,
                transition: 'all 0.3s ease',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
              onClick={() => setLightboxOpen(false)}
              aria-label="닫기"
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 이전 버튼 */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black/70 to-black/50 hover:from-black/90 hover:to-black/70 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 select-none touch-manipulation z-[10000] backdrop-blur-sm border border-white/20 md:left-3 md:w-12 md:h-12"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                // border: '1px solid rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000,
                transition: 'all 0.3s ease',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
              onClick={() => {
                setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
              }}
              aria-label="이전"
            >
              <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 이미지 컨텐츠 */}
            <div
              className="relative w-full h-full flex items-center justify-center flex-col"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: 1
              }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => setLightboxTouchStart(e.touches[0].clientX)}
              onTouchMove={(e) => setLightboxTouchEnd(e.touches[0].clientX)}
              onTouchEnd={() => {
                if (!lightboxTouchStart || !lightboxTouchEnd) return

                const distance = lightboxTouchStart - lightboxTouchEnd

                if (distance > minSwipeDistance) {
                  // 왼쪽 스와이프 - 다음 이미지
                  setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
                } else if (distance < -minSwipeDistance) {
                  // 오른쪽 스와이프 - 이전 이미지
                  setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
                }

                setLightboxTouchStart(0)
                setLightboxTouchEnd(0)
              }}
            >
              <img
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                style={{
                  maxWidth: '85%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  pointerEvents: 'auto'
                }}
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
              {/* 카운터 */}
              <div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm px-5 py-2.5 rounded-full select-none shadow-lg border border-white/20"
                style={{
                  position: 'absolute',
                  bottom: '70px',
                  left: '50%',
                  // transform: 'translateX(-50%)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  userSelect: 'none',
                  zIndex: 10001
                }}
              >
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{lightboxIndex + 1}</span>
                <span style={{ margin: '0 8px', color: 'rgba(255, 255, 255, 0.6)' }}>/</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{GALLERY_IMAGES.length}</span>
              </div>

              {/* 인디케이터 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10001
                }}
              >
                {GALLERY_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxIndex(index)
                    }}
                    style={{
                      width: index === lightboxIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: index === lightboxIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`이미지 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>

            {/* 다음 버튼 */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black/70 to-black/50 hover:from-black/90 hover:to-black/70 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 select-none touch-manipulation z-[10000] backdrop-blur-sm border border-white/20 md:right-3 md:w-12 md:h-12"
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                // border: '1px solid rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000,
                transition: 'all 0.3s ease',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
              onClick={() => {
                setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
              }}
              aria-label="다음"
            >
              <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}

      <div className="inner-gallery">
        <div className="calendar-title-image">
          <img src="/images/ico_tit.png" alt="calendar title" />
        </div>
        <div className="gallery-title-text title">Gallery</div>
        <div className="gallery-title-text desc">클릭 시 이미지를 크게 보실 수 있습니다.</div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5000}
          allowTouchMove={true}
          pagination={false}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex)
          }}
          className="gallery-swiper"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <SwiperSlide key={img.id}>
              <div
                className="gallery-slide-item"
                onClick={() => {
                  setLightboxIndex(index)
                  setLightboxOpen(true)
                }}
                onContextMenu={(e) => {
                  e.preventDefault()
                  return false
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  loading="lazy"
                  className="gallery-image"
                  onContextMenu={(e) => {
                    e.preventDefault()
                    return false
                  }}
                  onDragStart={(e) => {
                    e.preventDefault()
                    return false
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="inner-gallery inner-gallery-reverse">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          allowTouchMove={true}
          pagination={false}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex)
          }}
          className="gallery-swiper gallery-swiper-reverse"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <SwiperSlide key={`reverse-${img.id}`}>
              <div
                className="gallery-slide-item gallery-slide-item-small"
                onClick={() => {
                  setLightboxIndex(index)
                  setLightboxOpen(true)
                }}
                onContextMenu={(e) => {
                  e.preventDefault()
                  return false
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  loading="lazy"
                  className="gallery-image gallery-image-small"
                  onContextMenu={(e) => {
                    e.preventDefault()
                    return false
                  }}
                  onDragStart={(e) => {
                    e.preventDefault()
                    return false
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="calendar-container">
        {/* 배경 이미지들 */}
        <div className="calendar-bg-wrapper">
          <div className="calendar-bg-top" style={{ backgroundImage: 'url(/images/calendar_top.png)' }}></div>
          <div className="calendar-bg-main" style={{ backgroundImage: 'url(/images/calendar_main.png)' }}>
            {/* 캘린더 콘텐츠 */}
            <div className="calendar-content">
              {/* ico_tit.png 이미지 */}
              <div className="calendar-title-image">
                <img src="/images/ico_tit.png" alt="calendar title" />
              </div>
              <div className="calendar-title-text">Calendar</div>
              <div className="calendar-month-wrapper">
                <div className="calendar-month" style={{ backgroundImage: 'url(/images/calendar_month.png)' }}>
                  <span className="calendar-month-text">April</span>
                </div>
              </div>
              {/* 달력을 만들 공간 */}
              <div className="calendar-custom-area">
                <ul className="list-date">
                  <li>
                    <span className="txt-week">sat</span>
                    <span className="txt-day">11</span>
                  </li>
                  <li className="active">
                    <span className="txt-week">sun</span>
                    <span className="txt-day">12</span>
                  </li>
                  <li>
                    <span className="txt-week">mon</span>
                    <span className="txt-day">13</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="calendar-date-text">2026년 4월 12일 일요일 오후 1시 20분</div>
          </div>
          <div className="calendar-bg-bottom" style={{ backgroundImage: 'url(/images/calendar_bottom.png)' }}></div>
        </div>
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

