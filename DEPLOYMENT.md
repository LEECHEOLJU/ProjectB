# 🚀 Zoo Tycoon 배포 가이드

## Vercel로 배포하기

### 1단계: Vercel 계정 준비

1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭

### 2단계: 프로젝트 임포트

1. GitHub 저장소 선택: `LEECHEOLJU/ProjectB`
2. Branch 선택: `claude/zoo-tycoon-game-01TGfAd2NCgGBYrwxUhkqesC` (또는 메인 브랜치)
3. Root Directory: `/` (기본값)

### 3단계: 빌드 설정

Vercel이 자동으로 Next.js를 감지하지만, 다음을 확인하세요:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 4단계: 환경변수 설정 (선택사항)

Supabase를 사용하려면:

1. Vercel 프로젝트 설정 > Environment Variables
2. 다음 변수 추가:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
   ```

> **참고**: 환경변수 없이도 게임은 로컬 스토리지로 작동합니다!

### 5단계: 배포

1. "Deploy" 버튼 클릭
2. 2-3분 대기
3. 배포 완료! 🎉

## 로컬에서 Vercel CLI로 배포

### 설치

```bash
npm i -g vercel
```

### 로그인

```bash
vercel login
```

### 배포

```bash
# 테스트 배포
vercel

# 프로덕션 배포
vercel --prod
```

## Supabase 설정 (선택사항)

게임 진행 상황을 클라우드에 저장하려면:

### 1. Supabase 프로젝트 생성

1. https://supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 이름: `zoo-tycoon`
4. 비밀번호 설정
5. Region 선택 (가장 가까운 지역)

### 2. 데이터베이스 테이블 생성

`SUPABASE_SETUP.md` 파일의 SQL 스크립트를 **순서대로** 실행:

1. Supabase 대시보드 > SQL Editor
2. 각 SQL 블록을 복사하여 실행
3. 총 9개 테이블 생성

### 3. API 키 복사

1. Settings > API
2. `Project URL` 복사
3. `anon public` key 복사
4. Vercel 환경변수에 추가

### 4. 재배포

환경변수 추가 후 Vercel에서 자동 재배포되거나,
수동으로 "Redeploy" 클릭

## 배포 후 확인사항

### ✅ 체크리스트

- [ ] 사이트가 정상적으로 로드되나요?
- [ ] 게임이 실행되나요?
- [ ] 동물을 구매할 수 있나요?
- [ ] 시설을 건설할 수 있나요?
- [ ] 게임 속도 조절이 작동하나요?
- [ ] 반응형 디자인이 잘 작동하나요? (모바일 체크)

### 🐛 문제 해결

#### 빌드 실패

```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 확인
npm run lint
```

#### 환경변수 문제

1. Vercel 대시보드에서 환경변수 확인
2. 변수명이 `NEXT_PUBLIC_` 접두사로 시작하는지 확인
3. 재배포

#### Supabase 연결 실패

1. Supabase 프로젝트가 활성화되어 있는지 확인
2. API 키가 올바른지 확인
3. RLS 정책이 활성화되어 있는지 확인

## 성능 최적화

### Lighthouse 점수 개선

```bash
# Production 빌드 분석
npm run build
npm run start
```

Lighthouse 탭에서 분석:
- Performance: 90+ 목표
- Accessibility: 90+ 목표
- Best Practices: 90+ 목표
- SEO: 90+ 목표

### 이미지 최적화 (추가 작업 시)

```typescript
// next.config.ts에 추가
images: {
  domains: ['your-cdn-domain.com'],
}
```

## 커스텀 도메인 연결 (선택사항)

1. Vercel 프로젝트 > Settings > Domains
2. 커스텀 도메인 입력 (예: zoo-tycoon.com)
3. DNS 레코드 설정
4. SSL 자동 설정 완료

## 모니터링

### Vercel Analytics

1. Vercel 프로젝트 > Analytics 탭
2. 방문자 통계 확인
3. 성능 메트릭 모니터링

### Supabase Monitoring

1. Supabase 대시보드 > Reports
2. Database 사용량 확인
3. API 호출 통계 확인

## 자동 배포 설정

GitHub 브랜치에 Push하면 자동 배포:

```bash
git push origin claude/zoo-tycoon-game-01TGfAd2NCgGBYrwxUhkqesC
```

Vercel이 자동으로:
1. 변경사항 감지
2. 빌드 실행
3. 배포 완료
4. 슬랙/이메일 알림 (설정 시)

## 비용

### Vercel
- **Hobby Plan**: 무료
  - 무제한 배포
  - 100GB 대역폭/월
  - 6,000 빌드 분/월

### Supabase
- **Free Plan**: 무료
  - 500MB 데이터베이스
  - 1GB 파일 저장소
  - 50,000 MAU (월간 활성 사용자)

> 취미 프로젝트로는 충분합니다!

## 다음 단계

게임 개선을 위한 아이디어:

1. **소셜 기능**
   - 친구 동물원 방문
   - 리더보드
   - 동물 교환

2. **추가 콘텐츠**
   - 더 많은 동물 (50+ 종)
   - 이벤트 시스템
   - 계절별 특별 동물

3. **모바일 최적화**
   - 터치 컨트롤 개선
   - 모바일 전용 UI

4. **PWA 변환**
   - 오프라인 지원
   - 앱처럼 설치 가능

---

**배포 성공을 기원합니다! 🎉**
