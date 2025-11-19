/**
 * 숫자를 통화 형식으로 포맷
 */
export function formatMoney(amount: number): string {
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

/**
 * 큰 숫자를 간단하게 표시
 */
export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toLocaleString();
}

/**
 * 시간을 포맷 (게임 내 시간)
 */
export function formatGameTime(minutes: number): string {
  const days = Math.floor(minutes / (24 * 60));
  const hours = Math.floor((minutes % (24 * 60)) / 60);

  if (days > 0) {
    return `Day ${days}, ${hours}:00`;
  }
  return `${hours}:00`;
}

/**
 * 날짜를 포맷
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('ko-KR');
}

/**
 * 퍼센트를 색상으로 변환
 */
export function getPercentColor(percent: number): string {
  if (percent >= 70) return 'text-green-600';
  if (percent >= 40) return 'text-yellow-600';
  return 'text-red-600';
}

/**
 * 상태바 색상 (배고픔, 행복도, 건강)
 */
export function getStatBarColor(value: number): string {
  if (value >= 70) return 'bg-green-500';
  if (value >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
}
