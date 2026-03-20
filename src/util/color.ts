export const resolveBallColor = (num: number): string => {
  if (num >= 1 && num <= 10) return '#FBC400';
  if (num >= 11 && num <= 20) return '#69C8F2';
  if (num >= 21 && num <= 30) return '#FF7272';
  if (num >= 31 && num <= 40) return '#AAAAAA';
  if (num >= 41 && num <= 45) return '#B0D841';
  return '#AAAAAA';
};

export const resolveBallTextColor = (num: number): string => {
  if (num >= 31 && num <= 40) return '#FFFFFF';
  return '#FFFFFF';
};
