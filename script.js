// 재생 버튼 클릭 이벤트
document.getElementById('play-btn')?.addEventListener('click', function() {
    // 음악 재생 기능 (필요시 구현)
    console.log('재생 버튼 클릭');
    alert('음악 재생 기능을 구현하세요');
});

// 복사 함수 (sample과 동일한 방식)
function copy(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    alert("복사되었습니다");
    window.getSelection().removeAllRanges();
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
    if (!galleryGrid) return;

    // images/gallery 폴더의 이미지 목록
    // 숫자 순서대로 정렬하기 위해 배열로 정의
    const imageFiles = [
        'wedding_1.jpeg',
        'wedding_2.jpeg',
        'wedding_3.jpeg',
        'wedding_4.jpeg',
        'wedding_5.jpeg',
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
        'wedding_16.png',
        'wedding_17.png',
        'wedding_18.jpeg',
        'wedding_19.jpeg',
        'wedding_20.jpeg',
        'wedding_21.jpeg',
        'wedding_22.jpeg',
        'wedding_23.jpeg'
    ];

    // 갤러리 그리드 초기화
    galleryGrid.innerHTML = '';

    // 이미지 아이템 생성
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

    // 더보기 기능 초기화
    initMoreButton();
    // 더보기 버튼 이벤트 연결
    attachMoreButtonEvent();
    // 라이트박스 초기화 (이미지 로드 후)
    setTimeout(() => {
        initLightbox();
    }, 100);
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
function attachMoreButtonEvent() {
    const moreBtn = document.getElementById('moreBtn');
    if (moreBtn) {
        // 기존 이벤트 리스너 제거 후 새로 추가
        const newMoreBtn = moreBtn.cloneNode(true);
        moreBtn.parentNode.replaceChild(newMoreBtn, moreBtn);
        
        newMoreBtn.addEventListener('click', function() {
            if (!showAllImages) {
                allGalleryItems.forEach(item => {
                    item.style.display = 'block';
                });
                this.textContent = '접기';
                showAllImages = true;
            } else {
                for (let i = initialVisibleCount; i < allGalleryItems.length; i++) {
                    allGalleryItems[i].style.display = 'none';
                }
                this.textContent = '더보기';
                showAllImages = false;
                document.querySelector('.section-gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// 이미지 로드 실패 처리는 loadGalleryImages 함수 내에서 처리됨

// 라이트박스 기능
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
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
    
    // 닫기 버튼
    lightboxClose.addEventListener('click', closeLightbox);
    
    // 배경 클릭 시 닫기
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // 이전/다음 버튼
    lightboxPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        showPreviousImage();
    });
    
    lightboxNext.addEventListener('click', function(e) {
        e.stopPropagation();
        showNextImage();
    });
    
    // 키보드 이벤트
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
    
    // 터치 스와이프 지원
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 왼쪽으로 스와이프 (다음)
                showNextImage();
            } else {
                // 오른쪽으로 스와이프 (이전)
                showPreviousImage();
            }
        }
    }
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
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
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

    // 네이버 지도 Geocoding API를 사용하여 주소를 좌표로 변환
    // 네이버 지도 API v3에서는 naver.maps.Service를 사용
    naver.maps.Service.geocode({
        query: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            console.error('지도 로드 실패:', status);
            mapContainer.innerHTML = '<p style="text-align: center; padding: 50px;">지도를 불러올 수 없습니다.</p>';
            return;
        }

        if (response.v2.meta.totalCount === 0) {
            console.error('주소를 찾을 수 없습니다.');
            mapContainer.innerHTML = '<p style="text-align: center; padding: 50px;">주소를 찾을 수 없습니다.</p>';
            return;
        }

        // 첫 번째 결과의 좌표 가져오기
        const item = response.v2.addresses[0];
        const x = parseFloat(item.x);
        const y = parseFloat(item.y);

        // 지도 생성
        const mapOptions = {
            center: new naver.maps.LatLng(y, x),
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT
            }
        };

        const map = new naver.maps.Map('map-container', mapOptions);

        // 마커 추가
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(y, x),
            map: map,
            title: placeName
        });

        // 정보창 추가 (선택사항)
        const infoWindow = new naver.maps.InfoWindow({
            content: `<div style="padding: 10px; text-align: center;"><strong>${placeName}</strong><br>${address}</div>`
        });

        // 마커 클릭 시 정보창 표시
        naver.maps.Event.addListener(marker, 'click', function() {
            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
        });
    });
}

// 페이지 로드 시 라이트박스 및 지도 초기화
document.addEventListener('DOMContentLoaded', function() {
    initLightbox();
    
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
