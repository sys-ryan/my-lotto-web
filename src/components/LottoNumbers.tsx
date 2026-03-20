'use client';

import NumberBall from './NumberBall';

interface LottoNumbersProps {
  numbers: number[];
  bonusNumber?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function LottoNumbers({ numbers, bonusNumber, size = 'md' }: LottoNumbersProps) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {numbers.map((num, i) => (
        <NumberBall key={i} number={num} size={size} />
      ))}
      {bonusNumber !== undefined && (
        <>
          <span className="text-gray-400 font-bold text-lg mx-1">+</span>
          <NumberBall number={bonusNumber} size={size} />
        </>
      )}
    </div>
  );
}
