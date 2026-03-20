export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">설정</h1>

      <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
        <div className="p-4">
          <h3 className="font-medium text-gray-900">버전</h3>
          <p className="text-sm text-gray-500 mt-0.5">1.0.0</p>
        </div>
        <a
          href="https://forms.gle/QFpaLfs3GmKi1ecz5"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-medium text-gray-900">피드백 보내기</h3>
          <p className="text-sm text-gray-500 mt-0.5">서비스 개선을 위한 의견을 보내주세요</p>
        </a>
        <div className="p-4">
          <h3 className="font-medium text-gray-900">릴리즈 노트</h3>
          <div className="text-sm text-gray-500 mt-2 space-y-1">
            <p className="font-medium text-gray-700">v1.0.0 (2026.03.20)</p>
            <ul className="list-disc list-inside text-gray-500 space-y-0.5">
              <li>웹 버전 최초 출시</li>
              <li>로또 6/45, 연금복권 720+ 당첨번호 확인</li>
              <li>랜덤, 출현빈도, 구간별, 미출현 기반 번호 생성</li>
              <li>내 번호 관리 및 당첨 확인</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
