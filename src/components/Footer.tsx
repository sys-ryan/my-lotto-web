import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">서비스</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/winning-numbers" className="hover:text-gray-900">당첨번호</Link></li>
              <li><Link href="/generate" className="hover:text-gray-900">번호생성</Link></li>
              <li><Link href="/my-numbers" className="hover:text-gray-900">내 번호</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">가이드</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/guide" className="hover:text-gray-900">로또 확률</Link></li>
              <li><Link href="/guide/tax" className="hover:text-gray-900">세금 안내</Link></li>
              <li><Link href="/guide/faq" className="hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">정보</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-gray-900">소개</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">문의하기</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 text-sm">법적 고지</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-gray-900">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">이용약관</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 space-y-2">
          <p className="text-xs text-gray-400 text-center">
            본 서비스는 오락 및 정보 제공 목적이며, 당첨을 보장하지 않습니다.
          </p>
          <p className="text-xs text-gray-400 text-center">
            &copy; 2026 MyLotto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
