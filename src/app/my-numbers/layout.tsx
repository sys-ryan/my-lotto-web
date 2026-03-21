import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 번호 관리 - MyLotto',
  description: '저장한 로또 번호를 관리하고 당첨 결과를 확인하세요.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
