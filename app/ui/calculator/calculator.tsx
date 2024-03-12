'use client';
import React, { useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button, Chip, Slider } from '@nextui-org/react';
import { boundaryStore } from '@/app/stores/BoundaryStore';

/**
 * @description Калькулятор подсчета стоимости заказа
 */

export default function Calculator() {
  const { course } = boundaryStore;
  const [value, setValue] = useState<number>(0);
  const [valueWeight, setWeightValue] = useState<number>(0);
  const convertToRub = parseInt(String(value * course[0]));
  const commission = 999;
  const shippingCostInterKG = 750;
  const shippingCostInRussiaKG = 700;
  const priceDeliveryToRussia = shippingCostInterKG * valueWeight;
  const priceDeliveryInRussia = shippingCostInRussiaKG * valueWeight;
  const totalPrice = parseInt(
    String(convertToRub + commission + priceDeliveryToRussia + priceDeliveryInRussia)
  );

  return (
    <Card className="p-2 lg:p-4 flex">
      <CardHeader className="pb-0 pt-2 px-4 flex flex-row gap-4 justify-center items-center mb-2 text-xl">
        <h4 className="font-medium text-large">Калькулятор</h4>
        <Chip color="primary" variant="bordered">
          <p>Курс {course[0]?.toFixed(2)}</p>
        </Chip>
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
        {/*<div className="flex flex-col gap-6">*/}
        {/*<div className="w-full">*/}
        {/*  <div>*/}
        {/*    <label className="mb-3 mt-2 block text-sm font-medium text-gray-900" htmlFor="text">*/}
        {/*      Город доставки*/}
        {/*    </label>*/}
        {/*    <div className="relative">*/}
        {/*      <input*/}
        {/*        value={inputValue}*/}
        {/*        onChange={handleInputChange}*/}
        {/*        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"*/}
        {/*        id="text"*/}
        {/*        type="text"*/}
        {/*        name="text"*/}
        {/*        placeholder="Введите название вашего города"*/}
        {/*      />*/}
        {/*      <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="flex mb-4 gap-2 items-start justify-center flex-col">*/}
        {/*  <Button*/}
        {/*    onClick={handleClickButton}*/}
        {/*    color="primary"*/}
        {/*    variant="shadow"*/}
        {/*    radius="full"*/}
        {/*    className="bg-green-500 text-white shadow-lg w-60"*/}
        {/*  >*/}
        {/*    Рассчитать*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*</div>*/}

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
        <div className="font-semibold drop-shadow-lg text-blue-500 text-xl mb-12">
          Итого: {totalPrice} ₽
        </div>
        <Button radius="full" className="bg-blue-500 text-white shadow-lg">
          Сделать заказ!
        </Button>
      </CardBody>
    </Card>
  );
}
