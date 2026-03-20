import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'MyLotto - 로또 번호 생성 & 당첨 확인',
  description: '로또 6/45, 연금복권 720+ 당첨번호 확인 및 번호 생성 서비스',
  openGraph: {
    title: 'MyLotto - 로또 번호 생성 & 당첨 확인',
    description: '로또 6/45, 연금복권 720+ 당첨번호 확인 및 번호 생성 서비스',
    siteName: 'MyLotto',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Providers>
          <Header />
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 pb-20 md:pb-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
