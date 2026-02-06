import '../card_section.css'
import { useEffect, useRef, useState } from 'react'

export default function CardSection() {
    // 버튼 클릭 시 카드가 나타나도록 제어
    const [isActive, setIsActive] = useState(false)
    // 앞면 카드 회전 각도 토글 (170deg ↔ 20deg)
    const [isFrontOpen, setIsFrontOpen] = useState(false)
    const wrapRef = useRef(null)

    const handleClick = () => {
        setIsActive(true)
    }

    const handleCardToggle = () => {
        // 카드가 보이는 상태에서만 앞면 각도 토글
        if (!isActive) return
        setIsFrontOpen((prev) => !prev)
    }

    useEffect(() => {
        if (!isActive || !wrapRef.current) return

        let x = 0
        let y = 0
        let mx = 0
        let my = 0
        let rafId = null

        const wrap = wrapRef.current

        const isMobile = () => {
            const mobileKeyWords = ['Android', 'iPhone', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson']
            const ua = navigator.userAgent
            return mobileKeyWords.some((k) => ua.includes(k))
        }

        const isIos = () => {
            const iosKeyWords = ['iPhone', 'iPad']
            const ua = navigator.userAgent
            return iosKeyWords.some((k) => ua.includes(k))
        }

        const loopMobile = () => {
            mx += (x - mx) * 0.1
            my += (y - my) * 0.1
            wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my - 50}deg) rotateY(${mx}deg)`
            rafId = window.requestAnimationFrame(loopMobile)
        }

        const loopPc = () => {
            mx += (x - mx) * 0.1
            my += (y - my) * 0.1
            wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my / 10}deg) rotateY(${-mx / 10}deg)`
            rafId = window.requestAnimationFrame(loopPc)
        }

        const handleMouseMove = (e) => {
            x = e.clientX - window.innerWidth / 2
            y = e.clientY - window.innerHeight / 2
        }

        const handleDeviceOrientation = (event) => {
            if (event.gamma != null) x = event.gamma
            if (event.beta != null) y = event.beta
        }

        const setupMobile = () => {
            if (isIos() && typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent).requestPermission === 'function') {
                ; (DeviceOrientationEvent)
                    .requestPermission()
                    .then((res) => {
                        if (res === 'granted') {
                            window.addEventListener('deviceorientation', handleDeviceOrientation)
                            loopMobile()
                        }
                    })
                    .catch(console.error)
            } else {
                window.addEventListener('deviceorientation', handleDeviceOrientation)
                loopMobile()
            }
        }

        const setupPc = () => {
            window.addEventListener('mousemove', handleMouseMove)
            loopPc()
        }

        if (isMobile()) {
            setupMobile()
        } else {
            setupPc()
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('deviceorientation', handleDeviceOrientation)
            if (rafId !== null) {
                window.cancelAnimationFrame(rafId)
            }
            // transform 초기화
            wrap.style.transform = 'translate3d(-50%, -50%, 0)'
        }
    }, [isActive])

    return (
        <section className="section card-section">
            <button
                type="button"
                className={`card-button ${isActive ? 'dimd' : ''}`}
                onClick={handleClick}
            >
                Invite to Our Wedding<br />Click!
            </button>

            <div
                ref={wrapRef}
                className={`contentWrap ${isActive ? 'active' : ''}`}
                onClick={handleCardToggle}
            >
                <div className={`front ${isFrontOpen ? 'front-open' : ''}`}>
                    <div className='left-image'></div>
                    {/* <div className="sun"></div> */}
                    <div className="cloud1"></div>
                    <div className="cloud2"></div>

                    {/* <div className="m1"></div>
                    <div className="m2"></div>
                    <div className="snow"></div>
                    <div className="m3"></div>
                    <div className="cow"></div> */}
                </div>

                <div className="back">
                    <p className='back-title'> INVITATION</p>
                    <p>십 대의 풋풋하던 설렘,</p>
                    <p>이십 대의 청춘을 같이 보내고</p>
                    <p>이젠 저희가 서른의 시작 앞에서</p>
                    <p>평생을 함께 하기로 약속하려 합니다.</p>
                    <p className='break-line'>소중한 이 자리에 저희와 함께 웃고 있는</p>
                    <p>여러분이 있었으면 좋겠습니다.</p>

                    <div className='back-names'>
                        <div className='back-names-parent'>
                            <div>김대성</div>
                            <div>한태연</div>
                        </div>
                        <div>
                            의 아들
                        </div>
                        <div className='back-names-child'>
                            김현동
                        </div>
                    </div>
                    <div className='back-names'>
                        <div className='back-names-parent'>
                            <div>이현명</div>
                            <div>전진숙</div>
                        </div>
                        <div>
                            의 딸&nbsp;&nbsp;
                        </div>
                        <div className='back-names-child'>
                            이경서
                        </div>
                    </div>

                    <div className='back-footer'>
                        <p>2026년 4월 12일</p>
                        <p>일요일 오후 1시 20분</p>
                        <p className='back-location'>까사그랑데 센트로 6층 에떼르노홀</p>
                    </div>
                    {/* <div className='back-footer-from'>from. 현동♥경서</div> */}
                </div>
            </div>
            <div className='card-toggle-text'>카드를 클릭하면 Open/Close 할 수 있습니다.</div>
        </section>
    )
}
