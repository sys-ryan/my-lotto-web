import Link from 'next/link';
import { Dices, BarChart3, TrendingUp, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const methods: { href: string; title: string; description: string; icon: LucideIcon; color: string }[] = [
  {
    href: '/generate/random',
    title: '랜덤 생성',
    description: '완전 랜덤으로 번호를 생성합니다',
    icon: Dices,
    color: 'text-blue-500',
  },
  {
    href: '/generate/appearance',
    title: '출현 빈도 기반',
    description: '과거 당첨번호 출현 빈도를 분석하여 생성합니다',
    icon: BarChart3,
    color: 'text-green-500',
  },
  {
    href: '/generate/range',
    title: '구간별 생성',
    description: '번호 구간(1~10, 11~20 등)별 통계 기반 생성',
    icon: TrendingUp,
    color: 'text-orange-500',
  },
  {
    href: '/generate/overdue',
    title: '미출현 기반',
    description: '오랫동안 나오지 않은 번호 위주로 생성합니다',
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
            <m.icon className={`w-8 h-8 ${m.color}`} />
            <div>
              <div className="font-bold text-gray-900">{m.title}</div>
              <div className="text-sm text-gray-500 mt-0.5">{m.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
