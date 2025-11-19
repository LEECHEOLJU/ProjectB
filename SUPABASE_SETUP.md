# Supabase 설정 가이드

## 📋 환경변수 설정

### 1. Supabase 프로젝트 생성
1. https://supabase.com 접속
2. 새 프로젝트 생성
3. 프로젝트 이름: `zoo-tycoon-game`
4. 데이터베이스 비밀번호 설정 (안전한 곳에 보관)
5. Region 선택 (가장 가까운 지역 선택)

### 2. API 키 확인
1. Supabase 대시보드에서 Settings > API 이동
2. 다음 값 복사:
   - `Project URL`
   - `anon public` key

### 3. 환경변수 파일 생성

#### `.env.local` (로컬 개발용)
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Service Role Key (서버사이드 작업용)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

#### Vercel 환경변수 설정
Vercel 대시보드에서 다음 변수 추가:
- `NEXT_PUBLIC_SUPABASE_URL`: https://your-project-id.supabase.co
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: your-anon-key-here

---

## 🗄️ 데이터베이스 테이블 생성

Supabase SQL Editor에서 다음 SQL을 순서대로 실행하세요.

### 1. UUID 확장 활성화
```sql
-- UUID 생성 함수 활성화
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

### 2. users 테이블
```sql
-- 사용자 테이블
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- RLS 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- RLS 정책: 자기 자신의 데이터만 읽기 가능
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- RLS 정책: 자기 자신의 데이터만 업데이트 가능
CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);
```

### 3. zoos 테이블
```sql
-- 동물원 테이블
CREATE TABLE zoos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL DEFAULT 'My Zoo',
  money BIGINT DEFAULT 50000,
  level INTEGER DEFAULT 1,
  experience INTEGER DEFAULT 0,
  reputation INTEGER DEFAULT 50,
  game_time INTEGER DEFAULT 0, -- 게임 내 경과 시간 (분)
  weather VARCHAR(20) DEFAULT 'sunny',
  season VARCHAR(20) DEFAULT 'spring',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 인덱스
CREATE INDEX idx_zoos_user_id ON zoos(user_id);

-- RLS 활성화
ALTER TABLE zoos ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo"
  ON zoos FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own zoo"
  ON zoos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own zoo"
  ON zoos FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own zoo"
  ON zoos FOR DELETE
  USING (auth.uid() = user_id);
```

### 4. animals 테이블
```sql
-- 동물 테이블
CREATE TABLE animals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  species_id VARCHAR(50) NOT NULL,
  name VARCHAR(50),
  age INTEGER DEFAULT 0, -- 게임 내 일수
  stage VARCHAR(20) DEFAULT 'baby', -- baby, teen, adult
  hunger INTEGER DEFAULT 100 CHECK (hunger >= 0 AND hunger <= 100),
  happiness INTEGER DEFAULT 100 CHECK (happiness >= 0 AND happiness <= 100),
  health INTEGER DEFAULT 100 CHECK (health >= 0 AND health <= 100),
  gender VARCHAR(10), -- male, female
  is_sick BOOLEAN DEFAULT FALSE,
  sickness_type VARCHAR(50),
  can_breed BOOLEAN DEFAULT FALSE,
  last_fed_at TIMESTAMP WITH TIME ZONE,
  last_played_at TIMESTAMP WITH TIME ZONE,
  last_treated_at TIMESTAMP WITH TIME ZONE,
  acquired_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_animals_zoo_id ON animals(zoo_id);
CREATE INDEX idx_animals_species_id ON animals(species_id);
CREATE INDEX idx_animals_stage ON animals(stage);

-- RLS 활성화
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo animals"
  ON animals FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert animals to own zoo"
  ON animals FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own zoo animals"
  ON animals FOR UPDATE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own zoo animals"
  ON animals FOR DELETE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 5. facilities 테이블
```sql
-- 시설 테이블
CREATE TABLE facilities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  facility_type VARCHAR(50) NOT NULL, -- habitat, visitor, attraction, staff
  facility_id VARCHAR(50) NOT NULL,
  level INTEGER DEFAULT 1,
  condition INTEGER DEFAULT 100 CHECK (condition >= 0 AND condition <= 100),
  position_x INTEGER,
  position_y INTEGER,
  revenue_generated BIGINT DEFAULT 0,
  maintenance_cost INTEGER DEFAULT 0,
  last_maintained_at TIMESTAMP WITH TIME ZONE,
  built_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_facilities_zoo_id ON facilities(zoo_id);
CREATE INDEX idx_facilities_type ON facilities(facility_type);

-- RLS 활성화
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo facilities"
  ON facilities FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert facilities to own zoo"
  ON facilities FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own zoo facilities"
  ON facilities FOR UPDATE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own zoo facilities"
  ON facilities FOR DELETE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 6. visitors_log 테이블
```sql
-- 방문객 로그 테이블
CREATE TABLE visitors_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  visitor_count INTEGER DEFAULT 0,
  total_revenue BIGINT DEFAULT 0,
  satisfaction_avg DECIMAL(4,2) DEFAULT 0,
  ticket_revenue BIGINT DEFAULT 0,
  facility_revenue BIGINT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_visitors_log_zoo_date ON visitors_log(zoo_id, log_date);

