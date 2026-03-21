import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">로또 가이드</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-sm text-gray-500">기준일: 2026년 3월</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">로또 6/45 당첨 확률</h2>
          <p>
            로또 6/45는 1부터 45까지의 숫자 중 6개를 선택하는 복권입니다. 각 등수별
            당첨 확률은 다음과 같습니다:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-gray-600 border-b">등수</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 border-b">조건</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 border-b">확률</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">1등</td>
                  <td className="px-4 py-3">6개 번호 모두 일치</td>
                  <td className="px-4 py-3 text-right font-mono">1 / 8,145,060</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2등</td>
                  <td className="px-4 py-3">5개 + 보너스 번호 일치</td>
                  <td className="px-4 py-3 text-right font-mono">1 / 1,357,510</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3등</td>
                  <td className="px-4 py-3">5개 번호 일치</td>
                  <td className="px-4 py-3 text-right font-mono">1 / 35,724</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">4등</td>
                  <td className="px-4 py-3">4개 번호 일치</td>
                  <td className="px-4 py-3 text-right font-mono">1 / 733</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">5등</td>
                  <td className="px-4 py-3">3개 번호 일치</td>
                  <td className="px-4 py-3 text-right font-mono">1 / 45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">확률의 이해</h2>
          <p>
            로또 1등 당첨 확률인 8,145,060분의 1은 매우 낮은 확률입니다. 이를
            쉽게 비유하면:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>매주 1게임씩 구매하면 평균 약 <strong>15만 6,636년</strong>에 한 번 당첨</li>
            <li>서울시 인구(약 950만 명) 중 1명이 당첨될 확률과 비슷</li>
            <li>벼락에 맞을 확률(약 100만 분의 1)보다 8배 낮음</li>
          </ul>
          <p>
            하지만 5등 당첨 확률은 45분의 1로, 매주 구매하면 약 한 달에 한 번
            정도 당첨될 수 있는 비교적 높은 확률입니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">연금복권 720+ 안내</h2>
          <p>
            연금복권 720+는 1등 당첨 시 매월 700만원을 20년간 지급받는 복권입니다.
            총 수령액은 약 16억 8,000만원이며, 보너스 번호 일치 시 매월 100만원을
            10년간 수령합니다.
          </p>
          <p>
            로또 6/45와 달리 당첨금이 누적되지 않으므로 매회 동일한 금액을 수령할
            수 있다는 장점이 있습니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">더 알아보기</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/guide/tax"
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-1">당첨금 세금 안내</h3>
              <p className="text-sm text-gray-500">등수별 세금 계산 방법 알아보기</p>
            </Link>
            <Link
              href="/guide/faq"
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-1">자주 묻는 질문</h3>
              <p className="text-sm text-gray-500">MyLotto 서비스 FAQ</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
