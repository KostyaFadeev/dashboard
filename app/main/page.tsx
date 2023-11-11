import React from "react";
import {Image} from "@nextui-org/react";

import {Metadata} from "next";
import NextJsCarousel from "@/app/ui/carousel/carousel";
import {TelegramIcon} from "@/public/icons";
import CardItem from "@/app/ui/card";
import AccordionMain from "@/app/ui/accordion/accordion";

export const metadata: Metadata = {
    title: 'Main',
};

export default function MainPage() {
    const images = ["https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg", "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"];

    const data = [
        {
            Icon: <TelegramIcon/>,
            title: 'Вы делаете заказ на нашем сайте',
            description: 'Обработка заказа до 24 часов',
        },
        {
            Icon: <TelegramIcon/>,
            title: 'Выкуп товара за границей, оформление на международном складе',
            description: '3-5 дней',
        },
        {
            Icon: <TelegramIcon/>,
            title: 'Упаковка и отправка товара на склад в России',
            description: '3-5 дней',
        },
        {
            Icon: <TelegramIcon/>,
            title: 'Доставка по России',
            description: '7-9 дней',
        },
        {
            Icon: <TelegramIcon/>,
            title: 'УРА! Товар у вас дома!',
            description: 'Оставить отзыв о компании и посоветовать близким, а в замен получить скидку на следующий заказ :)',
        },
    ];

    return (
        <div>
            <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between mb-20">
                <Image
                    className="mb-6 xl:mb-0"
                    width={600}
                    height={400}
                    alt="NextUI hero Image with delay"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div className="xl:w-5/12">
                    <h2 className="text-center text-3xl font-semibold mb-2">О нас</h2>
                    <div className="text-lg font-normal">Привет! Мы — Brandly. Мы привозим топовые бренды из-за границы в Россию. Мы гарантируем
                        оригинальность и возвращаем деньги, если товар окажется бракованным. А еще даем бесплатную гарантию.
                        Трансграничная торговля –– это сотни непростых процессов. Мы спрятали их под капот и максимально
                        упростили процесс покупки для вас. Оформляйте заказ, оплачивайте его в рублях, отслеживайте заветную
                        посылку и ждите звонка в дверь.
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between mb-20">
                <div className="mb-10 xl:mb-0 xl:w-5/12">
                    <h2 className="text-center text-3xl font-semibold mb-2">Как это работает ?</h2>
                    <div className="text-lg font-normal">Привет! Мы — Brandly. Мы привозим топовые бренды из-за границы в Россию. Мы гарантируем
                    </div>
                </div>

                <div className="mb-6 xl:mb-0 w-full xl:w-5/12 text-violet-600">
                    <AccordionMain data={data}/>
                </div>
            </div>




            <div className="flex justify-center w-auto mb-20">
                <NextJsCarousel images={images}/>
            </div>



            <div className="flex justify-center w-auto mb-20">
                <CardItem/>
            </div>
        </div>
    );
}
