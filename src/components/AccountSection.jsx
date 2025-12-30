import { copyAccountNumber } from '../utils/copy'

const accounts = {
  groom: [
    { id: 'text1', account: '국민 073002 04 052919', name: '김현동' },
    { id: 'text2', account: '카카오뱅크 3333 05 0585629', name: '김대성' },
    { id: 'text3', account: '카카오뱅크 3333 05 0585629', name: '한태연' }
  ],
  bride: [
    { id: 'text4', account: '농협 723100 52 034771', name: '이경서' },
    { id: 'text5', account: '카카오뱅크 3333 03 7286312', name: '이현명' },
    { id: 'text6', account: '카카오뱅크 3333 03 7286312', name: '전진숙' }
  ]
}

export default function AccountSection() {
  return (
    <section className="section section-account">
      <div className="send-to-image-wrapper">
        <img src="/images/send_to.png" alt="send to" className="send-to-image" />
      </div>
      
      <ul>
        <h6 style={{ fontWeight: 'bold', borderBottom: '1px solid #000' }}>🤵🏻‍♂️신랑측 계좌번호</h6>
        {accounts.groom.map(acc => (
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
        <h6 style={{ fontWeight: 'bold', borderBottom: '1px solid #000' }}>👰🏻‍♀️신부측 계좌번호</h6>
        {accounts.bride.map(acc => (
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

