import React from 'react';
import { Metadata } from 'next';
import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

import CarouselMain from '@/app/ui/carousel/carousel-main';
import CarouselCard from '@/app/ui/CarouselCard';
import { Button } from '@nextui-org/react';
import { siteConfig } from '@/app/ui/site';
import CustomTabs from '@/app/ui/custom-tabs';
import { AtSymbolIcon, LinkIcon } from '@heroicons/react/24/solid';
import NextLink from 'next/link';
import AdvantagesBlock from '@/app/ui/AdvantagesBlock';
import AboutComponent from '@/app/ui/frontpage/AboutComponent';
import { fetchDataCards, getCurrencyRates } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Boundary',
};

export default async function Page() {
  const iconMap = {
    clipboardDocumentCheck: ClipboardDocumentCheckIcon,
    credit: CreditCardIcon,
    clock: ClockIcon,
    checkBadge: CheckBadgeIcon,
    banknotes: BanknotesIcon,
    shieldCheck: ShieldCheckIcon,
    shoppingBag: ShoppingBagIcon,
  };
  const currency = await getCurrencyRates();

  const dataCards = await fetchDataCards();

  return (
    <main>
      <div className="flex justify-center w-auto mb-20">
        <CarouselMain
          slideSize={{ base: '100%', sm: '50%' }}
          images={siteConfig.MainPage.mainImages}
          height={400}
        />
      </div>
      <AboutComponent />
      <AdvantagesBlock />
      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-4">
          Подборка популярных товаров
        </h2>
        <CarouselCard currency={currency} data={dataCards} />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 flex-row justify-start items-start my-10 md:my-20">
        <div className="font-medium w-full md:w-2/3">
          <CustomTabs data={siteConfig.MainPage.tabsData} />
        </div>
        <div className="mt-12 text-lg md:text-xl ml-2 font-medium w-full md:w-1/3">
          <div className="p-4 drop-shadow-sm border-1 rounded-xl">
            <p className="text-center mb-2">Уже нашли подходящий товар ?</p>
            <form className="flex flex-col gap-6">
              <div className="w-full">
                <div>
                  <label
                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Введите email адрес"
                      required
                      autoComplete="username"
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                    htmlFor="link"
                  >
                    Ссылка
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="link"
                      type="text"
                      name="link"
                      placeholder="Введите ссылку"
                      required
                      minLength={6}
                    />
                    <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="flex mb-4 gap-2 items-center justify-center flex-col">
                <Button
                  color="primary"
                  variant="shadow"
                  radius="full"
                  className="text-white shadow-lg w-60"
                >
                  Отправить!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-8">
          Как это работает ?
        </h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {siteConfig.MainPage.howIsWorkData.map((item, index) => {
            const { type, title, description } = item;
            const Icon = iconMap[type as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="hover:drop-shadow-xl border-blue-500 relative px-4 pt-20 pb-4 drop-shadow-sm border-3 rounded-xl w-full xl:w-23percent"
              >
                <div className="absolute w-14 p-2 rounded-full bg-indigo-600 text-center text-white mb-4 top-3 left-3">
                  {Icon ? <Icon /> : null}
                </div>
                <h3 className="font-extrabold text-xl uppercase mb-2">{title}</h3>
                <div>{description}</div>
              </div>
            );
          })}
        </div>
        <NextLink href="../delivery" className="flex">
          <Button
            radius="full"
            className="mx-auto py-6 text-md px-22 md:w-2/6 sm:w-3/6 w-4/6 bg-blue-500 text-white shadow-lg"
          >
            Узнать подробнее
          </Button>
        </NextLink>
      </div>
      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-8">
          Гарантия
        </h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {siteConfig.MainPage.guaranteesData.map((item, index) => {
            const { type, title, description } = item;
            const Icon = iconMap[type as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-32percent"
              >
                <div className="absolute w-14 p-2 text-3xl font-bold rounded-full bg-green-500 text-center text-white mb-4 top-3 left-3">
                  {Icon ? <Icon /> : null}
                </div>
                <h3 className="font-extrabold text-xl uppercase mb-2">{title}</h3>
                <div>{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
