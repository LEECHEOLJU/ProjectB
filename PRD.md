# Zoo Tycoon Game - Product Requirements Document (PRD)

## 📋 프로젝트 개요

### 프로젝트명
**Zoo Tycoon Web Game** - 웹 기반 동물원 경영 시뮬레이션 게임

### 프로젝트 목표
- Vercel에 배포 가능한 풀스택 웹 게임 개발
- 클래식 Zoo Tycoon의 핵심 재미 요소를 웹으로 재현
- 실시간 동물원 경영 시뮬레이션 경험 제공
- 데이터 영속성을 위한 Supabase 통합

---

## 🎮 게임 분석 및 핵심 메커니즘

### Zoo Tycoon 핵심 요소 분석

#### 1. 경제 시스템
- **수입**: 입장료, 기념품 판매, 식음료 판매
- **지출**: 동물 구매, 시설 건설, 유지보수, 직원 급여
- **균형**: 수익과 지출의 밸런스를 통한 전략적 의사결정

#### 2. 동물 관리
- **다양성**: 포유류, 조류, 파충류 등 다양한 동물 종
- **욕구**: 배고픔, 갈증, 청결, 공간, 환경 적합성
- **성장**: 새끼 → 청소년 → 성체 단계별 성장
- **번식**: 특정 조건 충족 시 번식 가능
- **건강**: 질병 시스템 및 수의사 관리

#### 3. 시설 건설
- **동물 우리**: 각 동물 종에 맞는 서식지
- **방문객 시설**: 레스토랑, 기념품점, 화장실, 벤치
- **놀이기구**: 관람차, 사파리 투어, 동물 쇼
- **직원 시설**: 관리소, 수의사실, 창고

#### 4. 방문객 시스템
- **만족도**: 동물 다양성, 시설 청결도, 편의시설에 영향
- **행동 패턴**: 구경, 식사, 쇼핑, 놀이기구 이용
- **수요**: 인기 동물, 시즌별 변화

#### 5. 진행 시스템
- **목표**: 단계별 도전과제 (동물 수, 방문객 수, 수익 등)
- **레벨**: 경험치 획득을 통한 레벨업
- **언락**: 레벨에 따른 새로운 동물 및 시설 해금

---

## 🎯 기능 요구사항

### 1. 핵심 게임플레이 (Core Gameplay)

#### 1.1 동물원 관리
- [x] 실시간 자원 관리 (돈, 경험치, 평판)
- [x] 동물원 이름 설정
- [x] 날씨 및 계절 시스템
- [x] 시간 흐름 (일시정지, 1배속, 2배속, 3배속)

#### 1.2 동물 시스템
- **동물 구매**
  - [x] 30+ 종류의 동물 (포유류, 조류, 파충류, 해양동물)
  - [x] 등급별 분류: Common, Rare, Epic, Legendary
  - [x] 가격, 유지비, 인기도가 다른 동물들

- **동물 관리**
  - [x] 배고픔 게이지 (먹이 주기)
  - [x] 행복도 게이지 (놀아주기, 청소)
  - [x] 건강 게이지 (질병 시스템, 치료)
  - [x] 성장 시스템 (새끼 → 청소년 → 성체)
  - [x] 수명 시스템 (나이에 따른 사망)

- **동물 번식**
  - [x] 같은 종의 성체 2마리 이상 필요
  - [x] 행복도 및 건강 조건 충족 시 번식
  - [x] 새끼 동물 탄생 및 성장

- **특수 능력**
  - [x] 동물별 고유 특성 (예: 판다 - 방문객 2배, 사자 - 위엄)

#### 1.3 시설 건설 시스템
- **동물 서식지**
  - [x] 초원 서식지 (얼룩말, 기린, 코끼리 등)
  - [x] 정글 서식지 (원숭이, 호랑이, 표범 등)
  - [x] 북극 서식지 (펭귄, 북극곰, 물개 등)
  - [x] 사막 서식지 (낙타, 미어캣 등)
  - [x] 수족관 (돌고래, 상어, 물고기 등)

- **방문객 시설**
  - [x] 레스토랑 (방문객 만족도 증가, 수익 생성)
  - [x] 기념품 가게 (추가 수익)
  - [x] 화장실 (만족도 증가)
  - [x] 벤치 (휴식 공간)
  - [x] 안내소 (방문객 유입 증가)

