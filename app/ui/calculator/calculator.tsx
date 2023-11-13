'use client';
import React, { useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button, Slider } from '@nextui-org/react';

/**
 * @description Калькулятор подсчета стоимости заказа
 */

export default function Calculator() {
  const [value, setValue] = useState<number>(0);
  const [valueWeight, setWeightValue] = useState<number>(0);
  const course = 13;
  const convertToRub = value * course;
  const commission = 999;
  const shippingCostInterKG = 750;
  const shippingCostInRussiaKG = 700;
  const priceDeliveryToRussia = shippingCostInterKG * valueWeight;
  const priceDeliveryInRussia = shippingCostInRussiaKG * valueWeight;
  const totalPrice = convertToRub + commission + priceDeliveryToRussia + priceDeliveryInRussia;

  return (
    <Card className="p-2 lg:p-4 flex">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mb-6 text-xl">
        <h4 className="font-medium text-large">Калькулятор</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Slider
          onChange={(value) => {
            if (typeof value === 'number') {
              setValue(value);
            }
          }}
          label="Выбери стоимость товара на Poizon"
          step={50}
          maxValue={5000}
          minValue={0}
          defaultValue={0}
          showSteps={false}
          showTooltip={true}
          showOutline={true}
          disableThumbScale={true}
          formatOptions={{ style: 'currency', currency: 'CNY' }}
          tooltipValueFormatOptions={{
            style: 'currency',
            currency: 'CNY',
            maximumFractionDigits: 0,
          }}
          classNames={{
            base: 'w-fully',
            filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
            labelWrapper: 'mb-2',
            label: 'font-medium text-default-700 text-medium',
            value: 'font-medium text-default-500 text-small',
            thumb: [
              'transition-size',
              'bg-gradient-to-r from-secondary-400 to-primary-500',
              'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
              'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
            ],
            step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
          }}
          tooltipProps={{
            offset: 10,
            placement: 'bottom',
            classNames: {
              base: [
                // arrow color
                'before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500',
              ],
              content: [
                'py-2 shadow-xl',
                'text-white bg-gradient-to-r from-secondary-400 to-primary-500',
              ],
            },
          }}
        />

        <Slider
          onChange={(value) => {
            if (typeof value === 'number') {
              setWeightValue(value);
            }
          }}
          label="Укажите примерный вес товара в KG"
          step={0.5}
          maxValue={10}
          minValue={0}
          defaultValue={0}
          showSteps={false}
          showTooltip={true}
          showOutline={true}
          disableThumbScale={true}
          classNames={{
            base: 'w-fully mt-6',
            filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
            labelWrapper: 'mb-2',
            label: 'font-medium text-default-700 text-medium',
            value: 'font-medium text-default-500 text-small',
            thumb: [
              'transition-size',
              'bg-gradient-to-r from-secondary-400 to-primary-500',
              'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
              'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
            ],
            step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
          }}
          tooltipProps={{
            offset: 10,
            placement: 'bottom',
            classNames: {
              base: [
                // arrow color
                'before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500',
              ],
              content: [
                'py-2 shadow-xl',
                'text-white bg-gradient-to-r from-secondary-400 to-primary-500',
              ],
            },
          }}
        />

        <p className="text-default-500 text-lg lg:text-xl mb-2 mt-8">
          Комиссия сервиса: <span className="text-indigo-800">{commission} ₽</span>
        </p>
        <p className="text-default-500 text-lg lg:text-xl mb-2 mt-2">
          Стоимость товара в рублях: <span className="text-indigo-800">{convertToRub} ₽</span>
        </p>
        <p className="text-default-500 text-lg lg:text-xl mb-2 mt-2">
          Стоимость доставки до России:{' '}
          <span className="text-indigo-800">{priceDeliveryToRussia} ₽</span>
        </p>
        <p className="text-default-500 text-lg lg:text-xl mb-4 mt-2">
          Стоимость доставки по России:{' '}
          <span className="text-indigo-800">{priceDeliveryInRussia} ₽</span>
        </p>
        <div className="font-bold drop-shadow-lg text-indigo-500 text-xl mb-12">
          Итого: {totalPrice} ₽
        </div>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Сделать заказ!
        </Button>
      </CardBody>
    </Card>
  );
}
