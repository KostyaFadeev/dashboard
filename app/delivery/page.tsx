import React from 'react';
import { Metadata } from 'next';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import DeliveryAccordion from '@/app/ui/DeliveryAccordion';
import { siteConfig } from '@/app/ui/site';
import AccordionMain from '@/app/ui/accordion/accordion';
import CarouselMain from '@/app/ui/carousel/carousel-main';

export const metadata: Metadata = {
  title: 'Доставка и оплата',
  description: 'Информация о доставке и оплате',
};

export default function DeliveryPage() {
  const accordionData = [
    {
      Icon: <QuestionMarkCircleIcon width={35} />,
      title: 'КАКОЙ КАРТОЙ Я СМОГУ ОПЛАТИТЬ ЗАКАЗ ?',
      description:
        'На нашем сервисе доступна оплата в рублях картами российских банков или через Систему быстрых платежей (СБП) в приложении банка.',
    },
    {
      Icon: <QuestionMarkCircleIcon width={35} />,
      title: 'МОЖНО ЛИ МНЕ ОПЛАТИТЬ ЗАКАЗ ПРИ ПОЛУЧЕНИИ ?',
      description:
        'К сожалению, нет. Заказ можно оплатить только во время оформления на нашем сервисе.',
    },
    {
      Icon: <QuestionMarkCircleIcon width={35} />,
      title: 'ВОЗМОЖНА ЛИ ОПЛАТА ЗАКАЗА ДРУГИМИ СПОСОБАМИ ?',
      description:
        'На нашем сервисе доступна оплата только картами российских банков или через Систему быстрых платежей (СБП) в приложении банка.',
    },
  ];

  return (
    <main className="flex flex-col justify-center items-start">
      <h2 className="text-start text-xl lg:text-3xl font-semibold mb-8">
        {siteConfig.DeliveryPage.title}
      </h2>
      <DeliveryAccordion />
      <h2 className="text-start text-xl lg:text-3xl font-semibold mt-8 mb-8">Вопросы - Ответы</h2>
      <AccordionMain data={accordionData} />
      <div className="flex justify-center w-auto mt-10 mb-20">
        <CarouselMain
          slideSize={{ base: '50%', sm: '25%' }}
          images={siteConfig.DeliveryPage.mainImages}
          height={300}
        />
      </div>
    </main>
  );
}
