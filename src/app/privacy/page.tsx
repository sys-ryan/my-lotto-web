import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 - MyLotto',
  description: 'MyLotto 서비스의 개인정보처리방침입니다.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">개인정보처리방침</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-sm text-gray-500">시행일: 2026년 3월 20일</p>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">1. 수집하는 개인정보</h2>
          <p>
            MyLotto는 서비스 제공을 위해 최소한의 정보를 처리합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>자동 수집 정보:</strong> 서비스 이용 시 기기 정보, 브라우저 종류,
              접속 일시, 페이지 조회 기록 등이 자동으로 수집될 수 있습니다.
            </li>
            <li>
              <strong>로컬 저장 정보:</strong> 사용자가 저장한 로또 번호, 설정 정보 등은
              사용자의 브라우저(localStorage)에만 저장되며 서버로 전송되지 않습니다.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">2. 개인정보의 이용 목적</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>서비스 제공 및 운영</li>
            <li>서비스 이용 통계 분석 및 개선</li>
            <li>광고 게재 (Google AdSense)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">3. 쿠키 및 추적 기술</h2>
          <p>
            MyLotto는 서비스 개선 및 광고 제공을 위해 쿠키를 사용할 수 있습니다.
            Google AdSense 및 Google Analytics는 자체 쿠키를 사용하여 광고를
            개인화하고 트래픽을 분석합니다.
          </p>
          <p>
            사용자는 브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 서비스
            이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">4. 제3자 제공</h2>
          <p>
            MyLotto는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의
            서비스가 자체적으로 정보를 수집할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Google AdSense:</strong> 맞춤 광고 제공을 위한 쿠키 및 사용 데이터 수집
              (<a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google 개인정보처리방침</a>)
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">5. 개인정보의 보관 및 파기</h2>
          <p>
            브라우저 로컬 저장소에 보관된 데이터는 사용자가 직접 삭제할 수 있습니다.
            서버에는 개인정보가 저장되지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">6. 이용자의 권리</h2>
          <p>
            사용자는 언제든지 브라우저의 저장 데이터를 삭제하거나, 쿠키 사용을
            거부할 수 있습니다. 개인정보 관련 문의는 아래 연락처로 보내주세요.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">7. 연락처</h2>
          <p>
            개인정보 관련 문의: <a href="mailto:ryankim.codingbear@gmail.com" className="text-blue-600 hover:underline">ryankim.codingbear@gmail.com</a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">8. 방침 변경</h2>
          <p>
            본 개인정보처리방침은 변경될 수 있으며, 변경 시 본 페이지를 통해
            공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
