'use client';

import Link from 'next/link';
import { Dices, BarChart3, TrendingUp, Search, Trophy, Star } from 'lucide-react';
import { useGetWinningNumberInfoQuery } from '@/hooks/queries/useGetWinningNumberInfoQuery';
import LottoNumbers from '@/components/LottoNumbers';

export default function Home() {
  const { data, isLoading } = useGetWinningNumberInfoQuery();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">MyLotto</h1>
        <p className="text-gray-500">로또 당첨번호 확인 & 번호 생성</p>
      </section>

      {/* Latest winning numbers */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">최신 당첨번호</h2>
          <Link href="/winning-numbers" className="text-base text-blue-600 hover:text-blue-700">
            더보기 →
          </Link>
        </div>
        <div className="min-h-[80px]">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-40 mb-3" />
              <div className="flex gap-1.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full" />
                ))}
              </div>
            </div>
          ) : data?.data ? (
            <div>
              <p className="text-base text-gray-500 mb-3">
                제 {data.data.round}회 ({data.data.id})
              </p>
              <LottoNumbers
                numbers={data.data.winningNumbers}
                bonusNumber={data.data.bonusNumber}
                size="lg"
              />
            </div>
          ) : (
            <p className="text-gray-500">데이터를 불러올 수 없습니다</p>
          )}
        </div>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          href="/generate/random"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <Dices className="w-7 h-7 text-blue-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">랜덤 생성</div>
          <div className="text-sm text-gray-500 mt-1">행운의 번호 뽑기</div>
        </Link>
        <Link
          href="/generate/appearance"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <BarChart3 className="w-7 h-7 text-green-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">출현 빈도</div>
          <div className="text-sm text-gray-500 mt-1">통계 기반 생성</div>
        </Link>
        <Link
          href="/generate/range"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <TrendingUp className="w-7 h-7 text-orange-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">구간별 생성</div>
          <div className="text-sm text-gray-500 mt-1">구간 통계 기반</div>
        </Link>
        <Link
          href="/generate/overdue"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <Search className="w-7 h-7 text-purple-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">미출현 기반</div>
          <div className="text-sm text-gray-500 mt-1">안 나온 번호 위주</div>
        </Link>
        <Link
          href="/winning-numbers/check"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <Trophy className="w-7 h-7 text-yellow-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">당첨 확인</div>
          <div className="text-sm text-gray-500 mt-1">내 번호 확인하기</div>
        </Link>
        <Link
          href="/my-numbers"
          className="bg-white rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition-shadow"
        >
          <Star className="w-7 h-7 text-amber-500 mx-auto mb-2" />
          <div className="font-medium text-gray-900">내 번호</div>
          <div className="text-sm text-gray-500 mt-1">저장된 번호 관리</div>
        </Link>
      </section>
    </div>
  );
}
