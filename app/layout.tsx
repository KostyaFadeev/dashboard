import React from 'react';
import '@mantine/carousel/styles.css';
import clsx from 'clsx';

import '@/app/ui/global.css';
import { fontSans } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
