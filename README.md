# 🦁 Zoo Tycoon Game

웹 기반 동물원 경영 시뮬레이션 게임

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Ready-3ecf8e)](https://supabase.com/)

## 📖 프로젝트 소개

Zoo Tycoon은 클래식 동물원 타이쿤 게임의 핵심 재미 요소를 웹으로 재현한 시뮬레이션 게임입니다.
동물을 구매하고, 시설을 건설하며, 방문객을 유치하여 세계 최고의 동물원을 만들어보세요!

### ✨ 주요 기능

- 🦁 **30+ 종의 동물** - 일반부터 전설까지 다양한 등급의 동물 수집
- 🏗️ **다양한 시설** - 서식지, 방문객 시설, 놀이기구 등 20+ 종류의 시설
- 👥 **방문객 시스템** - 평판과 날씨에 따라 변화하는 실시간 방문객
- 💰 **경제 시스템** - 입장료, 시설 수익, 유지비 관리
- 📈 **레벨 & 업적** - 경험치 획득으로 새로운 콘텐츠 해금
- 🎯 **도전과제** - 다양한 업적 달성
- ⏱️ **게임 속도 조절** - 일시정지, 1배속, 2배속, 3배속
- 🌦️ **날씨 & 계절** - 동적 날씨 시스템
- 💾 **클라우드 저장** - Supabase를 통한 게임 진행 저장

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 로컬 개발 환경 설정

1. **레포지토리 클론**
   ```bash
   git clone <repository-url>
   cd ProjectB
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **환경변수 설정** (선택사항 - Supabase 사용 시)

   `.env.local` 파일을 생성하고 다음 내용 추가:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

   > ⚠️ 환경변수가 없어도 게임은 로컬 스토리지로 동작합니다.

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

5. **브라우저에서 열기**

   http://localhost:3000

## 🎮 게임 가이드

### 기본 플레이

1. **첫 동물 구매**
   - 하단 메뉴에서 '상점' 클릭
   - 동물 탭에서 원하는 동물 구매
   - 초기 자금: $50,000

2. **동물 관리**
   - 메인 화면 또는 '동물' 메뉴에서 동물 상태 확인
   - 먹이주기, 놀아주기, 치료하기로 동물 케어
   - 배고픔, 행복도, 건강 게이지 관리

3. **시설 건설**
   - 상점의 '시설' 탭에서 건설
   - 서식지, 레스토랑, 놀이기구 등 다양한 시설
   - 시설은 방문객 만족도와 수익 증가

4. **수익 창출**
   - 입장료 ($10/방문객)
   - 레스토랑, 기념품점 수익
   - 놀이기구 이용료

5. **레벨업**
   - 경험치 획득으로 레벨업
   - 새로운 동물과 시설 해금

### 💡 팁

- 초반에는 저렴한 동물로 시작하세요
- 화장실, 벤치 등 기본 시설도 중요합니다
- 동물 건강 관리를 소홀히 하면 평판이 떨어집니다
- 비 오는 날은 방문객이 줄어듭니다
- 전설 동물은 특수 능력이 있습니다

## 🛠️ 기술 스택

### Frontend
- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Zustand** - 상태 관리
- **Framer Motion** - 애니메이션 (준비)
- **Lucide React** - 아이콘

### Backend
- **Supabase** - BaaS (Backend as a Service)
  - PostgreSQL 데이터베이스
  - Authentication
  - Real-time subscriptions (준비)

### Deployment
- **Vercel** - 호스팅 및 배포

## 📁 프로젝트 구조

```
ProjectB/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── TopBar.tsx
│   │   ├── BottomMenu.tsx
│   │   └── GameCanvas.tsx
│   ├── modals/            # 모달 컴포넌트
│   │   ├── ShopModal.tsx
│   │   ├── AnimalsModal.tsx
│   │   └── StatsModal.tsx
│   ├── animals/           # 동물 관련 컴포넌트
│   ├── ui/                # 재사용 UI 컴포넌트
│   └── GameEngine.tsx     # 게임 로직 엔진
├── store/                 # Zustand 스토어
│   ├── gameStore.ts
│   ├── animalStore.ts
│   ├── facilityStore.ts
│   └── visitorStore.ts
├── data/                  # 게임 데이터
│   ├── animals.ts         # 30+ 동물 종 데이터
│   ├── facilities.ts      # 시설 데이터
│   └── achievements.ts    # 업적 데이터
├── lib/
│   ├── supabase/          # Supabase 클라이언트
│   └── utils/             # 유틸리티 함수
├── types/                 # TypeScript 타입 정의
└── public/                # 정적 파일
```

## 🗄️ Supabase 설정

자세한 Supabase 설정 방법은 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) 참조

### 빠른 시작

1. Supabase 프로젝트 생성
2. SQL Editor에서 테이블 스키마 실행
3. API 키를 `.env.local`에 추가
4. RLS 정책 활성화

## 📊 게임 밸런스

| 항목 | 값 |
|------|------|
| 초기 자금 | $50,000 |
| 기본 입장료 | $10 |
| 동물 가격 범위 | $300 - $50,000 |
| 시설 가격 범위 | $500 - $20,000 |
| 최대 레벨 | 50 |

## 🚀 배포

### Vercel에 배포

1. **Vercel 계정 연결**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **배포**
   ```bash
   vercel
   ```

3. **환경변수 설정**

   Vercel 대시보드에서 환경변수 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### 빌드 명령어

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm run start

# Lint 검사
npm run lint
```

## 📝 개발 로드맵

- [x] Phase 1-3: 기본 게임 시스템
- [x] Phase 4: 방문객 & 수익 시스템
- [x] Phase 5: 시설 시스템
- [x] Phase 6: Supabase 통합 준비
- [ ] Phase 7: 고급 기능 (이벤트, 도전과제)
- [ ] Phase 8: UI/UX 개선
- [ ] Phase 9: 테스트 & 최적화
- [x] Phase 10: 배포 설정

## 🤝 기여

이 프로젝트는 개인 프로젝트이지만, 버그 리포트와 기능 제안은 언제든 환영합니다!

## 📄 라이선스

MIT License

## 🙏 감사의 말

- [Zoo Tycoon](https://en.wikipedia.org/wiki/Zoo_Tycoon) - 영감을 준 오리지널 게임
- [Next.js](https://nextjs.org/) - 강력한 React 프레임워크
- [Supabase](https://supabase.com/) - 오픈소스 Firebase 대안
- [Vercel](https://vercel.com/) - 최고의 배포 플랫폼

---

**Made with ❤️ and 🦁**

즐거운 동물원 경영 되세요!
