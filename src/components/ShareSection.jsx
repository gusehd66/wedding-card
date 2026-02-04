import { useState, useEffect, useRef } from 'react'
import { shareMessage } from '../utils/kakao'
import { copyURL } from '../utils/copy'

export default function ShareSection() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [isVisible])

  return (
    <>

      <section className="section section-share">
        {/* <div className="footer-pattern-wrapper">
          <img
            src="/images/footer-pattern.png"
            alt="footer pattern"
            className="footer-pattern-image"
          />
        </div> */}
        <div
          ref={footerRef}
          className={`footer-content-wrapper ${isVisible ? 'footer-visible' : ''}`}
        >

          <div className="cast-section cast">
            <h2 className="cast-title">CAST</h2>
            <div className="cast-list">
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">GROOM</span>
                  <strong className="tit-info">신랑</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">KIM HYUN DONG</span>
                  <strong className="txt-ko">김현동</strong>
                </div>
              </div>
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">BRIDE</span>
                  <strong className="tit-info">신부</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">LEE KYUNG SEO</span>
                  <strong className="txt-ko">이경서</strong>
                </div>
              </div>
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">GROOM'S FATHER</span>
                  <strong className="tit-info">신랑 아버지</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">KIM DAE SUNG</span>
                  <strong className="txt-ko">김대성</strong>
                </div>
              </div>
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">GROOM'S MOTHER</span>
                  <strong className="tit-info">신랑 어머니</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">HAN TAE YEON</span>
                  <strong className="txt-ko">한태연</strong>
                </div>
              </div>
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">BRIDE'S FATHER</span>
                  <strong className="tit-info">신부 아버지</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">KIM DAE SUNG</span>
                  <strong className="txt-ko">이현명</strong>
                </div>
              </div>
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">BRIDE'S MOTHER</span>
                  <strong className="tit-info">신부 어머니</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">HAN TAE YEON</span>
                  <strong className="txt-ko">전진숙</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="cast-section special">
            <h2 className="cast-title">SPECIAL</h2>
            <div className="cast-list">
              <div className="cast-item test">
                <div className="inner-info">
                  <span className="txt-info">GROOM'S PET</span>
                  <strong className="tit-info">신랑 강아지</strong>
                </div>
                <div className="inner-name">
                  <span className="txt-en">DONG DONG</span>
                  <strong className="txt-ko">동동</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="kakao_btn" onClick={shareMessage}>
          카카오톡 공유하기
        </button>
        <div style={{ textAlign: 'center' }}>
          <button className="url_copy" onClick={copyURL}>청첩장 주소 복사하기</button>
        </div>
      </section>

    </>
  )
}

