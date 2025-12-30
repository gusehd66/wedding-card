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
    if (e) {
      e.preventDefault()
      e.stopPropagation()
      if (typeof e.stopImmediatePropagation === 'function') {
        e.stopImmediatePropagation()
      }
    }
    
    if (!showAllImages) {
      const items = galleryGridRef.current?.querySelectorAll('.gallery-item-group-2, .gallery-item-group-3')
      items?.forEach(item => {
        item.style.display = 'block'
      })
      setShowAllImages(true)
    } else {
      const items = galleryGridRef.current?.querySelectorAll('.gallery-item-group-2, .gallery-item-group-3')
      items?.forEach(item => {
        item.style.display = 'none'
      })
      setShowAllImages(false)
      document.querySelector('.section-gallery')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageClick = (e, index) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
      if (typeof e.stopImmediatePropagation === 'function') {
        e.stopImmediatePropagation()
      }
    }
    
    if (onImageClick) {
      onImageClick(index)
    }
  }

  useEffect(() => {
    const items = galleryGridRef.current?.querySelectorAll('.gallery-item-group-2, .gallery-item-group-3')
    items?.forEach(item => {
      item.style.display = 'none'
    })
  }, [])

  const shouldShowMoreButton = GALLERY_IMAGES.length > INITIAL_VISIBLE_COUNT

  return (
    <section className="section section-gallery">
      <div className="gallery-slideshow" id="gallerySlideshow">
        {GALLERY_IMAGES.map((img, index) => (
          <div 
            key={img.id} 
            className={`gallery-slide ${index === 0 ? 'active' : ''}`}
            onContextMenu={(e) => {
              e.preventDefault()
              return false
            }}
            style={{
              touchAction: 'none',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt}
              draggable={false}
              onContextMenu={(e) => {
                e.preventDefault()
                return false
              }}
              onDragStart={(e) => {
                e.preventDefault()
                return false
              }}
              style={{
                touchAction: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="gallery-grid" id="galleryGrid" ref={galleryGridRef}>
        {GALLERY_IMAGES.map((img, index) => {
          let groupClass = ''
          if (index >= 9 && index < 18) groupClass = 'gallery-item-group-2'
          else if (index >= 18) groupClass = 'gallery-item-group-3'
          
          return (
            <div 
              key={img.id} 
              className={`gallery-item ${groupClass}`}
              onClick={(e) => handleImageClick(e, index)}
              onTouchStart={(e) => {
                e.preventDefault()
              }}
              onContextMenu={(e) => {
                e.preventDefault()
                return false
              }}
              style={{
                touchAction: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                draggable={false}
                onClick={(e) => handleImageClick(e, index)}
                onTouchStart={(e) => {
                  e.preventDefault()
                }}
                onContextMenu={(e) => {
                  e.preventDefault()
                  return false
                }}
                onDragStart={(e) => {
                  e.preventDefault()
                  return false
                }}
                style={{
                  touchAction: 'none',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  pointerEvents: 'auto'
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

