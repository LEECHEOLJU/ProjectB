"use client";

import { useState, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { useAnimalStore } from '@/store/animalStore';
import { useNotificationStore } from '@/store/notificationStore';
import { Terminal, X } from 'lucide-react';
import { ANIMAL_SPECIES } from '@/data/animals';

export default function CheatConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([
    '🎮 Zoo Tycoon 치트 콘솔',
    '도움말을 보려면 "help" 입력',
    '---'
  ]);

  const { addMoney, setMoney, addExperience, setReputation, setLevel } = useGameStore();
  const { addAnimal } = useAnimalStore();
  const { addNotification } = useNotificationStore();

  // Ctrl + ` 로 콘솔 열기/닫기
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // ESC로 닫기
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const addToHistory = (text: string) => {
    setHistory((prev) => [...prev, text]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    addToHistory(`> ${cmd}`);

    // 명령어 파싱
    const parts = trimmedCmd.split(' ');
    const mainCmd = parts[0];
    const arg1 = parts[1];
    const arg2 = parts[2];

    switch (mainCmd) {
      case 'help':
        addToHistory('📋 사용 가능한 명령어:');
        addToHistory('  money [amount]     - 돈 추가 (기본: 10억)');
        addToHistory('  richman            - 100억 지급');
        addToHistory('  exp [amount]       - 경험치 추가');
        addToHistory('  levelup [level]    - 레벨 설정');
        addToHistory('  reputation [num]   - 평판 설정 (0-100)');
        addToHistory('  godmode            - 무한 자금 모드');
        addToHistory('  giveall            - 모든 동물 지급');
        addToHistory('  give [animal]      - 특정 동물 지급');
        addToHistory('  list animals       - 동물 목록 보기');
        addToHistory('  clear              - 콘솔 지우기');
        addToHistory('  reset              - 게임 초기화');
        break;

      case 'money':
        const amount = arg1 ? parseInt(arg1) : 10000000000;
        addMoney(amount);
        addToHistory(`💰 $${amount.toLocaleString()} 추가됨!`);
        addNotification('success', `💰 치트: $${amount.toLocaleString()} 획득!`);
        break;

      case 'richman':
        addMoney(100000000000);
        addToHistory('💎 부자 모드 활성화! $100,000,000,000 지급!');
        addNotification('success', '💎 부자 모드 활성화!');
        break;

      case 'godmode':
        setMoney(999999999999);
        addToHistory('👑 GOD MODE 활성화! 무한 자금!');
        addNotification('success', '👑 GOD MODE!');
        break;

      case 'exp':
        const expAmount = arg1 ? parseInt(arg1) : 10000;
        addExperience(expAmount);
        addToHistory(`⭐ 경험치 ${expAmount} 추가됨!`);
        addNotification('success', `⭐ 경험치 +${expAmount}`);
        break;

      case 'levelup':
        const targetLevel = arg1 ? parseInt(arg1) : 50;
        setLevel(targetLevel);
        addToHistory(`🎯 레벨 ${targetLevel}로 설정됨!`);
        addNotification('success', `🎯 레벨 ${targetLevel} 달성!`);
        break;

      case 'reputation':
        const rep = arg1 ? Math.min(100, Math.max(0, parseInt(arg1))) : 100;
        setReputation(rep);
        addToHistory(`⭐ 평판 ${rep}로 설정됨!`);
        addNotification('success', `⭐ 평판 ${rep}`);
        break;

      case 'giveall':
        let count = 0;
        ANIMAL_SPECIES.forEach((species) => {
          addAnimal(species.id);
          count++;
        });
        addToHistory(`🎁 모든 동물 ${count}종 지급됨!`);
        addNotification('success', `🎁 모든 동물 ${count}종 획득!`);
        break;

      case 'give':
        if (!arg1) {
          addToHistory('❌ 사용법: give [동물ID]');
          addToHistory('예시: give panda, give lion');
          break;
        }
        const species = ANIMAL_SPECIES.find((s) => s.id === arg1 || s.name === arg1);
        if (species) {
          addAnimal(species.id);
          addToHistory(`🎁 ${species.emoji} ${species.name} 지급됨!`);
          addNotification('success', `🎁 ${species.emoji} ${species.name} 획득!`);
        } else {
          addToHistory(`❌ 동물을 찾을 수 없습니다: ${arg1}`);
        }
        break;

      case 'list':
        if (arg1 === 'animals') {
          addToHistory('🦁 동물 목록 (ID로 give 명령어 사용):');
          ANIMAL_SPECIES.slice(0, 20).forEach((s) => {
            addToHistory(`  ${s.emoji} ${s.id} - ${s.name} (${s.rarity})`);
          });
          addToHistory(`... 그 외 ${ANIMAL_SPECIES.length - 20}종 더 있음`);
        } else {
          addToHistory('❌ 사용법: list animals');
        }
        break;

      case 'clear':
        setHistory(['🎮 Zoo Tycoon 치트 콘솔', '---']);
        break;

      case 'reset':
        if (confirm('정말 게임을 초기화하시겠습니까?')) {
          useGameStore.getState().resetGame();
          useAnimalStore.getState().animals.forEach((a) => {
            useAnimalStore.getState().removeAnimal(a.id);
          });
          addToHistory('♻️ 게임이 초기화되었습니다.');
          addNotification('info', '♻️ 게임 초기화됨');
        }
        break;

      case '':
        break;

      default:
        addToHistory(`❌ 알 수 없는 명령어: ${mainCmd}`);
        addToHistory('도움말을 보려면 "help" 입력');
    }

    setCommand('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      executeCommand(command);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 p-3 bg-gray-800 text-white rounded-full
                   hover:bg-gray-700 shadow-lg transition-all z-40"
        title="치트 콘솔 (Ctrl + `)"
      >
        <Terminal className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 w-[500px] bg-gray-900 text-green-400
                    rounded-lg shadow-2xl border border-gray-700 font-mono text-sm z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="font-bold">개발자 콘솔</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-gray-700 p-1 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* History */}
      <div className="h-[300px] overflow-y-auto p-3 space-y-1">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-400"
            placeholder="명령어 입력... (help for 도움말)"
            autoFocus
          />
        </div>
      </form>

      {/* Hint */}
      <div className="px-3 pb-2 text-xs text-gray-500">
        Ctrl + ` 로 닫기 | ESC로 닫기
      </div>
    </div>
  );
}
