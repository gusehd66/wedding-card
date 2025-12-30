// 재생 버튼 클릭 이벤트
document.getElementById('play-btn')?.addEventListener('click', function() {
    // 음악 재생 기능 (필요시 구현)
    console.log('재생 버튼 클릭');
    alert('음악 재생 기능을 구현하세요');
});

// 복사 함수 - 계좌번호는 숫자만 복사
function copy(id) {
    var element = document.getElementById(id);
    var text = element.textContent || element.innerText;
    
    // 계좌번호인 경우 (숫자와 공백이 포함된 경우) 은행명 제거하고 숫자만 추출
    // 은행명 패턴: 국민, 카카오뱅크, 농협, 신한, 우리, 하나, 기업, SC제일, 씨티, 대구, 부산, 경남, 광주, 전북, 제주, 수협, 우체국, 새마을금고 등
    var bankPattern = /^(국민|카카오뱅크|농협|신한|우리|하나|기업|SC제일|씨티|대구|부산|경남|광주|전북|제주|수협|우체국|새마을금고|신협|산업|한국씨티|케이뱅크|토스뱅크|카뱅)\s*/i;
    
    // 은행명이 있는 경우 제거하고 숫자와 공백만 남김
    var accountNumber = text.replace(bankPattern, '').trim();
    
    // 공백 제거하여 숫자만 복사
    accountNumber = accountNumber.replace(/\s+/g, '');
    
    // 숫자만 있는 경우 계좌번호로 간주
    if (/^\d+$/.test(accountNumber)) {
        // 클립보드에 복사
        var textarea = document.createElement("textarea");
        textarea.value = accountNumber;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert("계좌번호가 복사되었습니다: " + accountNumber);
    } else {
        // 일반 텍스트 복사 (기존 방식)
        var r = document.createRange();
        r.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        alert("복사되었습니다");
        window.getSelection().removeAllRanges();
    }
}

// URL 복사 함수 (sample과 동일한 방식)
function clip() {
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.")
}

const JAVASCRIPT_KEY = 'ce28d51a4e91630df706129c5d4a99db';
Kakao.init(JAVASCRIPT_KEY);


// 카카오 SDK 초기화
document.addEventListener('DOMContentLoaded', function() {
    const JAVASCRIPT_KEY = 'ce28d51a4e91630df706129c5d4a99db';
    
    if (typeof Kakao !== 'undefined') {
        
        if(!Kakao.isInitialized()) {
            Kakao.init(JAVASCRIPT_KEY);
        }
        console.log('Kakao SDK 초기화 완료');
        
//         // 카카오톡 공유 버튼 설정
//         // GitHub Pages URL 고정
//         // const githubPagesUrl = 'https://gusehd66.github.io/wedding-card/';
//         // const currentUrl = window.location.href;
//         // const isLocalhost = currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1');
        
//         // // 이미지 URL 설정
//         // // localhost인 경우와 GitHub Pages인 경우 구분
//         // let imageUrl;
//         // if (isLocalhost) {
//         //     const baseUrl = 'http://127.0.0.1:5500';
//         //     imageUrl = baseUrl + '/fe/images/marker_pink.png';
//         // } else {
//         //     // GitHub Pages인 경우
//         //     imageUrl = githubPagesUrl + 'images/header_image.png';
//         // }
//         // console.log("image url:", imageUrl);
//         // // 카카오톡 공유 버튼 생성
//         // // 항상 GitHub Pages URL로 연결
//         // Kakao.Share.createDefaultButton({
//         //     container: '#kakaotalk-sharing-btn',
//         //     objectType: 'feed',
//         //     content: {
//         //         title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
//         //         description: '2026.04.12 SUN 13:00PM\n까사그랑데',
//         //         imageUrl:
//         //         'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//         //       link: {
//         //         mobileWebUrl: githubPagesUrl,
//         //         webUrl: githubPagesUrl,
//         //       },
//         //     },
//         //     buttons: [
//         //         {
//         //             title: '청첩장 보기',
//         //             link: {
//         //                 mobileWebUrl: githubPagesUrl,
//         //                 webUrl: githubPagesUrl,
//         //             },
//         //         },
//         //     ],
//         // });

//         var kakao_link = location.href;
//         Kakao.Share.sendDefault({
//             container: '#kakaotalk-sharing-btn',
//             objectType: 'feed',
//             content: {
//               title: '오늘의 디저트',
//               description: '아메리카노, 빵, 케익',
//               imageUrl:
//                 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//                 imageWidth: 300,
// 					imageHeight: 200,
//               link: {
//                 mobileWebUrl: 'https://developers.kakao.com',
//                 webUrl: 'https://developers.kakao.com',
//               },
//             },
//             social: {
//               likeCount: 10,
//               commentCount: 20,
//               sharedCount: 30,
//             },
//             buttons: [
//                 {
//                     title: '자세히보기',
//                     link: {
//                         mobileWebUrl: kakao_link,
//                         webUrl: kakao_link
//                     }
//                 }
//             ]
//           });
    }
//         console.error('Kakao SDK를 불러올 수 없습니다.');
//     }
});

