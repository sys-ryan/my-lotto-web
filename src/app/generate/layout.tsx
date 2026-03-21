import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로또 번호 생성 - MyLotto',
  description: '랜덤, 출현 빈도, 구간별, 미출현 등 다양한 방식으로 로또 번호를 생성하세요.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
