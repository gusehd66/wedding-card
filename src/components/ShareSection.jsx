import { shareMessage } from '../utils/kakao'
import { copyURL } from '../utils/copy'

export default function ShareSection() {
  return (
    <section className="section section-share">
      <button type="button" className="kakao_btn" onClick={shareMessage}>
        카카오톡 공유하기
      </button>
      <div style={{ textAlign: 'center' }}>
        <button onClick={copyURL}>청첩장 주소 복사하기</button>
      </div>
    </section>
  )
}

