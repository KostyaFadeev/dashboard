'use client'
import React from 'react';
import {Image} from "@nextui-org/react";
import {Carousel} from '@mantine/carousel';

interface CarouselMainProps {
    images: string[];
}


const CarouselMain: React.FC<CarouselMainProps> = ({ images }: CarouselMainProps) => {

    return (
        <Carousel
            withControls={true}
            withIndicators
            height={265}
            slideSize={{ base: '100%', sm: '33.333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
        >
            {images.map((src, index) => (
                <Carousel.Slide key={index}>
                    <div className="mr-2">
                        <Image
                            alt="NextUI hero Image"
                            src={src}
                        />
                    </div>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};

export default CarouselMain;