- **놀이기구**
  - [x] 관람차 (입장료 수익)
  - [x] 사파리 투어 (프리미엄 경험)
  - [x] 동물 먹이주기 체험
  - [x] 미니 기차

- **직원 시설**
  - [x] 관리소 (직원 채용)
  - [x] 수의사실 (동물 치료)
  - [x] 창고 (물품 보관)

#### 1.4 방문객 시스템
- [x] 실시간 방문객 수 표시
- [x] 방문객 만족도 시스템
  - 동물 다양성
  - 시설 청결도
  - 편의시설 수
  - 놀이기구 만족도
- [x] 방문객별 행동 패턴 (구경, 식사, 쇼핑)
- [x] 만족도에 따른 평판 변화
- [x] 평판에 따른 방문객 수 증가/감소

#### 1.5 경제 시스템
- **수입**
  - [x] 입장료 (기본 수익)
  - [x] 레스토랑 수익
  - [x] 기념품 판매 수익
  - [x] 놀이기구 이용료

- **지출**
  - [x] 동물 구매 비용
  - [x] 동물 유지비 (먹이, 관리)
  - [x] 시설 건설 비용
  - [x] 시설 유지보수 비용
  - [x] 직원 급여

#### 1.6 진행 시스템
- [x] 레벨 시스템 (경험치 획득)
- [x] 레벨별 언락 콘텐츠
  - 새로운 동물
  - 새로운 시설
  - 새로운 놀이기구
- [x] 도전과제 시스템
  - 동물 수집 도전
  - 방문객 수 목표
  - 수익 목표
  - 특수 미션
- [x] 업적 시스템

### 2. UI/UX 요구사항

#### 2.1 메인 화면
- [x] 동물원 전체 뷰
- [x] 상단 상태바
  - 현재 돈
  - 레벨 및 경험치
  - 평판
  - 방문객 수
  - 날짜/시간
- [x] 하단 메뉴바
  - 동물 관리
  - 건설
  - 직원
  - 통계
  - 설정

#### 2.2 동물 관리 패널
- [x] 동물 목록 (그리드 뷰)
- [x] 동물 상태 표시 (배고픔, 행복도, 건강)
- [x] 동물 상세 정보
- [x] 먹이주기, 놀아주기, 치료 버튼
- [x] 동물 판매 기능

#### 2.3 상점 (Shop)
- [x] 동물 상점
  - 등급별 필터링
  - 타입별 필터링
  - 가격순 정렬
- [x] 시설 상점
  - 카테고리별 분류
  - 레벨 잠금 표시
- [x] 아이템 상점
  - 소모품 (먹이, 약)
  - 장식 아이템

#### 2.4 통계 대시보드
- [x] 수익/지출 그래프
- [x] 방문객 추이
- [x] 인기 동물 순위
- [x] 시설별 수익 분석

#### 2.5 반응형 디자인
- [x] 데스크톱 최적화 (1920x1080)
- [x] 태블릿 지원 (768px~1024px)
- [x] 모바일 지원 (선택적, 간소화된 UI)

### 3. 기술 요구사항

#### 3.1 프론트엔드
- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태관리**: Zustand
- **애니메이션**: Framer Motion
- **차트**: Recharts
- **아이콘**: Lucide React

#### 3.2 백엔드
- **플랫폼**: Next.js API Routes
- **데이터베이스**: Supabase (PostgreSQL)
- **인증**: Supabase Auth
- **실시간**: Supabase Realtime (선택적)

#### 3.3 배포
- **호스팅**: Vercel
- **환경변수**: Vercel Environment Variables
- **도메인**: Vercel 기본 도메인

---

## 🗄️ 데이터베이스 설계 (Supabase)

### 환경변수

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 테이블 스키마

#### 1. users (사용자)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. zoos (동물원)
```sql
CREATE TABLE zoos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  money BIGINT DEFAULT 50000,
  level INTEGER DEFAULT 1,
  experience INTEGER DEFAULT 0,
  reputation INTEGER DEFAULT 50,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id)
);
```

