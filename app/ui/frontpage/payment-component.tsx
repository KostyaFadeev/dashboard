import React from 'react';

export default function PaymentComponent() {
  return (
    <div className="flex align-center flex-col justify-start items-center w-full px-2 mb-6">
      <h2 className="mb-2">В нашем сервисе доступны разные варианты оплаты:</h2>
      <div className="flex mb-6 items-start items-start justify-center mr-auto">
        <div className="flex justify-center items-center w-10 h-10 mr-4 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-center text-white">
          1
        </div>
        <div className="text-md font-normal leading-6">
          Связаться с нашим менеджером, он подскажет реквезиты и проконсультирует с оплатой.
        </div>
      </div>
      <div className="flex items-start items-start justify-center mr-auto">
        <div className="flex justify-center items-center w-10 h-10 mr-4 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-center text-white">
          2
        </div>
        <div className="text-md font-normal leading-6">
          Добавить заказ в корзину, затем перейти в нее, далее следовать указаниям сервиса. При
          возникновении каких-либо вопросов писать нашему менеджеру в Телеграм.
        </div>
      </div>
    </div>
  );
}