function shareMessage() {
    const JAVASCRIPT_KEY = 'ce28d51a4e91630df706129c5d4a99db';
    // const currentURL = window.location.href;
    const currentURL = 'https://gusehd66.github.io/wedding-card/';
    if (!window.Kakao) {
        alert('Kakao SDK가 로드되지 않았습니다.');
        return;
    }

    if (!Kakao.isInitialized()) {
        Kakao.init(JAVASCRIPT_KEY);
    }

    console.log(Kakao, Kakao.Share);

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
            description: '2026.04.12 SUN 13:00PM\n까사그랑데',
            imageUrl: currentURL + 'images/meta.jpg',
            link: {
                mobileWebUrl: currentURL,
                webUrl: currentURL,
            },
        },
        buttons: [
            {
                title: '청첩장 보기',
                link: {
                    mobileWebUrl: currentURL,
                    webUrl: currentURL,
                },
            },
        ],
    });
}


// 갤러리 이미지 로드
function loadGalleryImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    const gallerySlideshow = document.getElementById('gallerySlideshow');
    if (!galleryGrid || !gallerySlideshow) return;

    // images/gallery 폴더의 이미지 목록
    // 숫자 순서대로 정렬하기 위해 배열로 정의
    const imageFiles = [
        'wedding_1.jpg',
        'wedding_2.jpg',
        'wedding_3.jpg',
        'wedding_4.jpg',
        'wedding_5.jpg',
        'wedding_6.jpeg',
        'wedding_7.jpeg',
        'wedding_8.jpeg',
        'wedding_9.jpeg',
        'wedding_10.jpeg',
        'wedding_11.jpeg',
        'wedding_12.jpeg',
        'wedding_13.jpeg',
        'wedding_14.jpeg',
        'wedding_15.jpeg',
        'wedding_16.jpg',
        'wedding_17.jpg',
        'wedding_18.jpeg',
        'wedding_19.jpeg',
        'wedding_20.jpeg',
        'wedding_21.jpeg',
        'wedding_22.jpeg',
        'wedding_23.jpeg'
    ];

    // 갤러리 그리드 초기화
    galleryGrid.innerHTML = '';
    gallerySlideshow.innerHTML = '';

    // 슬라이드쇼 이미지 생성
    imageFiles.forEach((filename, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        if (index === 0) {
            slide.classList.add('active');
        }
        const img = document.createElement('img');
        img.src = `images/gallery/${filename}`;
        img.alt = `사진 ${index + 1}`;
        img.onerror = function() {
            this.style.display = 'none';
        };
        slide.appendChild(img);
        gallerySlideshow.appendChild(slide);
    });

    // 그리드 이미지 아이템 생성
    imageFiles.forEach((filename, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = `images/gallery/${filename}`;
        img.alt = `사진 ${index + 1}`;
        img.loading = 'lazy';
        img.onerror = function() {
            // 이미지 로드 실패 시 플레이스홀더 표시
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = `
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#ccc"/>
                </svg>
                <p>사진 ${index + 1}</p>
            `;
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #f5f5f5;
                color: #999;
                font-size: 12px;
            `;
            this.parentElement.appendChild(placeholder);
        };
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });

    // 슬라이드쇼 시작
    initGallerySlideshow(imageFiles.length);
    
    // 더보기 기능 초기화
    initMoreButton();
    // 더보기 버튼 이벤트 연결
    attachMoreButtonEvent();
    // 라이트박스 초기화 (이미지 로드 후)
    setTimeout(() => {
        initLightbox();
    }, 100);
}

// 갤러리 슬라이드쇼 초기화
let gallerySlideInterval = null;
let currentSlideIndex = 0;

function initGallerySlideshow(totalSlides) {
    const slides = document.querySelectorAll('.gallery-slide');
    if (slides.length === 0) return;

    // 기존 인터벌 제거
    if (gallerySlideInterval) {
        clearInterval(gallerySlideInterval);
    }

    // 첫 번째 슬라이드 표시
    currentSlideIndex = 0;
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // 자동 슬라이드쇼 시작 (3초마다 변경)
    gallerySlideInterval = setInterval(() => {
        // 현재 슬라이드 제거
        slides[currentSlideIndex].classList.remove('active');
        
        // 다음 슬라이드로 이동
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // 새 슬라이드 표시
        slides[currentSlideIndex].classList.add('active');
    }, 3000); // 3초마다 변경

    // 마우스 호버 시 일시정지
    const slideshow = document.getElementById('gallerySlideshow');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', () => {
            if (gallerySlideInterval) {
                clearInterval(gallerySlideInterval);
            }
        });
        
        slideshow.addEventListener('mouseleave', () => {
            gallerySlideInterval = setInterval(() => {
                slides[currentSlideIndex].classList.remove('active');
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                slides[currentSlideIndex].classList.add('active');
            }, 3000);
        });
    }
}

// 갤러리 더보기 기능
let showAllImages = false;
let allGalleryItems = [];
const initialVisibleCount = 9;

function initMoreButton() {
    allGalleryItems = document.querySelectorAll('.gallery-item');
    
    if (allGalleryItems.length > initialVisibleCount) {
        for (let i = initialVisibleCount; i < allGalleryItems.length; i++) {
            allGalleryItems[i].style.display = 'none';
        }
        const moreBtn = document.getElementById('moreBtn');
        if (moreBtn) {
            moreBtn.style.display = 'block';
        }
    } else {
        const moreBtn = document.getElementById('moreBtn');
        if (moreBtn) {
            moreBtn.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 갤러리 이미지 로드
    loadGalleryImages();
});

// 더보기 버튼 이벤트는 동적으로 추가
let moreButtonHandler = null;

function attachMoreButtonEvent() {
    const moreBtn = document.getElementById('moreBtn');
    if (!moreBtn) return;
    
    // 기존 이벤트 리스너 제거
    if (moreButtonHandler) {
        moreBtn.removeEventListener('click', moreButtonHandler);
        moreBtn.removeEventListener('touchend', moreButtonHandler);
    }
    
    // 이벤트 핸들러 함수 정의
    moreButtonHandler = function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // 모바일 터치 이벤트도 방지
        if (e.type === 'touchstart' || e.type === 'touchend') {
            e.preventDefault();
        }
        
        if (!showAllImages) {
            allGalleryItems.forEach(item => {
                item.style.display = 'block';
            });
            moreBtn.textContent = '접기';
            showAllImages = true;
        } else {
            for (let i = initialVisibleCount; i < allGalleryItems.length; i++) {
                allGalleryItems[i].style.display = 'none';
            }
            moreBtn.textContent = '더보기';
            showAllImages = false;
            document.querySelector('.section-gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        return false;
    };
    
    // 클릭 이벤트 (모바일에서도 작동)
    moreBtn.addEventListener('click', moreButtonHandler, { passive: false, capture: true });
    
    // 모바일 터치 이벤트 처리
    moreBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, { passive: false, capture: true });
    
    moreBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        moreButtonHandler(e);
    }, { passive: false, capture: true });
    
    // 추가 안전장치: 기본 동작 방지
    moreBtn.addEventListener('mousedown', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // 버튼이 form 안에 있지 않더라도 명시적으로 type 설정
    moreBtn.setAttribute('type', 'button');
}

// 이미지 로드 실패 처리는 loadGalleryImages 함수 내에서 처리됨

// 라이트박스 기능
let currentImageIndex = 0;
let galleryImages = [];
let lightboxInitialized = false;

function initLightbox() {
    // 이미 초기화되었으면 중복 초기화 방지
    if (lightboxInitialized) {
        return;
    }
    lightboxInitialized = true;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCurrent = document.getElementById('lightboxCurrent');
    const lightboxTotal = document.getElementById('lightboxTotal');
    
    // 갤러리 이미지 수집
    galleryImages = Array.from(document.querySelectorAll('.gallery-item img'))
        .map(img => img.src)
        .filter(src => src && !src.includes('placeholder'));
    
    lightboxTotal.textContent = galleryImages.length;
    
    // 이미지 클릭 이벤트
    document.querySelectorAll('.gallery-item img').forEach((img, index) => {
        img.addEventListener('click', function(e) {
            if (this.complete && this.naturalWidth > 0) {
                currentImageIndex = index;
                openLightbox();
            }
        });
    });
    
    // 이벤트 핸들러 함수들을 미리 정의 (중복 등록 방지)
    function handleCloseClick(e) {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
    }
    
    function handleBackgroundClick(e) {
        if (e.target === lightbox) {
            e.preventDefault();
            closeLightbox();
        }
    }
    
    // 이전/다음 버튼 - 중복 호출 방지
    let isNavigating = false;
    
    function handlePrevClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!isNavigating) {
            isNavigating = true;
            console.log("previous button clicked");
            showPreviousImage();
            setTimeout(() => { isNavigating = false; }, 300);
        }
    }
    
    function handleNextClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!isNavigating) {
            isNavigating = true;
            console.log("next button clicked");
            showNextImage();
            setTimeout(() => { isNavigating = false; }, 300);
        }
    }
    
    // 터치 스와이프 지원
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwipeHandled = false;
    
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
        isSwipeHandled = false;
    }
    
    function handleTouchEnd(e) {
        if (isSwipeHandled) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }
    
    function handleSwipe() {
        if (isNavigating) return;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            isSwipeHandled = true;
            isNavigating = true;
            if (diff > 0) {
                // 왼쪽으로 스와이프 (다음)
                console.log("swipe left");
                showNextImage();
            } else {
                // 오른쪽으로 스와이프 (이전)
                console.log("swipe right");
                showPreviousImage();
            }
            setTimeout(() => { isNavigating = false; }, 200);
        }
    }
    
    // 기존 이벤트 리스너 제거 후 새로 등록
    lightboxClose.removeEventListener('click', handleCloseClick);
    lightboxClose.addEventListener('click', handleCloseClick);
    
    lightbox.removeEventListener('click', handleBackgroundClick);
    lightbox.addEventListener('click', handleBackgroundClick);
    
    lightboxPrev.removeEventListener('click', handlePrevClick);
    lightboxPrev.addEventListener('click', handlePrevClick);
    
    lightboxNext.removeEventListener('click', handleNextClick);
    lightboxNext.addEventListener('click', handleNextClick);
    
    lightbox.removeEventListener('touchstart', handleTouchStart);
    lightbox.addEventListener('touchstart', handleTouchStart);
    
    lightbox.removeEventListener('touchend', handleTouchEnd);
    lightbox.addEventListener('touchend', handleTouchEnd);
    
    // 키보드 이벤트 - 한 번만 등록되도록 함수로 분리
    function handleKeydown(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeLightbox();
            } else if (e.key === 'ArrowLeft' && !isNavigating) {
                e.preventDefault();
                isNavigating = true;
                showPreviousImage();
                setTimeout(() => { isNavigating = false; }, 300);
            } else if (e.key === 'ArrowRight' && !isNavigating) {
                e.preventDefault();
                isNavigating = true;
                showNextImage();
                setTimeout(() => { isNavigating = false; }, 300);
            }
        }
    }
    
    // 기존 키보드 이벤트 리스너 제거 후 새로 등록
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', handleKeydown);
    
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCurrent = document.getElementById('lightboxCurrent');
    
    // 실제 이미지 URL 가져오기 (썸네일이 아닌 원본)
    const currentImg = document.querySelectorAll('.gallery-item img')[currentImageIndex];
    const imageSrc = currentImg ? currentImg.src : galleryImages[currentImageIndex];
    
    lightboxImage.src = imageSrc;
    lightboxCurrent.textContent = currentImageIndex + 1;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
}

function showNextImage() {
    console.log("previous image index: ", currentImageIndex);
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    console.log("next image index: ", currentImageIndex);
    updateLightboxImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCurrent = document.getElementById('lightboxCurrent');
    
    const currentImg = document.querySelectorAll('.gallery-item img')[currentImageIndex];
    const imageSrc = currentImg ? currentImg.src : galleryImages[currentImageIndex];
    
    lightboxImage.src = imageSrc;
    lightboxCurrent.textContent = currentImageIndex + 1;
}

// 네이버 지도 초기화
function initNaverMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    // 주소: 서울 광진구 능동로 87, 까사그랑데
    const address = '서울 광진구 능동로 87';
    const placeName = '까사그랑데';
    
    // CORS 문제를 피하기 위해 직접 좌표 사용
    // 건대입구역 자이엘라 (서울 광진구 능동로 87) 좌표
    const latitude = 37.539146;  // 위도
    const longitude = 127.069655; // 경도

    // 지도 생성
    const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
        }
    };

    const map = new naver.maps.Map('map-container', mapOptions);

    // 마커 추가
    const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: map,
        title: placeName
    });

    // 정보창 추가
    const infoWindow = new naver.maps.InfoWindow({
        content: `<div style="padding: 10px; text-align: center; min-width: 150px;"><strong>${placeName}</strong><br>${address}<br>건대입구역 자이엘라 6F</div>`
    });

    // 마커 클릭 시 정보창 표시
    naver.maps.Event.addListener(marker, 'click', function() {
        if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker);
        }
    });
    
    // 지도 로드 시 정보창 자동 표시 (선택사항)
    // infoWindow.open(map, marker);
}

// 스크롤 애니메이션 초기화
function initScrollAnimation() {
    // Intersection Observer 옵션
    const observerOptions = {
        root: null, // 뷰포트를 기준으로
        rootMargin: '0px 0px -50px 0px', // 하단 50px 전에 트리거
        threshold: 0.1 // 10% 보일 때 트리거
    };

    // Intersection Observer 콜백
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 섹션이 뷰포트에 들어오면 애니메이션 클래스 추가
                entry.target.classList.add('animate');
                // 한 번만 실행되도록 옵저버 해제 (선택사항)
                // observer.unobserve(entry.target);
            } else {
                // 섹션이 뷰포트를 벗어나면 애니메이션 클래스 제거 (스크롤 위로 올릴 때 다시 애니메이션)
                // entry.target.classList.remove('animate');
            }
        });
    };

    // Intersection Observer 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 모든 섹션 요소 관찰
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // 첫 번째 섹션은 즉시 표시 (페이지 로드 시)
    if (sections.length > 0) {
        sections[0].classList.add('animate');
    }
}

// 우리가 함께한 지 계산 초기화
function initTogetherTime() {
    const firstDate = new Date('2012-06-18T00:00:00'); // 처음 만난 날
    const weddingDate = new Date('2026-04-12T00:00:00'); // 결혼식 날짜
    
    const daysElement = document.getElementById('together-days');
    const hoursElement = document.getElementById('together-hours');
    const minutesElement = document.getElementById('together-minutes');
    const secondsElement = document.getElementById('together-seconds');
    const progressBar = document.getElementById('timeline-progress');

    function updateTogetherTime() {
        const now = new Date();
        
        // 처음 만난 날부터 오늘까지의 시간 계산
        const timeDifference = now - firstDate;
        
        if (timeDifference <= 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            return;
        }

        // 시간 계산
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // UI 업데이트
        daysElement.textContent = days.toLocaleString();
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        // 프로그레스 바 계산 (처음 만난 날부터 결혼식 날짜까지의 퍼센트)
        const totalTime = weddingDate - firstDate;
        const elapsedTime = now - firstDate;
        let percentage = (elapsedTime / totalTime) * 100;
        
        // 0% ~ 100% 사이로 제한
        percentage = Math.max(0, Math.min(100, percentage));
        
        // 프로그레스 바 업데이트
        if (progressBar) {
            const timelineWrapper = progressBar.parentElement;
            if (timelineWrapper) {
                const lineWidth = timelineWrapper.offsetWidth - 80; // left: 30px + right: 50px
                const progressWidth = (percentage / 100) * lineWidth;
                progressBar.style.width = progressWidth + 'px';
            }
        }
        
        // 오늘 마커는 CSS에서 고정 위치(80%)로 설정됨
    }

    // 즉시 업데이트
    updateTogetherTime();

    // 1초마다 업데이트
    setInterval(updateTogetherTime, 1000);
}

// 결혼식 카운트다운 초기화
function initCountdown() {
    const weddingDate = new Date('2026-04-12T13:00:00'); // 2026년 4월 12일 오후 1시
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');
    const daysTextElement = document.getElementById('countdown-days-text');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = weddingDate - now;

        if (timeDifference <= 0) {
            // 결혼식이 지났을 경우
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            if (daysTextElement) {
                daysTextElement.textContent = '0';
            }
            return;
        }

        // 시간 계산
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // UI 업데이트
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
        
        if (daysTextElement) {
            daysTextElement.textContent = String(days);
        }
    }

    // 즉시 업데이트
    updateCountdown();

    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
}

// 이미지 프리로드 함수
function preloadImages() {
    // 갤러리 이미지 목록
    const galleryImages = [
        'wedding_1.jpg',
        'wedding_2.jpg',
        'wedding_3.jpg',
        'wedding_4.jpg',
        'wedding_5.jpg',
        'wedding_6.jpeg',
        'wedding_7.jpeg',
        'wedding_8.jpeg',
        'wedding_9.jpeg',
        'wedding_10.jpeg',
        'wedding_11.jpeg',
        'wedding_12.jpeg',
        'wedding_13.jpeg',
        'wedding_14.jpeg',
        'wedding_15.jpeg',
        'wedding_16.jpg',
        'wedding_17.jpg',
        'wedding_18.jpeg',
        'wedding_19.jpeg',
        'wedding_20.jpeg',
        'wedding_21.jpeg',
        'wedding_22.jpeg',
        'wedding_23.jpeg'
    ];
    
    // 주요 이미지 목록
    const mainImages = [
        'images/header_image.jpg',
        'images/save_the_date.png',
        'images/invite_to_7.jpg',
        'images/invite_letter2.png',
        'images/info_footer.png',
        'images/groom_parent.png',
        'images/couple_letter.png',
        'images/couple_letter2.png',
        'images/calendar.jpg',
        'images/direction.png',
        'images/send_to.png'
    ];
    
    // 모든 이미지 프리로드
    const allImages = [
        ...mainImages,
        ...galleryImages.map(img => `images/gallery/${img}`)
    ];
    
    // 이미지 프리로드 시작
    allImages.forEach(src => {
        const img = new Image();
        img.src = src;
        // 에러가 발생해도 계속 진행
        img.onerror = function() {
            // 조용히 실패 처리
        };
    });
    
    console.log(`이미지 프리로드 시작: ${allImages.length}개`);
}

// 페이지 로드 시 라이트박스 및 지도 초기화
// 오프닝 애니메이션 제어
function initOpeningAnimation() {
    const openingOverlay = document.getElementById('openingOverlay');
    if (!openingOverlay) return;

    // 오프닝 시작 시 이미지 프리로드 시작
    preloadImages();

    // 오프닝 제거 함수
    function removeOpening() {
        openingOverlay.classList.add('hide');
        setTimeout(function() {
            openingOverlay.style.display = 'none';
            document.body.classList.remove('opening-active');
            // 스크롤 복원 - 명시적으로 설정
            document.body.style.overflow = 'auto';
            document.body.style.overflowX = 'hidden'; // 가로 스크롤은 유지
        }, 800); // transition 시간과 맞춤
    }
    
    // 약간의 지연 후 애니메이션 시작 (렌더링 완료 대기)
    setTimeout(function() {
        // 3초 후 자동으로 사라지기
        setTimeout(removeOpening, 3000);
        
        // 클릭 시 즉시 사라지기
        openingOverlay.addEventListener('click', removeOpening);
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    initOpeningAnimation();
    // initLightbox는 loadGalleryImages에서 호출되므로 여기서는 호출하지 않음
    initScrollAnimation();
    initTogetherTime();
    initCountdown();
    
    // 네이버 지도 API가 로드되었는지 확인 후 지도 초기화
    if (typeof naver !== 'undefined' && naver.maps) {
        initNaverMap();
    } else {
        // 네이버 지도 API 로드를 기다림
        window.addEventListener('load', function() {
            if (typeof naver !== 'undefined' && naver.maps) {
                initNaverMap();
            }
        });
    }
});
