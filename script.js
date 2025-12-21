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

// 카카오 SDK 초기화
document.addEventListener('DOMContentLoaded', function() {
    const JAVASCRIPT_KEY = 'ce28d51a4e91630df706129c5d4a99db';
    
    if (typeof Kakao !== 'undefined') {
        Kakao.init(JAVASCRIPT_KEY);
        console.log('Kakao SDK 초기화 완료');
        
        // 카카오톡 공유 버튼 설정
        // GitHub Pages URL 고정
        const githubPagesUrl = 'https://gusehd66.github.io/wedding-card/';
        const currentUrl = window.location.href;
        const isLocalhost = currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1');
        
        // 이미지 URL 설정
        // localhost인 경우와 GitHub Pages인 경우 구분
        let imageUrl;
        if (isLocalhost) {
            const baseUrl = 'http://127.0.0.1:5500';
            imageUrl = baseUrl + '/fe/images/marker_pink.png';
        } else {
            // GitHub Pages인 경우
            imageUrl = githubPagesUrl + 'images/header_image.png';
        }
        console.log("image url:", imageUrl);
        // 카카오톡 공유 버튼 생성
        // 항상 GitHub Pages URL로 연결
        Kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            objectType: 'feed',
            content: {
                title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
                description: '2026.04.12 SUN 13:00PM\n까사그랑데',
                imageUrl:
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
              link: {
                mobileWebUrl: githubPagesUrl,
                webUrl: githubPagesUrl,
              },
            },
            buttons: [
                {
                    title: '청첩장 보기',
                    link: {
                        mobileWebUrl: githubPagesUrl,
                        webUrl: githubPagesUrl,
                    },
                },
            ],
        });

        // Kakao.Share.createDefaultButton({
        //     container: '#kakaotalk-share-btn',
        //     objectType: 'feed',
        //     content: {
        //       title: '오늘의 디저트',
        //       description: '아메리카노, 빵, 케익',
        //       imageUrl:
        //         'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        //       link: {
        //         mobileWebUrl: 'https://developers.kakao.com',
        //         webUrl: 'https://developers.kakao.com',
        //       },
        //     },
        //     itemContent: {
        //       profileText: 'Kakao',
        //       profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        //       titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        //       titleImageText: 'Cheese cake',
        //       titleImageCategory: 'Cake',
        //       items: [
        //         {
        //           item: 'Cake1',
        //           itemOp: '1000원',
        //         },
        //         {
        //           item: 'Cake2',
        //           itemOp: '2000원',
        //         },
        //         {
        //           item: 'Cake3',
        //           itemOp: '3000원',
        //         },
        //         {
        //           item: 'Cake4',
        //           itemOp: '4000원',
        //         },
        //         {
        //           item: 'Cake5',
        //           itemOp: '5000원',
        //         },
        //       ],
        //       sum: 'Total',
        //       sumOp: '15000원',
        //     },
        //     social: {
        //       likeCount: 10,
        //       commentCount: 20,
        //       sharedCount: 30,
        //     },
        //     buttons: [
        //       {
        //         title: '웹으로 이동',
        //         link: {
        //           mobileWebUrl: 'https://developers.kakao.com',
        //           webUrl: 'https://developers.kakao.com',
        //         },
        //       },
        //       {
        //         title: '앱으로 이동',
        //         link: {
        //           mobileWebUrl: 'https://developers.kakao.com',
        //           webUrl: 'https://developers.kakao.com',
        //         },
        //       },
        //     ],
        //   });

        // 메세지 꾸미는 부분
    // Kakao.Share.sendDefault({
    //     objectType: 'feed', // 이미지 + 텍스트의 경우 feed
    //     content: {
    //     title: '재윤🤍영석 결혼합니다.', // 원하는 타이틀
    //     description: '2024.03.01\n11시 30분 빌라드지디 청담', // 텍스트
    //     imageUrl: imageUrl, //이미지 링크
    //     link: {
    //         mobileWebUrl: currentUrl, // 연결될 모바일 웹 링크
    //         webUrl: currentUrl, // 연결될 pc 웹 링크
    //     },
    //     },
    //     buttons: [
    //     {
    //         title: '모바일 청첩장 보기', // 메세지 내에 버튼에 쓰여질 텍스트
    //         link: {
    //         mobileWebUrl: currentUrl, // 연결될 모바일 웹 링크
    //         webUrl: currentUrl, // 연결될 모바일 웹 링크
    //         },
    //     },
    //     ],
    //     // 카카오톡 미설치 시 카카오톡 설치 경로이동
    //     installTalk: true,
    // })
    } else {
        console.error('Kakao SDK를 불러올 수 없습니다.');
    }
});

// 갤러리 더보기 기능
let showAllImages = false;
const allGalleryItems = document.querySelectorAll('.gallery-item');
const initialVisibleCount = 9;

document.addEventListener('DOMContentLoaded', function() {
    if (allGalleryItems.length > initialVisibleCount) {
        for (let i = initialVisibleCount; i < allGalleryItems.length; i++) {
            allGalleryItems[i].style.display = 'none';
        }
        const moreBtn = document.getElementById('moreBtn');
        if (moreBtn) {
            moreBtn.style.display = 'block';
        }
    }
});

document.getElementById('moreBtn')?.addEventListener('click', function() {
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

// 이미지 로드 실패 처리
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach((img, index) => {
        img.onerror = function() {
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
    });
});
