import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 - MyLotto',
  description: 'MyLotto 서비스 이용약관입니다.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">이용약관</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-sm text-gray-500">시행일: 2026년 3월 20일</p>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제1조 (목적)</h2>
          <p>
            본 약관은 MyLotto(이하 &quot;서비스&quot;)의 이용과 관련하여 서비스
            제공자와 이용자 간의 권리, 의무 및 기타 필요한 사항을 규정함을
            목적으로 합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제2조 (서비스의 내용)</h2>
          <p>
            서비스는 오락 및 정보 제공 목적의 무료 웹 서비스로, 복권을 판매하거나
            중개하지 않으며 도박 서비스가 아닙니다. 다음 기능을 제공합니다:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>로또 6/45 및 연금복권 720+ 당첨번호 조회</li>
            <li>다양한 방식의 로또 번호 생성 (랜덤, 출현빈도, 구간별, 미출현 기반)</li>
            <li>생성된 번호 저장 및 관리 (브라우저 로컬 저장)</li>
            <li>생성한 번호와 과거 당첨번호 대조</li>
            <li>로또 관련 정보 제공 (확률, 세금 안내 등)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제3조 (면책 조항)</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="font-medium text-yellow-800">
              본 서비스는 오락 및 정보 제공 목적으로 운영되며, 로또 당첨을
              보장하지 않습니다. 복권 구매를 권유하거나 조장하지 않습니다.
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              서비스에서 생성된 번호는 무작위 또는 통계 기반으로 생성되며,
              어떠한 과학적·통계적 방법으로도 로또 당첨 확률을 높일 수 없습니다.
            </li>
            <li>
              이용자는 본 서비스의 정보를 참고 자료로만 활용해야 하며, 복권
              구매 여부는 이용자 본인의 판단과 책임하에 결정해야 합니다.
            </li>
            <li>
              서비스 제공자의 고의 또는 중대한 과실로 인한 경우를 제외하고,
              서비스 이용으로 인한 복권 구매 및 그에 따른 금전적 손실에 대해
              서비스 제공자는 책임을 지지 않습니다.
            </li>
            <li>
              당첨번호 정보는 동행복권 공식 데이터를 기반으로 하나, 데이터의
              정확성을 보장하지 않습니다. 공식 당첨 결과는 동행복권
              홈페이지(dhlottery.co.kr)에서 확인하시기 바랍니다.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제4조 (지적재산권)</h2>
          <p>
            서비스의 디자인, 코드, 콘텐츠 등 지적재산권은 서비스 제공자에게
            귀속됩니다. 이용자는 서비스를 개인적, 비상업적 용도로만 이용할 수
            있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제5조 (서비스의 변경 및 중단)</h2>
          <p>
            서비스 제공자는 운영상 필요한 경우 서비스의 전부 또는 일부를 변경하거나
            중단할 수 있습니다. 이 경우 사전에 공지하도록 노력하겠습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제6조 (이용자의 의무)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>서비스를 불법적인 목적으로 이용하지 않아야 합니다.</li>
            <li>서비스의 정상적인 운영을 방해하지 않아야 합니다.</li>
            <li>타인의 권리를 침해하는 행위를 하지 않아야 합니다.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제7조 (약관의 변경)</h2>
          <p>
            본 약관은 변경될 수 있으며, 변경 시 시행일로부터 최소 7일 전에 본
            페이지를 통해 공지합니다. 이용자에게 불리한 변경의 경우 30일 전에
            공지합니다. 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수
            있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제8조 (준거법 및 관할법원)</h2>
          <p>
            본 약관의 해석 및 서비스 이용에 관한 분쟁은 대한민국 법률을
            준거법으로 하며, 관련 분쟁에 대해서는 민사소송법상의 관할법원에
            제소합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">제9조 (문의)</h2>
          <p>
            서비스 이용 관련 문의: <a href="mailto:codingbearkr@gmail.com" className="text-blue-600 hover:underline">codingbearkr@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
