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
            MyLotto는 이용자의 개인정보를 직접 수집하지 않습니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>로컬 저장 정보:</strong> 사용자가 저장한 로또 번호, 설정 정보 등은
              사용자의 브라우저(localStorage)에만 저장되며 서버로 전송되지 않습니다.
            </li>
            <li>
              <strong>제3자 서비스에 의한 수집:</strong> MyLotto에서 사용하는 제3자
              서비스(Google AdSense)가 광고 제공을 위해 쿠키, 기기 정보, 페이지 조회
              기록 등을 자체적으로 수집할 수 있습니다. 이는 MyLotto가 아닌 해당
              서비스 제공자가 수집 주체입니다.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">2. 개인정보의 이용 목적</h2>
          <p>MyLotto가 직접 수집하는 개인정보는 없으며, 제3자 서비스는 다음 목적으로 정보를 처리합니다:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdSense: 맞춤 광고 제공</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">3. 쿠키 및 추적 기술</h2>
          <p>
            MyLotto 자체는 쿠키를 사용하지 않습니다. 다만, Google AdSense가
            맞춤 광고 제공을 위해 자체 쿠키를 사용할 수 있습니다.
          </p>
          <p>
            사용자는 브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 서비스
            이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">4. 제3자 서비스</h2>
          <p>
            MyLotto는 이용자의 개인정보를 직접 제3자에게 제공하지 않습니다. 다만,
            다음의 제3자 서비스가 서비스 이용 과정에서 자체적으로 정보를 수집합니다:
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
            MyLotto는 서버에 개인정보를 저장하지 않습니다. 브라우저 로컬 저장소에
            보관된 데이터는 사용자가 직접 삭제할 수 있습니다. 제3자 서비스가
            수집한 정보의 보관 및 파기는 해당 서비스의 개인정보처리방침에 따릅니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">6. 안전성 확보 조치</h2>
          <p>
            MyLotto는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>개인정보를 서버에 저장하지 않음으로써 유출 위험을 원천 차단합니다.</li>
            <li>사용자 데이터는 브라우저 로컬 저장소에만 보관되어 외부 접근이 불가합니다.</li>
            <li>HTTPS(SSL) 암호화 통신을 사용합니다.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">7. 이용자의 권리</h2>
          <p>
            사용자는 언제든지 브라우저의 저장 데이터를 삭제하거나, 쿠키 사용을
            거부할 수 있습니다. Google 광고 개인화는{' '}
            <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서
            비활성화할 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">8. 개인정보 보호책임자</h2>
          <ul className="list-none space-y-1">
            <li><strong>성명:</strong> 김성진</li>
            <li><strong>직위:</strong> 대표 / 서비스 운영자</li>
            <li><strong>사업자:</strong> 코딩 베어(Coding Bear)</li>
            <li><strong>이메일:</strong>{' '}
              <a href="mailto:codingbearkr@gmail.com" className="text-blue-600 hover:underline">codingbearkr@gmail.com</a>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">9. 권익침해 구제방법</h2>
          <p>
            개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에 문의하실
            수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>개인정보침해 신고센터 (한국인터넷진흥원): privacy.kisa.or.kr / 118</li>
            <li>개인정보분쟁조정위원회: kopico.go.kr / 1833-6972</li>
            <li>대검찰청 사이버수사과: spo.go.kr / 1301</li>
            <li>경찰청 사이버수사국: ecrm.police.go.kr / 182</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">10. 방침 변경</h2>
          <p>
            본 개인정보처리방침은 변경될 수 있으며, 변경 시 시행일 최소 7일 전에
            본 페이지를 통해 공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
