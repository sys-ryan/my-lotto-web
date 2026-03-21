'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getNumbersByRangeStatistics, postNumbersByRangeGeneration } from '@/api/lotto';
import { getDateRange, DATE_RANGE_OPTIONS } from '@/util/date';
import LottoNumbers from '@/components/LottoNumbers';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import { v4 } from '@/util/uuid';
import type { RangeStatisticsData } from '@/types/lotto';

const RANGES = ['1-10', '11-20', '21-30', '31-40', '41-45'];
const RANGE_KEYS: (keyof RangeStatisticsData)[] = [
  'range1NumberCount', 'range2NumberCount', 'range3NumberCount',
  'range4NumberCount', 'range5NumberCount',
];
const SELECTION_METHODS = [
  { value: 'RANDOM' as const, label: '랜덤' },
  { value: 'WEIGHTED_BY_FREQUENCY' as const, label: '빈도 가중' },
  { value: 'PRIORITIZE_UNAPPEARED' as const, label: '미출현 우선' },
];

export default function RangeGeneratePage() {
  const [dateRange, setDateRange] = useState('all');
  const [includeBonusNumber, setIncludeBonusNumber] = useState(false);
  const [rangeCounts, setRangeCounts] = useState<Record<string, number>>({
    '1-10': 1, '11-20': 1, '21-30': 1, '31-40': 1, '41-45': 2,
  });
  const [selectionMethod, setSelectionMethod] = useState<'RANDOM' | 'WEIGHTED_BY_FREQUENCY' | 'PRIORITIZE_UNAPPEARED'>('RANDOM');
  const [results, setResults] = useState<number[][]>([]);
  const addMyLottoNumber = useMyLottoNumbersStore((s) => s.addMyLottoNumber);

  const { startDate, endDate } = getDateRange(dateRange);

  const statsQuery = useQuery({
    queryKey: ['numbersByRangeStatistics', startDate, endDate, includeBonusNumber],
    queryFn: () => getNumbersByRangeStatistics({ startDate, endDate, includeBonusNumber }),
  });

  const mutation = useMutation({
    mutationFn: postNumbersByRangeGeneration,
    onSuccess: (data) => {
      setResults((prev) => [...prev, data.data]);
    },
  });

  const totalCount = Object.values(rangeCounts).reduce((a, b) => a + b, 0);

  const getRangeCount = (index: number): number => {
    const data = statsQuery.data?.data;
    if (!data) return 0;
    return data[RANGE_KEYS[index]] as number;
  };

  const handleAutoDistribute = () => {
    const data = statsQuery.data?.data;
    if (!data) return;
    const total = data.totalNumberCount;
    if (total === 0) return;

    const counts = RANGE_KEYS.map((key) => data[key] as number);
    const rawCounts = counts.map((c) => (c / total) * 6);
    const floored = rawCounts.map((c) => Math.floor(c));
    let remaining = 6 - floored.reduce((a, b) => a + b, 0);

    const fractions = rawCounts.map((c, i) => ({ i, frac: c - floored[i] }));
    fractions.sort((a, b) => b.frac - a.frac);
    for (const f of fractions) {
      if (remaining <= 0) break;
      floored[f.i]++;
      remaining--;
    }

    const newCounts: Record<string, number> = {};
    RANGES.forEach((range, i) => {
      newCounts[range] = floored[i];
    });
    setRangeCounts(newCounts);
  };

  const handleGenerate = () => {
    if (totalCount !== 6) {
      alert('구간별 개수의 합이 6이어야 합니다');
      return;
    }
    setResults([]);
    for (let i = 0; i < 5; i++) {
      mutation.mutate({
        startDate,
        endDate,
        includeBonusNumber,
        rangeCounts,
        selectionMethod,
      });
    }
  };

  const saveNumbers = () => {
    if (results.length === 0) return;
    addMyLottoNumber({
      version: '1',
      id: v4(),
      title: `구간별 생성 (${new Date().toLocaleDateString('ko-KR')})`,
      isFavorite: false,
      numbers: results,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    alert('저장되었습니다!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">구간별 번호 생성</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        {/* Date range */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">분석 기간</label>
          <div className="flex flex-wrap gap-2">
            {DATE_RANGE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDateRange(opt.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  dateRange === opt.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        {statsQuery.isLoading && (
          <div className="text-center text-gray-400 py-4">통계 데이터 로딩 중...</div>
        )}
        {statsQuery.data?.data && (
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">구간별 출현 통계</label>
            <div className="grid grid-cols-5 gap-2">
              {RANGES.map((range, i) => {
                const count = getRangeCount(i);
                const total = statsQuery.data!.data.totalNumberCount;
                const pct = total > 0 ? ((count / total) * 100).toFixed(1) : '0';
                return (
                  <div key={range} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="font-medium text-gray-900 text-sm">{range}</div>
                    <div className="text-lg font-bold text-blue-600">{count}</div>
                    <div className="text-xs text-gray-400">{pct}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Range counts */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-base font-medium text-gray-700">
              구간별 개수 (합계: {totalCount}/6)
            </label>
            <button
              onClick={handleAutoDistribute}
              disabled={!statsQuery.data?.data}
              className="text-sm text-blue-600 font-medium hover:text-blue-700 disabled:text-gray-400"
            >
              자동 분포
            </button>
          </div>
          <div className="space-y-2">
            {RANGES.map((range) => (
              <div key={range} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-16">{range}</span>
                <input
                  type="range"
                  min={0}
                  max={6}
                  value={rangeCounts[range] || 0}
                  onChange={(e) =>
                    setRangeCounts((prev) => ({ ...prev, [range]: parseInt(e.target.value) }))
                  }
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-900 w-6">{rangeCounts[range] || 0}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selection method */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">선택 방법</label>
          <div className="flex flex-wrap gap-2">
            {SELECTION_METHODS.map((m) => (
              <button
                key={m.value}
                onClick={() => setSelectionMethod(m.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectionMethod === m.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
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
          disabled={mutation.isPending || totalCount !== 6}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {mutation.isPending ? '생성 중...' : '번호 생성'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">생성 결과</h2>
            <button onClick={saveNumbers} className="text-base text-blue-600 font-medium hover:text-blue-700">
              저장하기
            </button>
          </div>
          <div className="space-y-3">
            {results.map((nums, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-base text-gray-400 w-6">{String.fromCharCode(65 + i)}</span>
                <LottoNumbers numbers={[...nums].sort((a, b) => a - b)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