#### 3. animals (동물)
```sql
CREATE TABLE animals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  species_id VARCHAR(50) NOT NULL,
  name VARCHAR(50),
  age INTEGER DEFAULT 0,
  stage VARCHAR(20) DEFAULT 'baby', -- baby, teen, adult
  hunger INTEGER DEFAULT 100,
  happiness INTEGER DEFAULT 100,
  health INTEGER DEFAULT 100,
  gender VARCHAR(10), -- male, female
  is_sick BOOLEAN DEFAULT FALSE,
  acquired_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_animals_zoo_id ON animals(zoo_id);
CREATE INDEX idx_animals_species_id ON animals(species_id);
```

#### 4. facilities (시설)
```sql
CREATE TABLE facilities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  facility_type VARCHAR(50) NOT NULL,
  facility_id VARCHAR(50) NOT NULL,
  level INTEGER DEFAULT 1,
  condition INTEGER DEFAULT 100, -- 상태 (유지보수 필요도)
  position_x INTEGER,
  position_y INTEGER,
  built_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_facilities_zoo_id ON facilities(zoo_id);
```

#### 5. visitors_log (방문객 로그)
```sql
CREATE TABLE visitors_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  visitor_count INTEGER DEFAULT 0,
  total_revenue BIGINT DEFAULT 0,
  satisfaction_avg DECIMAL(3,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_visitors_log_zoo_date ON visitors_log(zoo_id, date);
```

#### 6. transactions (거래 내역)
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- income, expense
  category VARCHAR(50) NOT NULL, -- ticket, food, animal, facility, maintenance
  amount BIGINT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_transactions_zoo_id ON transactions(zoo_id);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);
```

#### 7. achievements (업적)
```sql
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  achievement_id VARCHAR(50) NOT NULL,
  unlocked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(zoo_id, achievement_id)
);

