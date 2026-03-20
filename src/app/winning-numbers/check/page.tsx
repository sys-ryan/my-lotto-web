'use client';

import { useState } from 'react';
import { useGetWinningNumberInfoQuery } from '@/hooks/queries/useGetWinningNumberInfoQuery';
import LottoNumbers from '@/components/LottoNumbers';
import NumberBall from '@/components/NumberBall';

interface CheckResult {
  numbers: number[];
  matchedNumbers: number[];
  matchedBonus: boolean;
  rank: number | null;
}

function checkWinning(
  myNumbers: number[],
  winningNumbers: number[],
  bonusNumber: number,
): CheckResult {
  const matched = myNumbers.filter((n) => winningNumbers.includes(n));
  const matchedBonus = myNumbers.includes(bonusNumber);

  let rank: number | null = null;
  if (matched.length === 6) rank = 1;
  else if (matched.length === 5 && matchedBonus) rank = 2;
  else if (matched.length === 5) rank = 3;
  else if (matched.length === 4) rank = 4;
  else if (matched.length === 3) rank = 5;

  return { numbers: myNumbers, matchedNumbers: matched, matchedBonus, rank };
}

export default function WinningCheckPage() {
  const { data: lottoData } = useGetWinningNumberInfoQuery();
  const [inputs, setInputs] = useState<string[]>(Array(6).fill(''));
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState('');

  const handleCheck = () => {
    setError('');
    setResult(null);

    const nums = inputs.map((v) => parseInt(v, 10));
    if (nums.some((n) => isNaN(n) || n < 1 || n > 45)) {
      setError('1~45 사이의 숫자를 입력해주세요');
      return;
    }
    if (new Set(nums).size !== 6) {
      setError('중복되지 않는 6개 숫자를 입력해주세요');
      return;
    }
    if (!lottoData?.data) {
      setError('당첨번호를 불러올 수 없습니다');
      return;
    }

    const sorted = [...nums].sort((a, b) => a - b);
    setResult(checkWinning(sorted, lottoData.data.winningNumbers, lottoData.data.bonusNumber));
  };

  const rankLabels: Record<number, { text: string; color: string }> = {
    1: { text: '1등 당첨!', color: 'text-red-600' },
    2: { text: '2등 당첨!', color: 'text-orange-600' },
    3: { text: '3등 당첨!', color: 'text-yellow-600' },
    4: { text: '4등 당첨!', color: 'text-green-600' },
    5: { text: '5등 당첨!', color: 'text-blue-600' },
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">당첨 확인</h1>

      {/* Current winning numbers */}
      {lottoData?.data && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-sm text-gray-500 mb-2">
            제 {lottoData.data.round}회 당첨번호
          </p>
          <LottoNumbers
            numbers={lottoData.data.winningNumbers}
            bonusNumber={lottoData.data.bonusNumber}
          />
        </div>
      )}

      {/* Input form */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-900 mb-4">내 번호 입력</h2>
        <div className="grid grid-cols-6 gap-2 mb-4">
          {inputs.map((val, i) => (
            <input
              key={i}
              type="number"
              min={1}
              max={45}
              value={val}
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[i] = e.target.value;
                setInputs(newInputs);
              }}
              className="w-full h-12 text-center text-lg font-bold border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder={`${i + 1}`}
            />
          ))}
        </div>
        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
        <button
          onClick={handleCheck}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
        >
          당첨 확인
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-center mb-4">
            {result.rank ? (
              <h3 className={`text-2xl font-bold ${rankLabels[result.rank].color}`}>
                {rankLabels[result.rank].text}
              </h3>
            ) : (
              <h3 className="text-xl font-bold text-gray-500">낙첨</h3>
            )}
            <p className="text-sm text-gray-500 mt-1">
              {result.matchedNumbers.length}개 일치
              {result.matchedBonus && ' + 보너스'}
            </p>
          </div>
          <div className="flex justify-center gap-1.5 flex-wrap">
            {result.numbers.map((num, i) => {
              const isMatched = result.matchedNumbers.includes(num);
              return (
                <div key={i} className={`${!isMatched ? 'opacity-30' : ''}`}>
                  <NumberBall number={num} size="lg" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
