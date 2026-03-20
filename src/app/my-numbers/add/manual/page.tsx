'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NumberBall from '@/components/NumberBall';
import LottoNumbers from '@/components/LottoNumbers';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import { v4 } from '@/util/uuid';

export default function ManualInputPage() {
  const router = useRouter();
  const addMyLottoNumber = useMyLottoNumbersStore((s) => s.addMyLottoNumber);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [savedSets, setSavedSets] = useState<number[][]>([]);

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, num].sort((a, b) => a - b));
    }
  };

  const addSet = () => {
    if (selectedNumbers.length !== 6) return;
    setSavedSets([...savedSets, selectedNumbers]);
    setSelectedNumbers([]);
  };

  const removeSet = (index: number) => {
    setSavedSets(savedSets.filter((_, i) => i !== index));
  };

  const saveAll = () => {
    if (savedSets.length === 0) return;
    addMyLottoNumber({
      version: '1',
      id: v4(),
      title: `직접 입력 (${new Date().toLocaleDateString('ko-KR')})`,
      isFavorite: false,
      numbers: savedSets,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    router.push('/my-numbers');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">번호 직접 입력</h1>

      {/* Selected numbers */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-700">{selectedNumbers.length}/6 선택됨</p>
          {selectedNumbers.length > 0 && (
            <button
              onClick={() => setSelectedNumbers([])}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              초기화
            </button>
          )}
        </div>
        <div className="flex gap-1.5 min-h-[40px]">
          {selectedNumbers.map((num) => (
            <NumberBall key={num} number={num} />
          ))}
        </div>
      </div>

      {/* Number grid */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="grid grid-cols-9 gap-1.5">
          {Array.from({ length: 45 }, (_, i) => i + 1).map((num) => {
            const isSelected = selectedNumbers.includes(num);
            return (
              <button
                key={num}
                onClick={() => toggleNumber(num)}
                className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isSelected
                    ? 'ring-2 ring-blue-500 scale-110'
                    : 'hover:scale-105'
                }`}
              >
                <NumberBall number={num} size="sm" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Add set button */}
      <button
        onClick={addSet}
        disabled={selectedNumbers.length !== 6}
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        세트 추가 ({selectedNumbers.length}/6)
      </button>

      {/* Saved sets */}
      {savedSets.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-bold text-gray-900 mb-3">추가된 세트</h3>
          <div className="space-y-2">
            {savedSets.map((nums, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-5">{String.fromCharCode(65 + i)}</span>
                  <LottoNumbers numbers={nums} size="sm" />
                </div>
                <button
                  onClick={() => removeSet(i)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={saveAll}
            className="w-full mt-4 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
          >
            저장하기 ({savedSets.length}세트)
          </button>
        </div>
      )}
    </div>
  );
}
