'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { generateAppearanceCountBasedNumber } from '@/api/lotto';
import { getDateRange, DATE_RANGE_OPTIONS } from '@/util/date';
import LottoNumbers from '@/components/LottoNumbers';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import { v4 } from '@/util/uuid';

export default function AppearanceGeneratePage() {
  const [dateRange, setDateRange] = useState('all');
  const [highFreqWeight, setHighFreqWeight] = useState(70);
  const [lowFreqRatio, setLowFreqRatio] = useState(30);
  const [includeBonusNumber, setIncludeBonusNumber] = useState(false);
  const [results, setResults] = useState<number[][]>([]);
  const addMyLottoNumber = useMyLottoNumbersStore((s) => s.addMyLottoNumber);

  const mutation = useMutation({
    mutationFn: generateAppearanceCountBasedNumber,
    onSuccess: (data) => {
      setResults(data.data);
    },
  });

  const handleGenerate = () => {
    const { startDate, endDate } = getDateRange(dateRange);
    mutation.mutate({
      highFrequencyNumberWeight: highFreqWeight,
      lowFrequencyNumberRatio: lowFreqRatio,
      startDate,
      endDate,
      includeBonusNumber,
    });
  };

  const saveNumbers = () => {
    if (results.length === 0) return;
    addMyLottoNumber({
      version: '1',
      id: v4(),
      title: `출현빈도 기반 (${new Date().toLocaleDateString('ko-KR')})`,
      isFavorite: false,
      numbers: results,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    alert('저장되었습니다!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">출현 빈도 기반 생성</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        {/* Date range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">분석 기간</label>
          <div className="flex flex-wrap gap-2">
            {DATE_RANGE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDateRange(opt.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  dateRange === opt.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* High frequency weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            고빈도 번호 가중치: {highFreqWeight}%
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={highFreqWeight}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setHighFreqWeight(val);
              setLowFreqRatio(100 - val);
            }}
            className="w-full"
          />
        </div>

        {/* Include bonus */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeBonusNumber}
            onChange={(e) => setIncludeBonusNumber(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">보너스 번호 포함</span>
        </label>

        <button
          onClick={handleGenerate}
          disabled={mutation.isPending}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {mutation.isPending ? '생성 중...' : '번호 생성'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">생성 결과</h2>
            <button
              onClick={saveNumbers}
              className="text-sm text-blue-600 font-medium hover:text-blue-700"
            >
              저장하기
            </button>
          </div>
          <div className="space-y-3">
            {results.map((nums, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-sm text-gray-400 w-6">{String.fromCharCode(65 + i)}</span>
                <LottoNumbers numbers={nums} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
