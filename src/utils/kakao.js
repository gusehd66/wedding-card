const JAVASCRIPT_KEY = 'ce28d51a4e91630df706129c5d4a99db';

export function initKakaoSDK() {
  if (typeof window === 'undefined' || !window.Kakao) {
    console.log('Kakao SDK를 불러올 수 없습니다.');
    return;
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(JAVASCRIPT_KEY);
  }
  console.log('Kakao SDK 초기화 완료');
}

export function shareMessage() {
  const currentURL = window.location.origin;
  
  if (!window.Kakao) {
    alert('Kakao SDK가 로드되지 않았습니다.');
    return;
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(JAVASCRIPT_KEY);
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
      description: '2026.04.12 SUN 13:00PM\n까사그랑데',
      imageUrl: currentURL + '/images/meta.jpg',
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

