import React from "react";

import {Metadata} from "next";
import NextJsCarousel from "@/app/ui/carousel/carousel";
import CardItem from "@/app/ui/card";

export const metadata: Metadata = {
  title: 'Boundary',
};

export default function Page() {
  const images = ["https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"];

  return (
      <div>
        <div className="flex justify-center w-auto mb-20">
          <NextJsCarousel images={images}/>
        </div>
        <div className="flex justify-center w-auto mb-20">
          <CardItem/>
        </div>
      </div>
  );
}
