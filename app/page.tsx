import React from "react";

import {Metadata} from "next";
import CarouselMain from "@/app/ui/carousel/carousel";
import CarouselCard from '@/app/ui/CarouselCard';

export const metadata: Metadata = {
  title: 'Boundary',
};

export default function Page() {
  const images = ["https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"];

  return (
      <div>
        <div className="flex justify-center w-auto mb-20">
          <CarouselMain images={images}/>
        </div>
        <div className="flex flex-col justify-center w-auto mb-20">
            <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-4">Подборка популярных товаров</h2>
            <CarouselCard />
        </div>
      </div>
  );
}
