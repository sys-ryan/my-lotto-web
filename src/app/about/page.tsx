import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '소개 - MyLotto',
  description: 'MyLotto 서비스 소개 및 제공 기능 안내입니다.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">MyLotto 소개</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 text-gray-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">서비스 소개</h2>
          <p>
            MyLotto는 로또 6/45 및 연금복권 720+의 당첨번호 조회, 번호 생성, 당첨
            확인 기능을 제공하는 웹 서비스입니다. 단순한 랜덤 생성부터 출현 빈도,
            구간별, 미출현 기반 등 다양한 통계 기반 번호 생성 방식을 지원합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">주요 기능</h2>
          <div className="grid gap-3">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">당첨번호 조회</h3>
              <p className="text-sm">
                로또 6/45와 연금복권 720+의 최신 당첨번호 및 등수별 당첨 정보를
                확인할 수 있습니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">내 번호 관리</h3>
              <p className="text-sm">
                생성한 번호를 저장하고 관리할 수 있습니다. 모든 데이터는 브라우저에
                저장되어 개인정보 걱정 없이 이용 가능합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">당첨 확인</h3>
              <p className="text-sm">
                저장한 번호의 당첨 여부를 최신 당첨번호와 비교하여 확인할 수
                있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">번호 생성 방식 상세</h2>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-gray-900">1. 랜덤 생성</h3>
            <p className="text-sm">
              1~45 번호 중 6개를 완전 무작위로 선택합니다. 가장 단순한 방식으로,
              별도의 통계 분석 없이 순수 난수로 번호를 생성합니다.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-gray-900">2. 번호별 출현 횟수 데이터 기반</h3>
            <p className="text-sm">
              과거 당첨 번호의 출현 빈도를 분석하여 번호 조합을 생성합니다.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-900">고빈도 번호 가중치</p>
                <p className="text-gray-600">자주 출현한 번호에 가중치를 얼마나 줄 것인지 결정합니다.</p>
                <ul className="list-disc pl-5 text-gray-500 mt-1 space-y-0.5">
                  <li>높은 값(90%): 매우 자주 출현한 번호에 강한 가중치 부여</li>
                  <li>중간 값(50%): 적절한 균형</li>
                  <li>낮은 값(10%): 출현 빈도에 거의 의존하지 않음</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">저빈도 번호 반영 비율</p>
                <p className="text-gray-600">적게 출현한 번호들을 얼마나 고려할 것인지 결정합니다.</p>
                <ul className="list-disc pl-5 text-gray-500 mt-1 space-y-0.5">
                  <li>높은 값(80%): 거의 출현하지 않은 번호도 적극 고려</li>
                  <li>중간 값(30%): 저빈도 번호를 일부만 고려</li>
                  <li>낮은 값(0%): 저빈도 번호를 전혀 고려하지 않음</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-gray-900">3. 구간별 당첨 번호 데이터 기반</h3>
            <p className="text-sm">
              로또 번호를 5개 구간(1-10, 11-20, 21-30, 31-40, 41-45)으로 나누어
              각 구간에서 몇 개의 번호를 선택할지 설정하여 조합을 생성합니다.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-900">분포 전략</p>
                <ul className="list-disc pl-5 text-gray-500 mt-1 space-y-0.5">
                  <li>자동 분포: 과거 당첨 통계에 기반한 최적의 번호 분포를 자동 설정</li>
                  <li>수동 분포: 사용자가 직접 각 구간별 번호 개수 설정 (합계 6개)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">구간 내 번호 선택 방식</p>
                <ul className="list-disc pl-5 text-gray-500 mt-1 space-y-0.5">
                  <li>랜덤: 구간 내 모든 번호를 동일한 확률로 선택</li>
                  <li>빈도 가중: 구간 내 과거 출현 빈도에 따른 가중치 적용</li>
                  <li>미출현 우선: 구간 내 오랫동안 출현하지 않은 번호 우선 선택</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-gray-900">4. 미출현 번호 데이터 기반</h3>
            <p className="text-sm">
              최근 특정 기간 동안 나오지 않은 번호들을 추적하고 활용하여
              조합을 생성합니다.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-900">미출현 번호 포함 개수</p>
                <p className="text-gray-600">
                  선택된 기간 동안 나오지 않은 번호들을 몇 개(1~6개) 포함할지
                  설정합니다. 나머지 번호는 전체 번호 중에서 랜덤으로 채웁니다.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">보너스 번호 포함 여부</p>
                <p className="text-gray-600">
                  보너스 번호를 통계에 포함할지 선택합니다. 포함하면 보너스
                  번호의 출현 여부도 미출현 계산에 반영됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">면책 사항</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800">
              본 서비스는 오락 및 정보 제공 목적으로 운영되며, 로또 당첨을
              보장하지 않습니다. 복권 구매에 따른 금전적 손실에 대해 서비스
              제공자는 책임을 지지 않습니다.
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">문의</h2>
          <p>
            서비스 관련 문의는 <Link href="/contact" className="text-blue-600 hover:underline">문의하기</Link> 페이지를
            이용해 주세요.
          </p>
        </section>
      </div>
    </div>
  );
}
