import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 간단한 인증 헬퍼 함수들
export const auth = {
  // 익명 로그인 (간단한 테스트용)
  async signInAnonymously() {
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) console.error('Auth error:', error);
    return { data, error };
  },

  // 현재 사용자 가져오기
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // 로그아웃
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Signout error:', error);
    return { error };
  },
};

// 동물원 데이터 함수들
export const zooService = {
  // 동물원 가져오기 또는 생성
  async getOrCreateZoo(userId: string) {
    // 기존 동물원 조회
    const { data: existingZoo, error: fetchError } = await supabase
      .from('zoos')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (existingZoo) return { data: existingZoo, error: null };

    // 없으면 생성
    const { data: newZoo, error: createError } = await supabase
      .from('zoos')
      .insert({
        user_id: userId,
        name: 'My Zoo',
        money: 50000,
        level: 1,
        experience: 0,
        reputation: 50,
        game_time: 0,
        weather: 'sunny',
        season: 'spring',
      })
      .select()
      .single();

    return { data: newZoo, error: createError };
  },

  // 동물원 정보 업데이트
  async updateZoo(zooId: string, updates: any) {
    const { data, error } = await supabase
      .from('zoos')
      .update(updates)
      .eq('id', zooId)
      .select()
      .single();

    return { data, error };
  },
};

// 동물 데이터 함수들
export const animalService = {
  // 동물 목록 가져오기
  async getAnimals(zooId: string) {
    const { data, error } = await supabase
      .from('animals')
      .select('*')
      .eq('zoo_id', zooId);

    return { data, error };
  },

  // 동물 추가
  async addAnimal(zooId: string, animalData: any) {
    const { data, error } = await supabase
      .from('animals')
      .insert({
        zoo_id: zooId,
        ...animalData,
      })
      .select()
      .single();

    return { data, error };
  },

  // 동물 업데이트
  async updateAnimal(animalId: string, updates: any) {
    const { data, error } = await supabase
      .from('animals')
      .update(updates)
      .eq('id', animalId)
      .select()
      .single();

    return { data, error };
  },

  // 동물 삭제
  async deleteAnimal(animalId: string) {
    const { error } = await supabase
      .from('animals')
      .delete()
      .eq('id', animalId);

    return { error };
  },
};

// 시설 데이터 함수들
export const facilityService = {
  // 시설 목록 가져오기
  async getFacilities(zooId: string) {
    const { data, error } = await supabase
      .from('facilities')
      .select('*')
      .eq('zoo_id', zooId);

    return { data, error };
  },

  // 시설 추가
  async addFacility(zooId: string, facilityData: any) {
    const { data, error } = await supabase
      .from('facilities')
      .insert({
        zoo_id: zooId,
        ...facilityData,
      })
      .select()
      .single();

    return { data, error };
  },

  // 시설 업데이트
  async updateFacility(facilityId: string, updates: any) {
    const { data, error } = await supabase
      .from('facilities')
      .update(updates)
      .eq('id', facilityId)
      .select()
      .single();

    return { data, error };
  },
};

// 게임 저장 함수들
export const saveService = {
  // 게임 저장
  async saveGame(zooId: string, saveData: any) {
    const { data, error } = await supabase
      .from('game_saves')
      .upsert({
        zoo_id: zooId,
        save_data: saveData,
        save_version: '1.0',
      })
      .select()
      .single();

    return { data, error };
  },

  // 게임 불러오기
  async loadGame(zooId: string) {
    const { data, error } = await supabase
      .from('game_saves')
      .select('*')
      .eq('zoo_id', zooId)
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    return { data, error };
  },
};
