import React from 'react';
import { Metadata } from 'next';

import NextLink from 'next/link';
import { Button, Image } from '@nextui-org/react';
import { siteConfig } from '@/app/ui/site';
import PersonCard from '@/app/ui/person-card';

export const metadata: Metadata = {
  title: 'Как сделать заказ?',
  description: 'Информация о заказе',
};

export default function InfoPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-xl lg:text-3xl font-bold mb-10">Как сделать заказ ?</h2>
      <div className="flex flex-wrap w-full flex-col justify-center mb-20">
        <h3 className="text-start text-xl font-semibold lg:text-2xl mb-6 text-indigo-500">
          КАК ПОЛЬЗОВАТЬСЯ POIZON?
        </h3>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div className="lg:w-6/12 mb-6 xl:mb-0 text-lg font-normal">
            <p className="mb-2">
              <span className="text-sky-500 font-bold">Poizon</span> — это китайская торговая
              площадка, специализирующаяся на продаже оригинальных кроссовок, одежды, коллекционных
              вещей и аксессуаров. Китайский маркетплейс схож с известными Wildberries или OZON, но
              главное различие между Poizon и другими в том, что каждый товар сначала отправляется
              на платформу для идентификации и проверки на оригинальность.
            </p>
            <p>
              <span className="text-sky-500 font-bold">Poizon</span> - доступен только на китайском
              языке, но у нас в телеграм-канале вы найдете все инструкции - о том как найти нужный
              товар, скопировать ссылку, выбрать правильный размер, отфильтровать по цене и бренду.
              Инструкции находятся в закрепленном посте канала.
            </p>
          </div>
          <div className="text-4xl font-black text-sky-500">
            <span className="text-7xl">300 + </span>
            <br />
            известных мировых
            <br />
            модных брендов
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center gap-10 md:flex-row md:justify-start mb-16">
        <Image
          width={450}
          height={450}
          alt="NextUI hero Image with delay"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="md:w-5/12 mb-6 xl:mb-0">
          <h2 className="text-start text-2xl font-semibold mb-2 text-indigo-800">
            1. СКАЧАЙТЕ ПРИЛОЖЕНИЕ
          </h2>
          <div className="text-lg font-normal mb-4">
            iOS: Официальное приложение POIZON в App Store - введите в поиске dewu
            <NextLink
              className="block font-semibold text-indigo-800 hover:text-orange-500"
              href={'https://apps.apple.com/ru/app/poizon-authentic-fashion/id150991597'}
            >
              Скачать тут
            </NextLink>
          </div>
          <div className="text-lg font-normal">
            Android: Для установки официального приложения POIZON нужно специальное приложение в
            виде сайта-каталога POIZON APP.
            <NextLink
              className="block font-semibold text-indigo-800 hover:text-orange-500"
              href={'https://www.anxinapk.com/rj/12201303.html'}
            >
              Скачать тут
            </NextLink>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-center gap-10 md:flex-row md:justify-start mb-16">
        <Image
          width={450}
          height={450}
          alt="NextUI hero Image with delay"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="md:w-5/12 mb-6 xl:mb-0">
          <h2 className="text-start text-2xl font-semibold mb-2 text-indigo-800">
            2. ЗАРЕГИСТРИРУЙТЕСЬ
          </h2>
          <div className="text-lg font-normal mb-4">
            Регистрируемся. Для этого указываем номер телефона, на который затем приходит код
            подтверждения (4 цифры). Вводим его в соответствующее поле, придумываем пароль – и
            завершаем регистрацию.
            <br /> Если планируется работа с посредником, например, с нашей компанией,
            регистрироваться не обязательно. Достаточно найти в каталоге понравившийся товар и
            отправить ссылку на него нашему менеджеру.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-center gap-10 md:flex-row md:justify-start mb-16">
        <Image
          width={450}
          height={450}
          alt="NextUI hero Image with delay"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="md:w-5/12 mb-6 xl:mb-0">
          <h2 className="text-start text-2xl font-semibold mb-2 text-indigo-800 uppercase">
            3. Ищем товары, о которых давно мечтали.
          </h2>
          <div className="text-lg font-normal mb-4">
            Делать это можно через поиск (в верхнем правом углу значок лупы). К сожалению,
            приложение не русифицировано, однако названия брендов приводятся на английском, поэтому
            разобраться будет несложно.
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap flex-col items-center justify-center gap-10 md:flex-row md:justify-start mb-16">
        <Image
          width={450}
          height={450}
          alt="NextUI hero Image with delay"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="md:w-5/12 mb-6 xl:mb-0">
          <h2 className="text-start text-2xl font-semibold mb-2 text-indigo-800 uppercase">
            4. Заказываем.
          </h2>
          <div className="text-lg font-normal mb-4">
            Нужно скопировать ссылку на товар и отправить его нашему менеджеру.
          </div>
          <Button
            radius="full"
            className="text-xl px-20 w-2/6 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
          >
            Сделать заказ!
          </Button>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="px-2 text-2xl font-semibold text-indigo-800 mb-6 text-center">
          Остались вопросы ? Спроси любого из наших менеджеров!
        </h3>
        <div className="flex justify-center w-auto gap-6 flex-wrap">
          {siteConfig.personsData.map((item, index) => {
            const { name, description, link } = item;
            return <PersonCard key={index} name={name} description={description} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}
