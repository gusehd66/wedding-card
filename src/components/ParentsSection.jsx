export default function ParentsSection() {
  return (
    <>
      <div className="info-footer-wrapper">
        <div>
          <img src="/images/info_footer.png" alt="info footer" className="info-footer" />
        </div>
      </div>

      <section className="section section-pink">
        <div className="wave-surfer-comp-lower">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        <div className="parents-section">
          <p><strong>Groom's Parents</strong></p>
          <img src="/images/groom_parent.png" alt="groom parents" className="groom-parents-image" />
        </div>
        <div className="parents-section">
          <p><strong>Bride's Parents</strong></p>
          <img src="/images/groom_parent.png" alt="bride parents" className="groom-parents-image" />
        </div>
      </section>

      <section className="section section-white">
        <div className="parents-section">
          <img src="/images/couple_letter.png" alt="couple letter" className="couple-letter-image" />
        </div>
        <div className="parents-section">
          <img src="/images/couple_letter2.png" alt="couple letter" className="couple-letter-image" />
        </div>
      </section>
    </>
  )
}

