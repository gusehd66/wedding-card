import { useEffect, useRef } from 'react'

export function useGallerySlideshow(totalSlides) {
  const intervalRef = useRef(null)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    const slides = document.querySelectorAll('.gallery-slide')
    if (slides.length === 0) return

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    currentIndexRef.current = 0
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active')
      } else {
        slide.classList.remove('active')
      }
    })

    intervalRef.current = setInterval(() => {
      slides[currentIndexRef.current].classList.remove('active')
      currentIndexRef.current = (currentIndexRef.current + 1) % slides.length
      slides[currentIndexRef.current].classList.add('active')
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [totalSlides])
}

