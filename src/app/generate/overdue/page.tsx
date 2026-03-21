'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getNumbersByOverdueStatistics, postNumbersByOverdueGeneration } from '@/api/lotto';
import { getDateRange, DATE_RANGE_OPTIONS } from '@/util/date';
import LottoNumbers from '@/components/LottoNumbers';
import NumberBall from '@/components/NumberBall';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import { v4 } from '@/util/uuid';

export default function OverdueGeneratePage() {
  const [dateRange, setDateRange] = useState('3months');
  const [overdueCount, setOverdueCount] = useState(3);
  const [includeBonusNumber, setIncludeBonusNumber] = useState(false);
  const [results, setResults] = useState<number[][]>([]);
  const addMyLottoNumber = useMyLottoNumbersStore((s) => s.addMyLottoNumber);

  const { startDate, endDate } = getDateRange(dateRange);

  const statsQuery = useQuery({
    queryKey: ['numbersByOverdueStatistics', startDate, endDate, includeBonusNumber],
    queryFn: () => getNumbersByOverdueStatistics({ startDate, endDate, includeBonusNumber }),
  });

  const mutation = useMutation({
    mutationFn: postNumbersByOverdueGeneration,
    onSuccess: (data) => {
      setResults(data.data);
    },
  });

  const handleGenerate = () => {
    mutation.mutate({
      startDate,
      endDate,
      overdueNumberCount: overdueCount,
      includeBonusNumber,
    });
  };

  const saveNumbers = () => {
    if (results.length === 0) return;
    addMyLottoNumber({
      version: '1',
      id: v4(),
      title: `미출현 기반 (${new Date().toLocaleDateString('ko-KR')})`,
      isFavorite: false,
      numbers: results,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    alert('저장되었습니다!');
  };

  const sortedStats = statsQuery.data?.data
    ? [...statsQuery.data.data].sort((a, b) => b.overdueDays - a.overdueDays)
    : [];

  const getOverdueColor = (days: number) => {
    if (days >= 60) return 'text-red-600 font-bold';
    if (days >= 30) return 'text-orange-500 font-medium';
    return 'text-gray-500';
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">미출현 기반 생성</h1>

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
          <div className="text-center text-gray-400 py-4">미출현 데이터 로딩 중...</div>
        )}
        {sortedStats.length > 0 && (
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              미출현 번호 ({sortedStats.length}개)
            </label>
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {sortedStats.map((stat) => (
                <div key={stat.number} className="flex flex-col items-center gap-1">
                  <NumberBall number={stat.number} size="sm" />
                  <span className={`text-xs ${getOverdueColor(stat.overdueDays)}`}>
                    {stat.overdueDays}일
                  </span>
                </div>
              ))}
            </div>
            {sortedStats.some((s) => s.overdueDays >= 60) && (
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <span><span className="text-red-600 font-bold">60일+</span> 매우 오래됨</span>
                <span><span className="text-orange-500 font-medium">30일+</span> 오래됨</span>
              </div>
            )}
          </div>
        )}
        {statsQuery.data && sortedStats.length === 0 && (
          <div className="text-center text-gray-400 py-4">해당 기간에 미출현 번호가 없습니다</div>
        )}

        {/* Overdue count */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">
            미출현 번호 포함 개수: {overdueCount}
          </label>
          <input
            type="range"
            min={1}
            max={6}
            value={overdueCount}
            onChange={(e) => setOverdueCount(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1개</span>
            <span>6개</span>
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
            <button onClick={saveNumbers} className="text-base text-blue-600 font-medium hover:text-blue-700">
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
    </div>
  );
}
