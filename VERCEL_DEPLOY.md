# Vercel 배포 가이드

## 방법 1: Vercel 웹 인터페이스 (가장 쉬운 방법) ⭐ 추천

### 단계별 안내:

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **새 프로젝트 생성**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 목록에서 `wedding-card` 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Framework Preset: **Vite** (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

4. **환경 변수 설정 (필요시)**
   - 현재는 환경 변수가 필요 없습니다

5. **배포 시작**
   - "Deploy" 버튼 클릭
   - 배포가 완료되면 자동으로 URL이 생성됩니다!

6. **도메인 확인**
   - 배포 완료 후 `https://your-project-name.vercel.app` 형태의 URL이 생성됩니다
   - 이 URL을 친구들에게 공유하세요!

---

## 방법 2: Vercel CLI 사용

### 1. Vercel CLI 설치
```bash
npm install -g vercel
```

### 2. 로그인
```bash
vercel login
```

### 3. 배포
```bash
vercel
```

처음 배포 시:
- Set up and deploy? → **Y**
- Which scope? → 본인 계정 선택
- Link to existing project? → **N** (처음이므로)
- What's your project's name? → `wedding-card` (또는 원하는 이름)
- In which directory is your code located? → `./` (Enter)
- Want to override the settings? → **N**

### 4. 프로덕션 배포
```bash
vercel --prod
```

---

## 배포 후 확인사항

✅ 이미지가 제대로 표시되는지 확인
✅ 카카오톡 공유 기능이 작동하는지 확인
✅ 네이버 지도가 표시되는지 확인
✅ 모바일에서 정상 작동하는지 확인

---

## 도메인 커스터마이징 (선택사항)

1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Domains
3. 원하는 도메인 추가 (예: `wedding.yourname.com`)

---

## 자동 배포

GitHub에 푸시할 때마다 자동으로 재배포됩니다!
- `main` 브랜치에 푸시 → 프로덕션 자동 배포
- 다른 브랜치에 푸시 → 프리뷰 배포

