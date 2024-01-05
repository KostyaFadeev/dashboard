import React from 'react';
import { Metadata } from 'next';

import Calculator from '@/app/ui/calculator/calculator';
import TariffTable from '@/app/ui/TariffTable';

export const metadata: Metadata = {
  title: 'Рассчитать стоимость',
  description: 'Здесь вы можете рассчитать стоимость своего заказа',
};

export default function CalculatorPage() {
  const dataTariff = [
    {
      type: 'Верхняя одежда',
      price: '1199₽',
      weight: '2.5 кг',
    },
    {
      type: 'Обувь',
      price: '999₽',
      weight: '1.2 кг / 2.5 кг',
    },
    {
      type: 'Толстовка / Худи',
      price: '799₽',
      weight: '0.7 кг',
    },
    {
      type: 'Штаны',
      price: '799₽',
      weight: '0.7 кг',
    },
    {
      type: 'Футбола / Шорты',
      price: '499₽',
      weight: '0.15 кг / 0.3 кг',
    },
    {
      type: 'Нижнее белье / Носки',
      price: '499₽',
      weight: '0.1 кг',
    },
  ];
  const dataTariffStocks = [
    {
      type: 'Обувь + Толстовка',
      price: '1399₽',
      weight: '1.9 кг / 3.2 кг',
    },
    {
      type: 'Толстовка + Штаны',
      price: '1199₽',
      weight: '1.5 кг',
    },
    {
      type: 'Штаны + Футбола',
      price: '999₽',
      weight: '0.9 кг',
    },
    {
      type: 'Футбола + Шорты',
      price: '599₽',
      weight: '0.3 кг / 0.6 кг',
    },
    {
      type: 'Обувь + Носки / Нижнее белье',
      price: '1199₽',
      weight: '1.3 кг / 2.6 кг',
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="flex w-full flex-col items-start justify-center lg:flex-row lg:justify-between mb-10">
        <div className="lg:w-7/12 mb-6 xl:mb-0">
          <div className="flex w-full flex-row items-center justify-center lg:flex-row xl:justify-around mb-20">
            <div className=" mb-6 w-full xl:mb-0">
              <h3 className="text-center text-4xl font-semibold mb-4">Наши тарифы</h3>
              <TariffTable data={dataTariff} />
              <div className="mt-4">
                Для вашего удобства мы создали калкулятор рассчета стоимости заказа с Poizon.
                Стоимость указана примерная, близкая к реальной, для получения окончательной
                стоимости пожалуйста обратитесь к нашему менеджеру.
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-center lg:flex-row xl:justify-around">
            <div className=" mb-6 w-full xl:mb-0">
              <h3 className="text-center text-4xl font-semibold mb-4">Скидки за сборные заказы</h3>
              <TariffTable data={dataTariffStocks} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
