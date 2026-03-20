import Link from 'next/link';

const methods = [
  {
    href: '/generate/random',
    title: '랜덤 생성',
    description: '완전 랜덤으로 번호를 생성합니다',
    icon: '🎲',
  },
  {
    href: '/generate/appearance',
    title: '출현 빈도 기반',
    description: '과거 당첨번호 출현 빈도를 분석하여 생성합니다',
    icon: '📊',
  },
  {
    href: '/generate/range',
    title: '구간별 생성',
    description: '번호 구간(1~10, 11~20 등)별 통계 기반 생성',
    icon: '📈',
  },
  {
    href: '/generate/overdue',
    title: '미출현 기반',
    description: '오랫동안 나오지 않은 번호 위주로 생성합니다',
    icon: '🔍',
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
            <div className="text-3xl">{m.icon}</div>
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
