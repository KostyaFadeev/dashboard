import {
  ArrowTrendingDownIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

const AdvantagesBlock = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-start items-stretch w-auto gap-4 mb-4">
        <div className="p-4 w-full lg:w-1/3 border-4 border-sky-500 rounded-lg">
          <div className="flex items-center justify-start">
            <div className="flex w-14 h-14 mr-4 p-2 rounded-full bg-blue-500 text-center text-white">
              <BanknotesIcon />
            </div>
            <div className="text-2xl uppercase font-bold leading-6">Удобная оплата</div>
          </div>
          <div className="mt-2">
            Мы принимаем оплату в рублях и конвертируем их в валюту страны экспорта.
          </div>
        </div>
        <div className="p-4  w-full lg:w-1/3 border-4 border-green-500 rounded-lg">
          <div className="flex items-center justify-start">
            <div className="flex w-14 h-14 mr-4 p-2 rounded-full bg-green-500 text-center text-white">
              <ArrowTrendingDownIcon />
            </div>
            <div className="text-2xl uppercase font-bold leading-6">Низкие цены</div>
          </div>
          <div className="mt-2">
            Заказывать товары за границей, дешевле, чем покупать на локальном рынке.
          </div>
        </div>
        <div className="p-4  w-full lg:w-1/3 border-4 border-violet-700 rounded-lg">
          <div className="flex items-center justify-start">
            <div className="flex w-14 h-14 mr-4 p-2 rounded-full bg-violet-700 text-center text-white">
              <CalendarDaysIcon />
            </div>
            <div className="text-2xl uppercase font-bold leading-6">3-4 недели</div>
          </div>
          <div className="mt-2">Ориентировочные сроки доставки.</div>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-start items-stretch w-auto gap-4 mb-20">
        <div className="p-4 w-full lg:w-1/2 border-4 border-orange-500 rounded-lg">
          <div className="flex items-center justify-start">
            <div className="flex w-14 h-14 mr-4 p-2 rounded-full bg-orange-500 text-center text-white">
              <HeartIcon />
            </div>
            <div className="text-2xl uppercase font-bold leading-6">Легкое оформление заказа</div>
          </div>
          <div className="mt-2">
            Наши менеджеры всегда на связи, готовы ответить на все вопросы, найти самый подходящий
            товар, помочь с выбором размера, оформить заказ и рассчитать стоимость.
          </div>
        </div>
        <div className="p-4  w-full lg:w-1/2 border-4 border-green-500 rounded-lg">
          <div className="flex items-center justify-start">
            <div className="flex w-14 h-14 mr-4 p-2 rounded-full bg-green-500 text-center text-white">
              <CheckCircleIcon />
            </div>
            <div className="text-2xl uppercase font-bold leading-6">ОРИГИНАЛЬНЫЕ БРЕНДЫ</div>
          </div>
          <div className="mt-2">
            Мы привозим только оригинальные бренды от проверенных поставщиков
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvantagesBlock;
