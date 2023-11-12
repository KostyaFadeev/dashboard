'use client'
import React from 'react';
import {Carousel} from '@mantine/carousel';
import CardItem from '@/app/ui/card';


const CarouselCard = () => {

    return (
        <div>
            <Carousel
                withControls={true}
                withIndicators
                height={450}
                slideSize={{base: '100%', sm: '33.333%'}}
                slideGap={{base: 0, sm: 'md'}}
                loop
                align="start"
            >
                {Array(5)
                    .fill('')
                    .map((i, index) => (
                        <Carousel.Slide key={index}>
                            <div className="p-4">
                                <CardItem/>
                            </div>
                        </Carousel.Slide>
                    ))}
            </Carousel>
        </div>
    );
};

export default CarouselCard;
