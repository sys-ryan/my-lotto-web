import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 - MyLotto',
  description: 'MyLotto 서비스 관련 문의 및 연락처 안내입니다.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">문의하기</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          MyLotto 서비스 이용 중 궁금한 점이나 건의사항이 있으시면 아래 이메일로
          연락해 주세요.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-500 mb-2">이메일</p>
          <a
            href="mailto:codingbearkr@gmail.com"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            codingbearkr@gmail.com
          </a>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">문의 시 참고사항</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>버그 신고 시 사용 중인 브라우저와 기기 정보를 함께 알려주시면 빠른 처리에 도움이 됩니다.</li>
            <li>기능 제안 및 개선 요청도 환영합니다.</li>
            <li>답변은 영업일 기준 1~3일 내에 드리겠습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
