import React from 'react';
import { Metadata } from 'next';
import NextLink from 'next/link';
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

  return (
    <main>
      <div className="flex justify-center w-auto mb-20">
        <CarouselMain
          slideSize={{ base: '100%', sm: '50%' }}
          images={siteConfig.MainPage.mainImages}
          height={400}
        />
      </div>

      <div className="flex flex-wrap xl:flex-nowrap gap-4 xl:gap-0 flex-row justify-start items-start my-10 md:my-20">
        <div className="text-xl ml-2 font-medium w-full xl:w-1/2 text-xl">
          <span className="text-2xl font-bold text-indigo-800 uppercase items-center">
            Boundary
          </span>
          <span className="mx-4">-</span> это сервис доставки товаров от известных зарубежных
          брендов по честным и прозрачным ценам.
          <p>
            Наша задача - упростить и улучшить вашу жизнь, ведь всю основную волокиту с оформлением,
            оплатой, отгрузкой и доставкой товаров мы берем на себя!
          </p>
        </div>

        <div className="font-medium w-full xl:w-1/2">
          <CustomTabs data={siteConfig.MainPage.tabsData} />
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center my-10 md:my-20 gap-4 md:gap-20">
        <div className="text-center flex items-center text-xl font-bold lg:text-2xl">
          КАК ПОЛЬЗОВАТЬСЯ POIZON?
        </div>
        <NextLink
            href={'/info'}
            className="flex justify-center items-center py-2 rounded-xl text-xl px-20 w-1/6 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
        >
          Узнать!
        </NextLink>
      </div>

      <div className="flex flex-col justify-center w-auto mb-20">
        <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-4">
          Подборка популярных товаров
        </h2>
        <CarouselCard />
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
                className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-23percent"
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
        <Button
          radius="full"
          className="mx-auto py-6 text-xl px-22 md:w-2/6 sm:w-3/6 w-4/6 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
        >
          Сделать заказ
        </Button>
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
