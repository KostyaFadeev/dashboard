import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Личный кабинет',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
