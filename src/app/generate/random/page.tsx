'use client';

import { useState, useCallback } from 'react';
import { generateLottoNumbers } from '@/util/lotto';
import LottoNumbers from '@/components/LottoNumbers';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import { v4 } from '@/util/uuid';

export default function RandomGeneratePage() {
  const [results, setResults] = useState<number[][]>([]);
  const [count, setCount] = useState(5);
  const addMyLottoNumber = useMyLottoNumbersStore((s) => s.addMyLottoNumber);

  const generate = useCallback(() => {
    const newResults = Array.from({ length: count }, () => generateLottoNumbers());
    setResults(newResults);
  }, [count]);

  const saveNumbers = () => {
    if (results.length === 0) return;
    addMyLottoNumber({
      version: '1',
      id: v4(),
      title: `랜덤 생성 (${new Date().toLocaleDateString('ko-KR')})`,
      isFavorite: false,
      numbers: results,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    alert('저장되었습니다!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">랜덤 번호 생성</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <label className="block text-base font-medium text-gray-700 mb-2">
          생성 개수
        </label>
        <div className="flex items-center gap-3 mb-4">
          {[1, 3, 5, 10].map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                count === n
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {n}개
            </button>
          ))}
        </div>
        <button
          onClick={generate}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
        >
          번호 생성
        </button>
      </div>

      {results.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">생성 결과</h2>
            <button
              onClick={saveNumbers}
              className="text-base text-blue-600 font-medium hover:text-blue-700"
            >
              저장하기
            </button>
          </div>
          <div className="space-y-3">
            {results.map((nums, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-base text-gray-400 w-6">{String.fromCharCode(65 + i)}</span>
                <LottoNumbers numbers={nums} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* [AD PREVIEW] 번호생성 결과 하단 배너 */}
      <div className="bg-red-200 border-2 border-red-400 border-dashed rounded-2xl p-4 text-center text-red-700 font-medium text-sm">
        광고 영역 - 생성 결과 하단 (320x250)
      </div>
    </div>
  );
}
