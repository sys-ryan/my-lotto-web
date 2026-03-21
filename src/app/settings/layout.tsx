import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '설정 - MyLotto',
  description: 'MyLotto 앱 설정을 관리하세요.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
