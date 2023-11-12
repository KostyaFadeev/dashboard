'use client'
import React from 'react';
import {Image} from "@nextui-org/react";
import {Carousel} from '@mantine/carousel';

interface CarouselMainProps {
    images: string[];
    height: any;
    slideSize: any;
}


const CarouselMain: React.FC<CarouselMainProps> = ({ images, ...restProps }: CarouselMainProps) => {

    return (
        <Carousel
            withControls={true}
            withIndicators
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
            {...restProps}
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
