'use client';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Button } from '@nextui-org/react';
import Link from "next/link";

import CardItem from '@/app/ui/card-item';

const CarouselCard = ({currency, data}) => {

    return (
        <div className="flex justify-center flex-col gap-6">
            <Carousel
                withControls
                withIndicators
                slideSize={{ base: '100%', sm: '33.333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"
            >
                {data.map((item, index) => {
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
            <Link href="../catalog">
                <Button color="primary" variant="shadow" radius="full" className="text-white shadow-lg w-60">
                    Показать еще
                </Button>
            </Link>
        </div>
    );
};

export default CarouselCard;
