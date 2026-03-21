import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로또 가이드 - MyLotto',
  description: '로또 당첨 확률, 당첨금 세금, 자주 묻는 질문 등 로또 관련 유용한 정보를 제공합니다.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
