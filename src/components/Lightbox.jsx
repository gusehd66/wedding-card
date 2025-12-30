import { useState, useEffect } from 'react'

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/wedding_${i + 1}.${i < 5 || (i >= 15 && i < 17) ? 'jpg' : 'jpeg'}`,
  alt: `사진 ${i + 1}`
}))

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleImageClick = (e) => {
      const img = e.target.closest('.gallery-item img')
      if (!img) return
      
      e.preventDefault()
      e.stopPropagation()
      
      if (img.complete && img.naturalWidth > 0) {
        const allImages = Array.from(document.querySelectorAll('.gallery-item img'))
        const index = allImages.indexOf(img)
        if (index >= 0) {
          setCurrentIndex(index)
          setIsOpen(true)
        }
      }
    }

    const galleryGrid = document.getElementById('galleryGrid')
    if (galleryGrid) {
      galleryGrid.addEventListener('click', handleImageClick)
      return () => galleryGrid.removeEventListener('click', handleImageClick)
    }
  }, [])

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
        setIsOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
      }
    }

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = GALLERY_IMAGES[currentIndex]

  return (
    <div 
      className={`lightbox ${isOpen ? 'active' : ''}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="lightbox-close" onClick={() => setIsOpen(false)}>&times;</span>
      <span 
        className="lightbox-prev" 
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
        }}
      >
        &#10094;
      </span>
      <span 
        className="lightbox-next" 
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
        }}
      >
        &#10095;
      </span>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img id="lightboxImage" src={currentImage.src} alt={currentImage.alt} />
        <div className="lightbox-counter">
          <span id="lightboxCurrent">{currentIndex + 1}</span> / <span id="lightboxTotal">{GALLERY_IMAGES.length}</span>
        </div>
      </div>
    </div>
  )
}

