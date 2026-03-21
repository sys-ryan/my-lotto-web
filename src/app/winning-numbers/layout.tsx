import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로또 당첨번호 조회 - MyLotto',
  description: '로또 6/45 최신 당첨번호 및 역대 당첨번호를 조회하세요.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
