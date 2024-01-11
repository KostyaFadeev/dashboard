import React from 'react';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@/app/ui/global.css';

import { Navbar } from '@/app/ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-2 px-2 flex-grow">
        <MantineProvider>{children}</MantineProvider>
      </main>
      <footer className="w-full flex items-center justify-center py-6">
        <div className="flex items-center gap-1 text-current" title="Boundary">
          <span className="text-default-600">Твой помощник в мире шопинга</span>
          <p className="text-primary">Boundary</p>
        </div>
      </footer>
    </div>
  );
}
