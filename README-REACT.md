# React 프로젝트 변환 가이드

이 프로젝트를 React로 변환하는 작업을 진행 중입니다.

## 현재 상태

✅ 완료된 작업:
- Vite React 프로젝트 설정
- 기본 App.jsx 구조
- 카카오 SDK 유틸리티
- 네이버 지도 유틸리티
- 스크롤 애니메이션 유틸리티
- 복사 기능 유틸리티
- OpeningAnimation 컴포넌트
- HeaderImage 컴포넌트

## 다음 단계

### 1. 이미지 파일 복사
```powershell
# Windows PowerShell
Copy-Item -Path images\* -Destination public\images\ -Recurse -Force
```

### 2. 나머지 컴포넌트 생성 필요
다음 컴포넌트들을 `src/components/` 폴더에 생성해야 합니다:
- DateSection.jsx
- ParentsSection.jsx
- TogetherSection.jsx
- GallerySection.jsx
- TransportSection.jsx
- AccountSection.jsx
- ShareSection.jsx
- Footer.jsx
- Lightbox.jsx

### 3. Hooks 생성
다음 hooks를 `src/hooks/` 폴더에 생성해야 합니다:
- useTogetherTime.js
- useCountdown.js
- useGallerySlideshow.js

### 4. 설치 및 실행
```bash
npm install
npm run dev
```

### 5. Vercel 배포
1. GitHub에 프로젝트 푸시
2. Vercel에 프로젝트 연결
3. 자동 배포 완료

## 참고사항

- 기존 `index.html`은 `index-react.html`로 백업됨
- 기존 `styles.css`는 `src/App.css`로 복사됨
- 이미지 경로는 `/images/`로 변경됨 (public 폴더 기준)

