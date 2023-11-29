'use client';
import React from 'react';
import { Image } from '@nextui-org/react';
import { Carousel } from '@mantine/carousel';
import NextLink from 'next/link';

interface Data {
  src: string;
  alt: string;
  link: string;
}

interface CarouselMainProps {
  images: Array<Data>;

  [key: string]: any;
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
      {images.map((item, index) => {
        const { src, alt, link } = item;
        return (
          <Carousel.Slide key={index}>
            <NextLink className="flex mr-2" href={link}>
              <Image alt={alt} src={src} />
            </NextLink>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default CarouselMain;
