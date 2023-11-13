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

export const metadata: Metadata = {
  title: 'Boundary',
};

export default function Page() {
  const howIsWorkData = [
    {
      icon: <ClipboardDocumentCheckIcon width={40} />,
      title: 'ЛЕГКОЕ ОФОРМЛЕНИЕ ЗАКАЗА',
      description:
        'Выбирай в каталоге нужный товар, добавляй его в корзину и переходи к детальному\n' +
        '                            оформлению.',
    },
    {
      icon: <CreditCardIcon width={40} />,
      title: 'ОПЛАТА РОССИЙСКОЙ БАНКОВСКОЙ КАРТОЙ',
      description: 'У нас удобно — оплата в рублях и не нужно лишних манипуляций с деньгами.',
    },
    {
      icon: <ClockIcon width={40} />,
      title: 'ПОДТВЕРЖДЕНИЕ ЗАКАЗА',
      description:
        'После того как заказ будет подтвержден, мы привезем его за 2-4 недели. В случае, каких либо проблем с наличием, мы немедленно известим тебя, предложим актуальную замену или вернем оплату.',
    },
    {
      icon: <CheckBadgeIcon width={40} />,
      title: 'ПОЛУЧЕНИЕ ЗАКАЗА',
      description:
        'Заказ можно получить любым удобным способом, выбор при оформлении – курьерская доставка или пункт выдачи.',
    },
  ];
  const guaranteesData = [
    {
      icon: <BanknotesIcon width={40} />,
      title: 'ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ',
      description: 'Мы гарантируем возврат денежных средств, если товар бракованный.',
    },
    {
      icon: <ShieldCheckIcon width={40} />,
      title: 'ГАРАНТИЯ ОРИГИНАЛЬНОСТИ ПРОДУКЦИИ',
      description:
        'Мы тщательно отобрали партнеров, поэтому готовы подтвердить оригинальность продукции, которую везем.',
    },
    {
      icon: <ShoppingBagIcon width={40} />,
      title: 'ГАРАНТИЯ ОТ МАГАЗИНА',
      description:
        'Мы предоставляем бесплатную гарантию на 3 месяца от Boundary на всю электронику и бытовую технику.',
    },
  ];

  return (
    <div>
      <div className="flex justify-center w-auto mb-20">
        <CarouselMain
          slideSize={{ base: '100%', sm: '50%' }}
          images={siteConfig.mainImages}
          height={400}
        />
      </div>

      <div className="flex flex-wrap flex-row justify-center my-20 md:my-40 gap-4 md:gap-20">
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
          {howIsWorkData.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                key={index}
                className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-23percent"
              >
                <div className="flex justify-center items-center absolute w-14 p-2 text-3xl font-bold rounded-full bg-indigo-600 text-center text-white mb-4 top-3 left-3">
                  {icon}
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
          {guaranteesData.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                key={index}
                className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-32percent"
              >
                <div className="absolute w-14 p-2 text-3xl font-bold rounded-full bg-green-500 text-center text-white mb-4 top-3 left-3">
                  {icon}
                </div>
                <h3 className="font-extrabold text-xl uppercase mb-2">{title}</h3>
                <div>{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
