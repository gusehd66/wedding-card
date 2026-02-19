import { useState } from 'react'
import { copyAccountNumber } from '../utils/copy'

const accounts = {
  groom: [
    { id: 'text1', account: '국민 073002 04 052919', name: '김현동' },
    { id: 'text2', account: '국민 664625 01 006299', name: '김대성' },
    { id: 'text3', account: '국민 919302 01 030001', name: '한태연' }
  ],
  bride: [
    { id: 'text4', account: '신한 110 198 402168', name: '이경서' },
    { id: 'text5', account: '농협 100030 56 079703', name: '이현명' },
    { id: 'text6', account: '농협 201018 56 106801', name: '전진숙' }
  ]
}

export default function AccountSection() {
  const [isGroomOpen, setIsGroomOpen] = useState(false)
  const [isBrideOpen, setIsBrideOpen] = useState(false)

  return (
    <section className="section section-account">
      <div className="send-to-image-wrapper">
        <img src="/images/send_to.png" alt="send to" className="send-to-image" />
      </div>

      <ul>
        <h6
          className="account-header"
          onClick={() => setIsGroomOpen(!isGroomOpen)}
          style={{ fontWeight: 'bold', borderBottom: '1px solid #000', cursor: 'pointer' }}
        >
          {/* 🤵🏻‍♂️신랑측 계좌번호 {isGroomOpen ? '▼' : '▶'} */}
          🤵🏻신랑측 계좌번호 {isGroomOpen ? '▼' : '▶'}
        </h6>
        {isGroomOpen && accounts.groom.map(acc => (
          <li key={acc.id}>
            <span>
              <p id={acc.id}>{acc.account}</p>
              <p>{acc.name}</p>
            </span>
            <button onClick={() => copyAccountNumber(acc.id)}>복사하기</button>
          </li>
        ))}
      </ul>

      <br />

      <ul>
        <h6
          className="account-header"
          onClick={() => setIsBrideOpen(!isBrideOpen)}
          style={{ fontWeight: 'bold', borderBottom: '1px solid #000', cursor: 'pointer' }}
        >
          {/* 👰🏻‍♀️신부측 계좌번호 {isBrideOpen ? '▼' : '▶'} */}
          👰🏻신부측 계좌번호 {isBrideOpen ? '▼' : '▶'}
        </h6>
        {isBrideOpen && accounts.bride.map(acc => (
          <li key={acc.id}>
            <span>
              <p id={acc.id}>{acc.account}</p>
              <p>{acc.name}</p>
            </span>
            <button onClick={() => copyAccountNumber(acc.id)}>복사하기</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

