'use client';
import React from 'react';
import { Carousel } from '@mantine/carousel';

import CardItem from '@/app/ui/card-item';
import { fetchDataCards } from '@/app/lib/data';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export default async function CarouselCard() {
  const dataCardList = await fetchDataCards();

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
          const { id, title, description, images, price, variants } = item;
          return (
            <Carousel.Slide key={index}>
              <div className="p-2">
                <CardItem
                  id={id}
                  title={title}
                  description={description}
                  images={images}
                  price={price}
                  variants={variants}
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
