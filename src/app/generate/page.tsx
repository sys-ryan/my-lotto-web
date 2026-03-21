import Link from 'next/link';
import { Dices, BarChart3, TrendingUp, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const methods: { href: string; title: string; description: string; detail: string; icon: LucideIcon; color: string }[] = [
  {
    href: '/generate/random',
    title: '랜덤 생성',
    description: '완전 랜덤으로 번호를 생성합니다',
    detail: '',
    icon: Dices,
    color: 'text-blue-500',
  },
  {
    href: '/generate/appearance',
    title: '출현 빈도 기반',
    description: '과거 당첨번호 출현 빈도를 분석하여 생성합니다',
    detail: '고빈도·저빈도 번호 가중치를 조절하여, 자주 나온 번호와 드물게 나온 번호의 반영 비율을 직접 설정할 수 있습니다.',
    icon: BarChart3,
    color: 'text-green-500',
  },
  {
    href: '/generate/range',
    title: '구간별 생성',
    description: '번호를 5개 구간(1-10, 11-20, 21-30, 31-40, 41-45)으로 나누어 생성합니다',
    detail: '각 구간에서 몇 개의 번호를 뽑을지 설정하고, 구간 내 선택 방식(랜덤/빈도 가중/미출현 우선)을 선택할 수 있습니다. 통계 기반 자동 분포도 지원합니다.',
    icon: TrendingUp,
    color: 'text-orange-500',
  },
  {
    href: '/generate/overdue',
    title: '미출현 기반',
    description: '최근 일정 기간 동안 나오지 않은 번호를 활용하여 생성합니다',
    detail: '분석 기간 내 미출현 번호 목록을 확인하고, 포함할 미출현 번호 개수(1~6개)를 설정할 수 있습니다. 나머지는 랜덤으로 채웁니다.',
    icon: Search,
    color: 'text-purple-500',
  },
];

export default function GeneratePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">번호 생성</h1>
      <div className="grid gap-4">
        {methods.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <m.icon className={`w-8 h-8 shrink-0 ${m.color}`} />
            <div>
              <div className="font-bold text-gray-900">{m.title}</div>
              <div className="text-sm text-gray-500 mt-0.5">{m.description}</div>
              {m.detail && (
                <div className="text-xs text-gray-400 mt-1.5 leading-relaxed">{m.detail}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
