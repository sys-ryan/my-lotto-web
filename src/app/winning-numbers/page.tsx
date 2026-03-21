'use client';

import { useState } from 'react';
import { useGetWinningNumberInfoQuery } from '@/hooks/queries/useGetWinningNumberInfoQuery';
import { useGetDH720WinningNumberInfoQuery } from '@/hooks/queries/useGetDH720WinningNumberInfoQuery';
import LottoNumbers from '@/components/LottoNumbers';
import NumberBall from '@/components/NumberBall';
import { formatKRW } from '@/util/lotto';

type Tab = 'lotto645' | 'dh720';

export default function WinningNumbersPage() {
  const [tab, setTab] = useState<Tab>('lotto645');
  const lotto = useGetWinningNumberInfoQuery();
  const dh720 = useGetDH720WinningNumberInfoQuery();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">당첨번호</h1>

      {/* Tabs */}
      <div className="flex bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setTab('lotto645')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === 'lotto645'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          로또 6/45
        </button>
        <button
          onClick={() => setTab('dh720')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === 'dh720'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          연금복권 720+
        </button>
      </div>

      {tab === 'lotto645' ? (
        <Lotto645Tab data={lotto.data} isLoading={lotto.isLoading} />
      ) : (
        <DH720Tab data={dh720.data} isLoading={dh720.isLoading} />
      )}
    </div>
  );
}

function Lotto645Tab({
  data,
  isLoading,
}: {
  data: ReturnType<typeof useGetWinningNumberInfoQuery>['data'];
  isLoading: boolean;
}) {
  if (isLoading) return <LoadingSkeleton />;
  if (!data?.data) return <ErrorMessage />;

  const { round, id, winningNumbers, bonusNumber, result } = data.data;

  return (
    <div className="space-y-4">
      {/* Winning numbers card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">제 {round}회</h2>
          <p className="text-sm text-gray-500">{id}</p>
        </div>
        <div className="flex justify-center">
          <LottoNumbers numbers={winningNumbers} bonusNumber={bonusNumber} size="lg" />
        </div>
      </div>

      {/* Prize table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">등수별 당첨 정보</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">등수</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">1인 당첨금</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">당첨 게임 수</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {result.map((r) => (
                <tr key={r.rank}>
                  <td className="px-4 py-3 font-medium text-gray-900">{r.rank}</td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {r.prizePerGame}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {r.winningGames}게임
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DH720Tab({
  data,
  isLoading,
}: {
  data: ReturnType<typeof useGetDH720WinningNumberInfoQuery>['data'];
  isLoading: boolean;
}) {
  if (isLoading) return <LoadingSkeleton />;
  if (!data?.data) return <ErrorMessage />;

  const d = data.data;

  return (
    <div className="space-y-4">
      {/* Winning numbers card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">제 {d.round}회</h2>
          <p className="text-sm text-gray-500">{d.drawDate}</p>
        </div>

        {/* 1등 */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
              1등
            </span>
            <span className="text-sm text-gray-500">
              {d.firstPrizeGroup}조
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {d.firstPrizeNumbers.map((num, i) => (
              <NumberBall key={i} number={num} size="lg" />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            월 {formatKRW(d.firstPrizeAmount)} x {d.firstPrizeYears}년
          </p>
        </div>

        {/* 보너스 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              보너스
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {d.bonusNumbers.map((num, i) => (
              <NumberBall key={i} number={num} size="lg" />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            월 {formatKRW(d.bonusAmount)} x {d.bonusYears}년
          </p>
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-4" />
      <div className="flex justify-center gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="w-12 h-12 bg-gray-200 rounded-full" />
        ))}
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center text-gray-400">
      데이터를 불러올 수 없습니다
    </div>
  );
}
