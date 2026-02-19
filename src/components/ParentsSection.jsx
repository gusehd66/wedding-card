export default function ParentsSection() {
  return (
    <>
      <div className="info-footer-wrapper">
        <div>
          <img src="/images/info_footer.png" alt="info footer" className="info-footer" />
        </div>
      </div>

      <section className="section section-pink parents-section-container">
        <div className="wave-surfer-comp-lower">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        <div className="parents-section parents-section-with-letters-kim">
          <img src="/images/parent_letter3.png" alt="parent letter 1" className="parent-letter-image parent-letter-1" />
          <img src="/images/parent_letter4.png" alt="parent letter 2" className="parent-letter-image parent-letter-3" />
          <p><strong>Groom's Parents</strong></p>
          <img src="/images/parent2.jpg" alt="groom parents" className="groom-parents-image" />
          <img src="/images/couple_letter4.png" alt="couple letter 4" className="couple-letter-4-overlay" />
        </div>
        <div className="parents-section parents-section-with-letters">
          <img src="/images/parent_letter1.png" alt="parent letter 1" className="parent-letter-image parent-letter-4" />
          <img src="/images/parent_letter2.png" alt="parent letter 2" className="parent-letter-image parent-letter-2" />
          <p><strong>Bride's Parents</strong></p>
          <img src="/images/parent1.jpg" alt="bride parents" className="groom-parents-image" />
          <img src="/images/couple_letter3.png" alt="couple letter 3" className="couple-letter-3-overlay" />
        </div>
      </section>

      {/* <section className="section section-white">
        <div className="parents-section">
          <img src="/images/couple_letter2.jpg" alt="couple letter" className="couple-letter-image" />
        </div>
        <div className="parents-section">
          <img src="/images/couple_letter.jpg" alt="couple letter" className="couple-letter-image" />
        </div>
      </section> */}
    </>
  )
}

