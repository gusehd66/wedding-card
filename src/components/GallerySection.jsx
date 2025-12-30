import { useState, useEffect, useRef } from 'react'
import { useGallerySlideshow } from '../hooks/useGallerySlideshow'
import { useCountdown } from '../hooks/useCountdown'

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  alt: `사진 ${i + 1}`
}))

const INITIAL_VISIBLE_COUNT = 9

export default function GallerySection({ onImageClick }) {
  const [showAllImages, setShowAllImages] = useState(false)
  const galleryGridRef = useRef(null)
  
  useGallerySlideshow(GALLERY_IMAGES.length)
  const countdown = useCountdown()

  const handleMoreClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // e.stopImmediatePropagation()
    
    if (!showAllImages) {
      setShowAllImages(true)
    } else {
      setShowAllImages(false)
      const gallerySection = document.querySelector('.section-gallery')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleImageClick = (e, index) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    
    if (onImageClick) {
      onImageClick(index)
    }
  }

  const shouldShowMoreButton = GALLERY_IMAGES.length > INITIAL_VISIBLE_COUNT

  return (
    <section className="section section-gallery">
      {/* <div className="gallery-slideshow" id="gallerySlideshow">
        {GALLERY_IMAGES.map((img, index) => (
          <div key={img.id} className={`gallery-slide ${index === 0 ? 'active' : ''}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div> */}
      
      <div className="gallery-grid" id="galleryGrid" ref={galleryGridRef}>
        {GALLERY_IMAGES.map((img, index) => {
          const isHidden = !showAllImages && index >= INITIAL_VISIBLE_COUNT

          return (
            <div
              key={img.id}
              className="gallery-item"
              onClick={(e) => handleImageClick(e, index)}
              onTouchStart={(e) => {
                e.preventDefault()
              }}
              style={{ display: isHidden ? 'none' : 'block' }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                onClick={(e) => handleImageClick(e, index)}
                onTouchStart={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
          )
        })}
      </div>
      
      {shouldShowMoreButton && (
        <button 
          type="button" 
          className="more-btn" 
          id="moreBtn"
          onClick={handleMoreClick}
          onTouchStart={(e) => {
            e.preventDefault()
          }}
        >
          {showAllImages ? '접기' : '더보기'}
        </button>
      )}
      
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

