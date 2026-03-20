import Link from 'next/link';

export default function AddNumberPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">번호 추가</h1>

      <div className="grid gap-4">
        <Link
          href="/my-numbers/add/manual"
          className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className="text-3xl">✏️</div>
          <div>
            <div className="font-bold text-gray-900">직접 입력</div>
            <div className="text-sm text-gray-500 mt-0.5">6개 숫자를 직접 입력합니다</div>
          </div>
        </Link>

        <Link
          href="/generate"
          className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className="text-3xl">🎲</div>
          <div>
            <div className="font-bold text-gray-900">번호 생성</div>
            <div className="text-sm text-gray-500 mt-0.5">다양한 방법으로 번호를 생성합니다</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
