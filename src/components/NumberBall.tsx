'use client';

import { resolveBallColor } from '@/util/color';

interface NumberBallProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-9 h-9 text-sm md:w-10 md:h-10 md:text-base',
  lg: 'w-10 h-10 text-base md:w-12 md:h-12 md:text-lg',
};

export default function NumberBall({ number, size = 'md' }: NumberBallProps) {
  const bgColor = resolveBallColor(number);

  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center font-bold text-white shadow-md`}
      style={{ backgroundColor: bgColor }}
    >
      {number}
    </div>
  );
}
