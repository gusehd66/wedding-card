# 카카오톡 캐시 초기화 가이드

## 핵심 해결 방법: 카카오톡 공유 디버거 사용

카카오톡은 링크 정보를 **서버에 캐시**합니다. 코드가 정확해도 카카오톡이 이전에 캐시한 정보를 사용할 수 있습니다.

### 1. 카카오톡 공유 디버거 접속

1. **https://developers.kakao.com/tool/debugger** 접속
2. 로그인 (카카오톡 개발자 계정)

### 2. URL 입력 및 스크랩

1. **URL 입력란**에 입력: `https://wedding-card-eight-kappa.vercel.app/`
2. **스크랩하기** 버튼 클릭
3. 결과 확인:
   - `og:url`이 Vercel URL인지 확인
   - `og:image`가 Vercel URL인지 확인
   - 만약 GitHub URL이 나온다면 → Vercel 사이트의 실제 HTML 확인 필요

### 3. 캐시 삭제

1. 스크랩 결과에서 **캐시 삭제** 버튼 클릭 (있다면)
2. 또는 **다시 스크랩** 클릭하여 강제로 새로 크롤링

### 4. 확인

1. 스크랩 결과의 **og:url** 값 확인
2. Vercel URL이어야 함
3. GitHub URL이면 → Vercel 사이트의 실제 HTML 문제

## 추가 확인사항

### Vercel 사이트의 실제 HTML 확인

1. 브라우저에서 `https://wedding-card-eight-kappa.vercel.app/` 접속
2. 개발자 도구(F12) → Elements 탭
3. `<head>` 태그 내부 확인
4. `<meta property="og:url">` 태그의 `content` 속성 확인
5. 실제 값이 무엇인지 확인

### 네트워크 리다이렉트 확인

1. 개발자 도구 → Network 탭
2. 페이지 새로고침
3. 리다이렉트(301, 302)가 발생하는지 확인
4. GitHub로 리다이렉트되는지 확인

## 참고

- 카카오톡 캐시는 최대 24시간 유지될 수 있습니다
- 공유 디버거에서 스크랩하면 캐시가 갱신됩니다
- 설정 변경 후 즉시 반영되지 않을 수 있습니다