CREATE INDEX idx_achievements_zoo_id ON achievements(zoo_id);
```

#### 8. game_saves (게임 저장)
```sql
CREATE TABLE game_saves (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  save_data JSONB NOT NULL,
  game_time INTEGER DEFAULT 0, -- 게임 내 시간 (분)
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_game_saves_zoo_id ON game_saves(zoo_id);
```

---

## 📅 Phase별 구현 계획

### Phase 1: 프로젝트 기본 설정 및 UI 프레임워크 (Day 1)
- [x] Next.js 프로젝트 초기화
- [x] TypeScript, Tailwind CSS 설정
- [x] 기본 디렉토리 구조 생성
- [x] 레이아웃 컴포넌트 구현
- [x] 기본 라우팅 설정
- [x] Zustand 스토어 초기 설정

**결과물**: 기본 프로젝트 구조, 빈 화면 렌더링

### Phase 2: 게임 상태 관리 및 기본 게임 로직 (Day 1-2)
- [x] 게임 상태 스토어 구현
  - 동물원 정보
  - 자원 (돈, 경험치, 평판)
  - 시간 시스템
- [x] 게임 루프 구현
- [x] 시간 흐름 시스템 (일시정지, 배속)
- [x] 날씨/계절 시스템
- [x] 상단 상태바 UI 구현

**결과물**: 동작하는 시간 시스템, 상태 표시

### Phase 3: 동물 시스템 (Day 2-3)
- [x] 동물 데이터 정의 (30+ 종)
- [x] 동물 스토어 구현
- [x] 동물 구매 기능
- [x] 동물 상태 관리 (배고픔, 행복도, 건강)
- [x] 동물 성장 시스템
- [x] 동물 번식 시스템
- [x] 동물 관리 UI
  - 동물 목록
  - 동물 상세 정보
  - 상호작용 버튼

**결과물**: 동물 구매 및 관리 가능

### Phase 4: 방문객 시스템 및 수익 시스템 (Day 3-4)
- [x] 방문객 생성 알고리즘
- [x] 방문객 만족도 계산
- [x] 입장료 수익 시스템
- [x] 평판 시스템
- [x] 방문객 통계 UI
- [x] 수익/지출 추적

**결과물**: 방문객 유입 및 수익 발생

### Phase 5: 시설 및 놀이기구 시스템 (Day 4-5)
- [x] 시설 데이터 정의
- [x] 시설 건설 시스템
- [x] 시설 효과 적용
  - 방문객 시설 (레스토랑, 기념품점)
  - 놀이기구 (관람차, 사파리 투어)
- [x] 시설 유지보수 시스템
- [x] 건설 UI
- [x] 시설 배치 (간단한 그리드)

**결과물**: 시설 건설 및 효과 적용

### Phase 6: Supabase 통합 및 저장/불러오기 (Day 5-6)
- [x] Supabase 클라이언트 설정
- [x] 인증 시스템 (간단한 로그인)
- [x] 데이터베이스 테이블 생성
- [x] 게임 저장 기능
- [x] 게임 불러오기 기능
- [x] 자동 저장 기능

**결과물**: 게임 진행 상황 저장/불러오기 가능

### Phase 7: 고급 기능 (Day 6-7)
- [x] 레벨 시스템 완성
- [x] 언락 시스템
- [x] 도전과제 시스템
- [x] 업적 시스템
- [x] 이벤트 시스템 (특별 동물, 할인 등)
- [x] 질병 및 치료 시스템

**결과물**: 완전한 진행 시스템

### Phase 8: UI/UX 개선 및 애니메이션 (Day 7-8)
- [x] Framer Motion 애니메이션 추가
- [x] 차트 및 통계 대시보드 (Recharts)
- [x] 알림 시스템
- [x] 튜토리얼 시스템
- [x] 사운드 효과 (선택적)
- [x] 반응형 디자인 최적화

**결과물**: 세련된 UI/UX

### Phase 9: 테스트 및 버그 수정 (Day 8)
- [x] 게임 밸런스 조정
- [x] 버그 수정
- [x] 성능 최적화
- [x] 크로스 브라우저 테스트

**결과물**: 안정적인 게임

### Phase 10: Vercel 배포 설정 및 최종 배포 (Day 8)
- [x] Vercel 프로젝트 설정
- [x] 환경변수 설정
- [x] 배포 스크립트 작성
- [x] 최종 배포
- [x] 프로덕션 테스트

**결과물**: 라이브 게임

---

## 🎨 디자인 가이드

### 색상 팔레트
```css
/* Primary Colors */
--primary-green: #10b981;     /* 자연, 동물원 테마 */
--primary-blue: #3b82f6;      /* 물, 하늘 */
--primary-orange: #f59e0b;    /* 따뜻함, 행복 */

/* Secondary Colors */
--secondary-brown: #92400e;   /* 땅, 나무 */
--secondary-teal: #14b8a6;    /* 열대, 신선함 */

/* UI Colors */
--background: #f9fafb;
--card: #ffffff;
--border: #e5e7eb;
--text-primary: #111827;
--text-secondary: #6b7280;

/* Status Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### 타이포그래피
- **제목**: Inter, sans-serif (Bold)
- **본문**: Inter, sans-serif (Regular)
- **숫자**: JetBrains Mono, monospace

---

## 🎯 성공 지표 (KPI)

### 게임플레이
- [x] 평균 플레이 시간: 30분 이상
- [x] 재방문율: 50% 이상
- [x] 동물 수집 완료율: 20% 이상

### 기술
- [x] 초기 로딩 시간: 3초 이내
- [x] Lighthouse 점수: 90점 이상
- [x] 버그 발생률: 1% 이하

---

## 🔒 보안 고려사항
- [x] Supabase RLS (Row Level Security) 설정
- [x] 환경변수 보안 관리
- [x] 클라이언트 사이드 검증 + 서버 사이드 검증
- [x] XSS, CSRF 방어

---

## 📝 참고사항

### 게임 밸런스 가이드
- **초기 자금**: $50,000
- **초기 동물**: 무료 토끼 2마리
- **입장료**: $10 (조정 가능)
- **동물 가격**: $500 ~ $50,000 (등급별)
- **시설 가격**: $1,000 ~ $100,000
- **일일 방문객**: 50 ~ 5,000명 (평판에 따라)

### 성장 곡선
- **레벨 1-10**: 빠른 성장, 기본 콘텐츠 언락
- **레벨 11-25**: 중간 성장, 고급 콘텐츠 언락
- **레벨 26-50**: 느린 성장, 최종 콘텐츠 언락

---

## ✅ Definition of Done

각 Phase는 다음 조건을 만족해야 완료로 간주:
1. 모든 계획된 기능 구현 완료
2. TypeScript 타입 에러 0개
3. ESLint 경고 0개
4. 로컬에서 빌드 및 실행 성공
5. 기본적인 수동 테스트 완료

---

**문서 버전**: 1.0
**작성일**: 2025-11-18
**최종 수정일**: 2025-11-18
