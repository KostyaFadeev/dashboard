'use client'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Image} from "@nextui-org/react";

interface NextJsCarouselProps {
    images: string[];
}


const NextJsCarousel: React.FC<NextJsCarouselProps> = ({ images }) => {

    return (
        <Carousel showThumbs={false} swipeable showArrows={false} showStatus={false} autoPlay
                  infiniteLoop>
            {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                    <Image
                        width={600}
                        height={400}
                        alt="NextUI hero Image with delay"
                        src={image}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default NextJsCarousel;