-- RLS 활성화
ALTER TABLE visitors_log ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo visitor logs"
  ON visitors_log FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert visitor logs to own zoo"
  ON visitors_log FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 7. transactions 테이블
```sql
-- 거래 내역 테이블
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- income, expense
  category VARCHAR(50) NOT NULL, -- ticket, food, shop, animal, facility, maintenance, salary
  amount BIGINT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_transactions_zoo_id ON transactions(zoo_id);
CREATE INDEX idx_transactions_type ON transactions(type);
CREATE INDEX idx_transactions_created_at ON transactions(created_at DESC);

-- RLS 활성화
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo transactions"
  ON transactions FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert transactions to own zoo"
  ON transactions FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 8. achievements 테이블
```sql
-- 업적 테이블
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  achievement_id VARCHAR(50) NOT NULL,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(zoo_id, achievement_id)
);

-- 인덱스
CREATE INDEX idx_achievements_zoo_id ON achievements(zoo_id);
CREATE INDEX idx_achievements_completed ON achievements(completed);

-- RLS 활성화
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo achievements"
  ON achievements FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert achievements to own zoo"
  ON achievements FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own zoo achievements"
  ON achievements FOR UPDATE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 9. game_saves 테이블
```sql
-- 게임 저장 테이블
CREATE TABLE game_saves (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zoo_id UUID REFERENCES zoos(id) ON DELETE CASCADE,
  save_data JSONB NOT NULL,
  save_version VARCHAR(20) DEFAULT '1.0',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_game_saves_zoo_id ON game_saves(zoo_id);
CREATE INDEX idx_game_saves_updated_at ON game_saves(updated_at DESC);

-- RLS 활성화
ALTER TABLE game_saves ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own zoo saves"
  ON game_saves FOR SELECT
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert saves to own zoo"
  ON game_saves FOR INSERT
  WITH CHECK (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own zoo saves"
  ON game_saves FOR UPDATE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own zoo saves"
  ON game_saves FOR DELETE
  USING (
    zoo_id IN (
      SELECT id FROM zoos WHERE user_id = auth.uid()
    )
  );
```

### 10. 트리거: updated_at 자동 갱신
```sql
-- updated_at 자동 갱신 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 트리거 생성
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_zoos_updated_at BEFORE UPDATE ON zoos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_animals_updated_at BEFORE UPDATE ON animals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_facilities_updated_at BEFORE UPDATE ON facilities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_game_saves_updated_at BEFORE UPDATE ON game_saves
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 🔐 Row Level Security (RLS) 정책 요약

모든 테이블에 RLS가 활성화되어 있으며, 다음 원칙을 따릅니다:

1. **users**: 자기 자신의 데이터만 읽기/수정 가능
2. **zoos**: 자기 소유의 동물원만 CRUD 가능
3. **animals, facilities, transactions, achievements, game_saves**:
   - 자기 소유의 동물원에 속한 데이터만 CRUD 가능
   - JOIN을 통해 user_id 확인

---

## 📊 초기 데이터 삽입 (선택사항)

### 테스트 사용자 및 동물원 생성
```sql
-- 테스트용 사용자 (실제로는 Supabase Auth를 통해 생성)
-- 이 부분은 실제 앱에서는 사용하지 않음
-- INSERT INTO users (id, email, username) VALUES
--   ('00000000-0000-0000-0000-000000000001', 'test@example.com', 'testuser');

-- 동물 종 마스터 데이터는 클라이언트 사이드에서 관리
-- (데이터베이스에 별도 테이블 불필요)
```

---

## ✅ 설정 확인 체크리스트

- [ ] Supabase 프로젝트 생성 완료
- [ ] `.env.local` 파일 생성 및 API 키 설정
- [ ] 모든 테이블 생성 완료 (9개 테이블)
- [ ] RLS 정책 활성화 확인
- [ ] 트리거 생성 완료
- [ ] Vercel 환경변수 설정 (배포 시)

---

## 🔧 트러블슈팅

### 문제: RLS 정책으로 인한 접근 거부
**해결**:
- Supabase 대시보드에서 auth.uid()가 올바른 값을 반환하는지 확인
- 로그인 후 올바른 JWT 토큰이 전달되는지 확인

### 문제: 테이블 생성 실패
**해결**:
- UUID 확장이 활성화되어 있는지 확인
- 순서대로 테이블을 생성했는지 확인 (외래키 의존성)

### 문제: 성능 저하
**해결**:
- 인덱스가 올바르게 생성되었는지 확인
- 쿼리 플랜 분석 (`EXPLAIN ANALYZE`)

---

**문서 버전**: 1.0
**최종 수정일**: 2025-11-18
