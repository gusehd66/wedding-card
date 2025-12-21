# 사진 교체 가이드

## 현재 상태
현재 갤러리에는 샘플 이미지(Unsplash)가 사용되고 있습니다. 실제 사진으로 교체하려면 아래 방법을 따라주세요.

## 사진 교체 방법

### 방법 1: HTML에서 직접 교체 (권장)

1. `fe/index.html` 파일을 엽니다.
2. `.gallery-section` 섹션을 찾습니다.
3. 각 `<img>` 태그의 `src` 속성을 수정합니다:

```html
<!-- 변경 전 -->
<img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" alt="사진 1">

<!-- 변경 후 -->
<img src="images/photo1.jpg" alt="사진 1">
```

### 방법 2: images 폴더에 사진 추가

1. `fe/images/` 폴더에 사진을 넣습니다.
   - 예: `photo1.jpg`, `photo2.jpg`, `photo3.jpg` 등
2. `fe/index.html`에서 이미지 경로를 수정합니다.

### 사진 개수 조정

- **더 많은 사진 추가**: HTML에 `<div class="gallery-item">` 블록을 복사하여 추가하세요.
- **사진 개수 줄이기**: 불필요한 `<div class="gallery-item">` 블록을 삭제하세요.
- **초기 표시 개수 변경**: `script.js`의 `initialVisibleCount` 값을 수정하세요 (기본값: 9개)

### 권장 사진 크기

- **가로세로 비율**: 1:1 (정사각형) 권장
- **해상도**: 최소 400x400px 이상
- **파일 형식**: JPG, PNG, WebP
- **파일 크기**: 각 이미지당 500KB 이하 권장 (로딩 속도)

### 사진 순서 변경

HTML에서 `<div class="gallery-item">` 블록의 순서를 변경하면 사진 순서가 바뀝니다.

## 현재 샘플 이미지

현재는 Unsplash의 샘플 이미지가 사용되고 있습니다. 실제 사진으로 교체해주세요!

