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
              <h3 className="font-bold text-gray-900 mb-1">번호 생성</h3>
              <p className="text-sm">
                랜덤, 출현 빈도 기반, 구간별, 미출현 기반 등 4가지 방식으로 로또
                번호를 생성할 수 있습니다.
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

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">기술 스택</h2>
          <p>
            Next.js, React, TypeScript, Tailwind CSS 기반으로 개발되었으며,
            빠르고 쾌적한 사용 경험을 제공합니다.
          </p>
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
