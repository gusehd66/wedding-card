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
  // Vercel 배포 URL로 고정
  const vercelURL = 'https://wedding-card-eight-kappa.vercel.app';
  
  // 콘솔에 공유 링크 로그 출력
  console.log('카카오톡 공유 링크:', vercelURL);
  console.log('현재 페이지 URL:', window.location.href);
  
  if (!window.Kakao) {
    alert('Kakao SDK가 로드되지 않았습니다.');
    return;
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(JAVASCRIPT_KEY);
  }

  const shareData = {
    objectType: 'feed',
    content: {
      title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
      description: '2026.04.12 SUN 13:00PM\n까사그랑데',
      imageUrl: vercelURL + '/images/meta.jpg',
      link: {
        mobileWebUrl: vercelURL,
        webUrl: vercelURL,
      },
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: vercelURL,
          webUrl: vercelURL,
        },
      },
    ],
  };

  console.log('카카오톡 공유 데이터:', shareData);

  window.Kakao.Share.sendDefault(shareData);
}

