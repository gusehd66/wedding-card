import { useState, useEffect } from 'react'

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  alt: `사진 ${i + 1}`
}))

export default function Lightbox({ isOpen, currentIndex, onClose, onPrev, onNext }) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeydown = (e) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  const currentImage = GALLERY_IMAGES[currentIndex]

  return (
    <div 
      className={`lightbox ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClose()
      }}
    >
      <span 
        className="lightbox-close" 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }}
      >
        &times;
      </span>
      <span 
        className="lightbox-prev" 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onPrev()
        }}
      >
        &#10094;
      </span>
      <span 
        className="lightbox-next" 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onNext()
        }}
      >
        &#10095;
      </span>
      <div 
        className="lightbox-content" 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <img id="lightboxImage" src={currentImage.src} alt={currentImage.alt} />
        <div className="lightbox-counter">
          <span id="lightboxCurrent">{currentIndex + 1}</span> / <span id="lightboxTotal">{GALLERY_IMAGES.length}</span>
        </div>
      </div>
    </div>
  )
}

