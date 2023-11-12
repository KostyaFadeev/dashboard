// import '@/app/ui/global.css';
//
// import { inter } from '@/app/ui/fonts';
// import { Metadata } from 'next';
//
// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
//
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body  className={`${inter.className} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }



import '@/app/ui/global.css';
import '@mantine/carousel/styles.css';

import {fontSans} from '@/app/ui/fonts';
import clsx from "clsx";
import {Navbar} from "@/app/ui/navbar";
import React from "react";
import {MantineProvider} from '@mantine/core';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={clsx(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
          )}
      >
      <div className="relative flex flex-col h-screen">
        <Navbar/>
        <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
            <MantineProvider>
          {children}
            </MantineProvider>
        </main>
        <footer className="w-full flex items-center justify-center py-6">
          <div
              className="flex items-center gap-1 text-current"
              title="Boundary"
          >
            <span className="text-default-600">Твой помощник в мире шопинга</span>
            <p className="text-primary">Boundary</p>
          </div>
        </footer>
      </div>
      </body>
      </html>
  );
}
