const JAVASCRIPT_KEY = '51ce90a5a85c4e81932e03038c1559be';

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
  // Vercel 배포 URL로 고정 (슬래시 제거하여 일관성 유지)
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

  // 카카오톡 링크 검증을 위해 정확한 URL 사용
  // 슬래시를 추가하여 일관성 유지
  const shareURL = vercelURL + '/';
  const imageURL = vercelURL + '/images/meta.jpg';

  const shareData = {
    objectType: 'feed',
    content: {
      title: 'Kim Hyun Dong & Lee Kyung Seo 결혼합니다',
      description: '2026.04.12 SUN 13:00PM\n까사그랑데',
      imageUrl: imageURL,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  };

  console.log('카카오톡 공유 데이터:', JSON.stringify(shareData, null, 2));
  console.log('공유 URL 확인:', shareURL);
  console.log('이미지 URL 확인:', imageURL);
  console.log('실제 전달되는 link.mobileWebUrl:', shareData.content.link.mobileWebUrl);
  console.log('실제 전달되는 link.webUrl:', shareData.content.link.webUrl);

  window.Kakao.Share.sendDefault(shareData);
}

