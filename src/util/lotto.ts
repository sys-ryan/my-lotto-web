export const generateLottoNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

export const formatPrize = (amount: number): string => {
  if (amount >= 100000000) {
    const eok = Math.floor(amount / 100000000);
    const remainder = amount % 100000000;
    if (remainder === 0) return `${eok}억`;
    const man = Math.floor(remainder / 10000);
    return `${eok}억 ${man.toLocaleString()}만`;
  }
  if (amount >= 10000) {
    return `${Math.floor(amount / 10000).toLocaleString()}만`;
  }
  return amount.toLocaleString();
};

export const formatKRW = (amount: number): string => {
  return amount.toLocaleString('ko-KR') + '원';
};
