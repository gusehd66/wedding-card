# 모바일 청첩장 - React 프로젝트

Kim Hyun Dong & Lee Kyung Seo의 모바일 청첩장 웹사이트입니다.

## 기술 스택

- React 18
- Vite
- Vanilla CSS

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── OpeningAnimation.jsx
│   ├── HeaderImage.jsx
│   ├── DateSection.jsx
│   ├── ParentsSection.jsx
│   ├── TogetherSection.jsx
│   ├── GallerySection.jsx
│   ├── TransportSection.jsx
│   ├── AccountSection.jsx
│   ├── ShareSection.jsx
│   ├── Footer.jsx
│   └── Lightbox.jsx
├── hooks/              # Custom Hooks
│   ├── useTogetherTime.js
│   ├── useCountdown.js
│   └── useGallerySlideshow.js
├── utils/              # 유틸리티 함수
│   ├── kakao.js
│   ├── naverMap.js
│   ├── scrollAnimation.js
│   └── copy.js
├── App.jsx            # 메인 앱 컴포넌트
├── App.css            # 스타일시트
├── main.jsx           # 진입점
└── index.css          # 글로벌 스타일

public/
└── images/            # 이미지 리소스
    └── gallery/
```

## Vercel 배포

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 자동으로 빌드 설정 감지됨 (Vite)
6. "Deploy" 클릭

또는 Vercel CLI 사용:

```bash
npm i -g vercel
vercel
```

## 주요 기능

- 오프닝 애니메이션
- 갤러리 슬라이드쇼
- 함께한 시간 카운터
- 결혼식 카운트다운
- 네이버 지도 통합
- 카카오톡 공유 기능
- 라이트박스 이미지 뷰어

## 라이선스

Private
