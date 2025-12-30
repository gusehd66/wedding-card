import { useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  original: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  thumbnail: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  description: `사진 ${i + 1}`
}))

export default function Lightbox({ isOpen, currentIndex, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="lightbox-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          background: 'rgba(0, 0, 0, 0.5)',
          border: 'none',
          color: '#fff',
          fontSize: '40px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1
        }}
      >
        &times;
      </button>
      <div 
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ImageGallery
          items={GALLERY_IMAGES}
          startIndex={currentIndex}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          showNav={true}
          autoPlay={false}
          slideInterval={3000}
          slideDuration={450}
          useBrowserFullscreen={false}
          swipeThreshold={50}
          flickThreshold={0.4}
          renderItem={(item) => (
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                width: '100%',
                touchAction: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
              onContextMenu={(e) => {
                e.preventDefault()
                return false
              }}
            >
              <img
                src={item.original}
                alt={item.description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  touchAction: 'none',
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
            </div>
          )}
          renderLeftNav={(onClick, disabled) => (
            <button
              type="button"
              className="image-gallery-icon image-gallery-left-nav"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClick(e)
              }}
              disabled={disabled}
              aria-label="Previous image"
            />
          )}
          renderRightNav={(onClick, disabled) => (
            <button
              type="button"
              className="image-gallery-icon image-gallery-right-nav"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClick(e)
              }}
              disabled={disabled}
              aria-label="Next image"
            />
          )}
        />
      </div>
    </div>
  )
}

