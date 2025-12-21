# 모바일 청첩장

wedding-peach.com 스타일의 모바일 청첩장입니다.

## 파일 구조

```
fe/
├── index.html      # 메인 HTML 파일
├── styles.scss     # SCSS 스타일 파일 (소스)
├── styles.css      # 컴파일된 CSS 파일 (사용)
├── script.js       # JavaScript 파일
├── images/         # 사진 폴더 (여기에 사진을 추가하세요)
└── README.md       # 이 파일
```

## 사용 방법

### 1. 사진 추가하기

`images/` 폴더에 사진을 추가한 후, `script.js` 파일의 `loadGalleryImages()` 함수를 수정하세요:

```javascript
const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    // ... 더 많은 사진
];
```

그리고 `script.js` 파일 하단의 주석을 해제하세요:

```javascript
// loadGalleryImages();  // 이 줄의 주석을 제거하세요
```

### 2. 정보 수정하기

`index.html` 파일에서 다음 정보를 수정하세요:

- **날짜/시간**: `.date-section` 섹션
- **장소**: `.venue-section` 섹션
- **신랑/신부 이름**: `.couple-section` 섹션
- **교통편 안내**: `.transport-section` 섹션
- **계좌번호**: `.account-section` 섹션

### 3. SCSS 컴파일 (선택사항)

SCSS를 사용하려면 다음 중 하나를 선택하세요:

**방법 1: Node.js 사용**
```bash
npm install -g sass
sass styles.scss styles.css --watch
```

**방법 2: VS Code 확장 프로그램**
- "Live Sass Compiler" 확장 프로그램 설치
- `styles.scss` 파일을 열고 "Watch Sass" 클릭

**방법 3: 직접 CSS 사용**
- `styles.css` 파일을 직접 수정하여 사용

### 4. 로컬에서 실행하기

**방법 1: Python 사용**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**방법 2: Node.js 사용**
```bash
npx http-server
```

**방법 3: VS Code Live Server**
- "Live Server" 확장 프로그램 설치
- `index.html` 파일에서 우클릭 → "Open with Live Server"

브라우저에서 `http://localhost:8000` (또는 표시된 포트)로 접속하세요.

## 기능

- ✅ 반응형 모바일 디자인
- ✅ 계좌번호 복사 기능
- ✅ 주소 복사 기능
- ✅ 카카오톡 공유 기능 (Kakao SDK 필요)
- ✅ 청첩장 링크 복사 기능
- ✅ 사진 갤러리
- ✅ 부드러운 애니메이션

## 카카오톡 공유 기능 활성화

카카오톡 공유 기능을 사용하려면:

1. [Kakao Developers](https://developers.kakao.com/)에서 앱 등록
2. JavaScript 키 발급
3. `index.html`의 `<head>` 섹션에 다음 코드 추가:

```html
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
    Kakao.init('YOUR_JAVASCRIPT_KEY');
</script>
```

## 커스터마이징

### 색상 변경

`styles.scss` 또는 `styles.css` 파일에서 색상 변수를 수정하세요:

```scss
$primary-color: #333;      // 메인 색상
$secondary-color: #666;    // 보조 색상
$light-gray: #f5f5f5;      // 배경색
```

### 폰트 변경

`index.html`의 Google Fonts 링크를 수정하거나, `styles.css`의 `font-family`를 변경하세요.

## 배포

정적 파일이므로 GitHub Pages, Netlify, Vercel 등 어디서나 호스팅 가능합니다.

## 라이선스

ⓒweddingpeach 스타일 기반

