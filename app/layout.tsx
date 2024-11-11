import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return children;
}