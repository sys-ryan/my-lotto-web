import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '당첨금 세금 안내 - MyLotto',
  description: '로또 당첨금에 부과되는 세금과 실수령액 계산 방법을 안내합니다.',
};

export default function TaxGuidePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">당첨금 세금 안내</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">복권 당첨금 과세 기준</h2>
          <p>
            복권 당첨금은 &quot;기타소득&quot;으로 분류되며, 당첨금액에 따라 세율이
            다르게 적용됩니다. 2024년 기준 과세 기준은 다음과 같습니다:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-gray-600 border-b">당첨금</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 border-b">세율</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 border-b">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">200만원 이하</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">비과세</td>
                  <td className="px-4 py-3 text-gray-500">4등, 5등 해당</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">200만원 초과 ~ 3억원 이하</td>
                  <td className="px-4 py-3 text-right font-bold text-yellow-600">22%</td>
                  <td className="px-4 py-3 text-gray-500">소득세 20% + 지방소득세 2%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3억원 초과</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">33%</td>
                  <td className="px-4 py-3 text-gray-500">소득세 30% + 지방소득세 3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">실수령액 예시</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">1등 당첨금 20억원인 경우</h3>
              <ul className="space-y-1 text-sm">
                <li>3억원까지: 3억 x 22% = <strong>6,600만원</strong> (세금)</li>
                <li>3억원 초과분: 17억 x 33% = <strong>5억 6,100만원</strong> (세금)</li>
                <li>총 세금: <strong>약 6억 2,700만원</strong></li>
                <li className="pt-2 text-base font-bold text-blue-600">
                  실수령액: 약 13억 7,300만원
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">3등 당첨금 150만원인 경우</h3>
              <ul className="space-y-1 text-sm">
                <li>200만원 이하이므로 비과세</li>
                <li className="pt-2 text-base font-bold text-green-600">
                  실수령액: 150만원 (전액 수령)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">연금복권 720+ 세금</h2>
          <p>
            연금복권의 경우 매월 수령하는 금액에 대해 세금이 부과됩니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              1등 월 700만원: 200만원 초과분(500만원)에 대해 22% 과세 →
              월 실수령액 약 <strong>590만원</strong>
            </li>
            <li>
              보너스 월 100만원: 200만원 이하이므로 비과세 →
              월 실수령액 <strong>100만원</strong>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">참고사항</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>복권 당첨금은 분리과세되어 종합소득에 합산되지 않습니다.</li>
            <li>세금은 당첨금 수령 시 원천징수되므로 별도 신고가 필요 없습니다.</li>
            <li>공동 구매의 경우 1인당 수령액 기준으로 세율이 적용됩니다.</li>
            <li>
              세법은 변경될 수 있으므로, 정확한 정보는 국세청 홈페이지를
              참고하시기 바랍니다.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
