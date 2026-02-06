import '../card_section.css'
import { useEffect, useRef, useState } from 'react'

export default function CardSection() {
    // 버튼 클릭 시 카드가 나타나도록 제어
    const [isActive, setIsActive] = useState(false)
    const wrapRef = useRef(null)

    const handleClick = () => {
        setIsActive(true)
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

            <div ref={wrapRef} className={`contentWrap ${isActive ? 'active' : ''}`}>
                <div className="front">
                    <div className='left-image'></div>
                    <div className="sun"></div>
                    <div className="cloud1"></div>
                    <div className="cloud2"></div>

                    <div className="m1"></div>
                    <div className="m2"></div>
                    <div className="snow"></div>
                    <div className="m3"></div>
                    <div className="cow"></div>
                </div>

                <div className="back">
                    <p className="msg">
                        2026.04.12 SUN 01:20PM
                        <br />
                        까사그랑데 센트로
                    </p>
                    <h3>from. 현동 & 경서</h3>
                </div>
            </div>
        </section>
    )
}
