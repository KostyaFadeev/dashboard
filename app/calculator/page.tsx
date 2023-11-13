import React from 'react';
import { Metadata } from 'next';

import Calculator from '@/app/ui/calculator/calculator';
import { siteConfig } from '@/app/ui/site';

export const metadata: Metadata = {
  title: 'Рассчитать стоимость',
  description: 'Здесь вы можете рассчитать стоимость своего заказа',
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-xl lg:text-3xl font-semibold mb-10">
        {siteConfig.CalculatorPage.title}
      </h2>
      <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-around mb-16">
        <div className="xl:w-5/12 mb-6 xl:mb-0">
          <h3 className="text-center text-4xl font-semibold mb-4">
            {siteConfig.CalculatorPage.subtitle}
          </h3>
          <div className="text-lg font-normal">{siteConfig.CalculatorPage.description}</div>
        </div>
        <div className="w-full lg:w-5/12">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
