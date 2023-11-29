import React from 'react';
import NextLink from 'next/link';

export default function DeliveryComponent() {
  return (
    <div className="flex align-center flex-col justify-start items-center w-full px-2">
      <h2 className="mb-2">Есть 2 способа сделать заказ:</h2>
      <div className="flex mb-6 items-start align-center justify-center mr-auto">
        <div className="flex mr-4 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-center text-white">
          1
        </div>
        <div className="text-md font-normal leading-6">
          Выбери товар в каталоге нашего сервиса и отправь его одному из менеджеров в Telegram. Наши
          менеджеры ответят на все вопросы и помогут с оформлением заказа
        </div>
      </div>
      <div className="flex items-start align-center justify-center mr-auto">
        <div className="flex mr-4 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-center text-white">
          2
        </div>
        <div className="text-md font-normal leading-6">
          Вариант для тех, кто хочет заказать другой товар с Poizon
          <ul>
            <li>1. Скачай и зарегестрируйся в приложении</li>
            <li>2. Найди подходящий товар и сохрани на него ссылку.</li>
            <li>3. Отправь сслылку нашему менеджеру на сайте или в Telegram</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center my-4 gap-2 md:gap-4">
        <div className="text-center flex items-center text-md font-bold">
          КАК ПОЛЬЗОВАТЬСЯ POIZON?
        </div>
        <NextLink
          href={'/info'}
          className="flex justify-center items-center py-2 rounded-2xl text-sm font-medium px-20 w-1/6 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
        >
          Узнать!
        </NextLink>
      </div>
    </div>
  );
}
