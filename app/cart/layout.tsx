import React from 'react';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@/app/ui/global.css';
import Link from 'next/link';
import NextLink from 'next/link';

import { Navbar } from '@/app/ui/navbar';
import { TelegramIcon } from '@/public/icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-2 px-2 flex-grow">
        <MantineProvider>{children}</MantineProvider>
      </main>
      <footer className="border-neutral-300 bg-neutral-50">
        <div className="mx-auto flex flex-wrap max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col justify-center text-start min-w-64 py-6">
            <div className="text-3xl uppercase mb-2 text-blue-500-gradient-to from-indigo-500">
              Boundary
            </div>
            <div className="text-sm mb-2">Твой помощник в мире шопинга</div>
            <div className="flex gap-4">
              <NextLink
                target="_blank"
                className="block flex gap-4 font-semibold text-indigo-800 hover:text-orange-500"
                href={'https://t.me/Boundary_dostavka'}
              >
                <TelegramIcon width={24} />
              </NextLink>
              <NextLink
                target="_blank"
                className="block flex gap-4 font-semibold text-indigo-800 hover:text-orange-500"
                href={'https://vk.com/boundary_delivery'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#2e6ee8"
                    d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2m3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437c-.864-.833-1.229-.937-1.448-.937c-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667a11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.459c.375 0 .51.167.656.552c.708 2.084 1.916 3.896 2.406 3.896c.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417c.188 0 .333-.104.677-.448a11.999 11.999 0 0 0 1.792-2.98a.628.628 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646c.145.219.656.646 1 1.052a6.486 6.486 0 0 1 1.229 1.708c.125.406-.084.615-.5.615"
                  />
                </svg>
              </NextLink>
            </div>
          </div>
          <div className="md:ml-10 grid grid-cols-2  sm:grid-cols-3 gap-8 py-16">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase">Boundary</h3>
              <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                <li className="text-sm">
                  <Link href={'/'}>Главная</Link>
                </li>
                <li className="text-sm">
                  <Link href={'/about'}>О нас</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase">Покупателям</h3>
              <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                <li className="text-sm">
                  <Link href={`/login`}>Личный кабинет</Link>
                </li>
                <li className="text-sm">
                  <Link href={`/catalog`}>Каталог</Link>
                </li>
                <li className="text-sm">
                  <Link href={`/calculator`}>Калькулятор доставки</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase">Помощь</h3>
              <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                <li className="text-sm">
                  <Link href={`/info`}>Как заказать ?</Link>
                </li>
                <li className="text-sm">
                  <Link href={`/about#contacts`}>Контакты</Link>
                </li>
                <li className="text-sm">
                  <Link href={`/delivery`}>Доставка и оплата</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-neutral-200 py-10 px-4 sm:flex-row">
          <p className="text-sm text-neutral-500">© 2023 - Boundary. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
