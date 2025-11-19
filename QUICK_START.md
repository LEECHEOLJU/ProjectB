# ⚡ Zoo Tycoon - 빠른 시작 가이드

## 🎮 게임 시작하기 (1분 만에!)

### 로컬 개발

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 열기
# http://localhost:3000
```

끝! 🎉 게임을 즐기세요!

---

## 🚀 Vercel에 배포하기 (3분 만에!)

### 방법 1: GitHub + Vercel (추천)

1. **GitHub에 Push**
   ```bash
   git push origin your-branch
   ```

2. **Vercel 연결**
   - https://vercel.com 접속
   - "New Project" 클릭
   - GitHub 저장소 선택
   - "Deploy" 클릭

3. **완료!**
   - 2분 후 게임 라이브 🎉
   - 주소: `https://your-project.vercel.app`

### 방법 2: Vercel CLI

```bash
# Vercel CLI 설치 (한 번만)
npm i -g vercel

# 로그인
vercel login

# 배포
vercel --prod
```

---

## 🎯 기본 게임플레이

### 1분 튜토리얼

1. **$50,000 시작 자금**으로 게임 시작
2. 하단 **"상점"** 클릭 → 첫 동물 구매 (토끼 추천!)
3. **"동물"** 탭에서 동물 관리
   - 🍽️ 먹이주기
   - ❤️ 놀아주기
   - 💊 아프면 치료
4. **돈 벌기**: 방문객이 자동으로 입장료 지불
5. **레벨업**: 경험치 획득 → 새로운 동물/시설 해금
6. **시설 건설**: 레스토랑, 놀이기구 등 → 수익 증가

### 💡 초보자 팁

- 🐰 **첫 동물**: 저렴한 토끼나 양으로 시작
- 🚻 **필수 시설**: 화장실, 벤치 (만족도 증가)
- 🌤️ **날씨 체크**: 비 오면 방문객 감소
- 💊 **동물 관리**: 건강 게이지 30% 이하면 즉시 관리
- ⭐ **전설 동물**: 특수 능력 있음 (판다 = 방문객 2배!)

---

## 📊 게임 목표

| 단계 | 목표 | 보상 |
|------|------|------|
| 초급 | 동물 5마리 보유 | 경험치 +100 |
| 중급 | 레벨 10 달성 | 새로운 동물 해금 |
| 고급 | 방문객 1,000명/일 | 업적 해금 |
| 마스터 | 전설 동물 수집 | 최고 수익 |

---

## 🔧 Supabase 연동 (선택사항)

게임 진행 상황을 클라우드에 저장하려면:

### 간단 설정 (5분)

1. **Supabase 프로젝트 생성**
   - https://supabase.com → 무료 계정
   - "New Project" 클릭

2. **SQL 실행**
   - `SUPABASE_SETUP.md` 파일 열기
   - SQL Editor에 복사 & 붙여넣기

3. **환경변수 설정**
   ```bash
   # .env.local 파일 생성
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```

4. **재시작**
   ```bash
   npm run dev
   ```

> **참고**: 환경변수 없이도 게임은 로컬 스토리지로 동작합니다!

---

## 🎨 커스터마이징

### 게임 밸런스 조정

```typescript
// lib/utils/game.ts

// 초기 자금 변경
const initialMoney = 100000; // 기본: 50000

// 동물 가격 조정
// data/animals.ts
price: 1000, // 원하는 가격으로 변경

// 시간 속도 변경
// components/GameEngine.tsx
const ticksPerMinute = 120; // 기본: 60 (빠르게)
```

### 테마 색상 변경

```typescript
// tailwind.config.ts
colors: {
  primary: {
    green: '#your-color',
    // ...
  }
}
```

---

## 🐛 문제 해결

### 빌드 에러

```bash
# 캐시 삭제
rm -rf .next node_modules
npm install
npm run build
```

### 포트 충돌

```bash
# 다른 포트 사용
npm run dev -- -p 3001
```

### TypeScript 에러

```bash
# 타입 체크
npm run lint
```

---

## 📚 더 알아보기

- **상세 가이드**: [README.md](./README.md)
- **PRD 문서**: [PRD.md](./PRD.md)
- **Supabase 설정**: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
- **배포 가이드**: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎉 즐거운 게임 되세요!

문제가 있으면 Issue를 남겨주세요!

**Made with ❤️ and 🦁**
