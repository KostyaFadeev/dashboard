'use client';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

import CardItem from '@/app/ui/card-item';
import {fetchDataCards, getCurrency} from '@/app/lib/data';

export default async function CarouselCard() {
  const dataCardList = await fetchDataCards();
  const currency = await getCurrency();

  return (
    <div className="flex justify-center flex-col gap-6">
      <Carousel
        withControls={true}
        withIndicators
        slideSize={{ base: '100%', sm: '33.333%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
      >
        {dataCardList.map((item, index) => {
          const { id, title, description, images, price, weight, variants, tableSize, currentSize } = item;
          return (
            <Carousel.Slide key={index}>
              <div className="p-2">
                <CardItem
                    currentSize={currentSize}
                  currency={currency}
                  id={id}
                  title={title}
                  description={description}
                  images={images}
                  price={price}
                  weight={weight}
                  variants={variants}
                  tableSize={tableSize}
                />
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <NextLink href="../catalog" className="mx-auto">
        <Button
          color="primary"
          variant="shadow"
          radius="full"
          className="text-white shadow-lg w-60"
        >
          Показать еще
        </Button>
      </NextLink>
    </div>
  );
}
