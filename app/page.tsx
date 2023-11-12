import React from 'react';

import {Metadata} from 'next';
import CarouselMain from '@/app/ui/carousel/carousel';
import CarouselCard from '@/app/ui/CarouselCard';
import {Button} from '@nextui-org/react';

export const metadata: Metadata = {
    title: 'Boundary',
};

export default function Page() {

    const images = ['https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg', 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg', 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg', 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'];
    const data = [
        {
            number: 1,
            title: 'ЛЕГКОЕ ОФОРМЛЕНИЕ ЗАКАЗА',
            description: 'Выбирай в каталоге нужный товар, добавляй его в корзину и переходи к детальному\n' +
                '                            оформлению.'
        },
        {
            number: 2,
            title: 'ОПЛАТА РОССИЙСКОЙ БАНКОВСКОЙ КАРТОЙ',
            description: 'У нас удобно — оплата в рублях и не нужно лишних манипуляций с деньгами.'
        },
        {
            number: 3,
            title: 'ПОДТВЕРЖДЕНИЕ ЗАКАЗА',
            description: 'После того как заказ будет подтвержден, мы привезем его за 2-4 недели. В случае, каких либо проблем с наличием, мы немедленно известим тебя, предложим актуальную замену или вернем оплату.'
        },
        {
            number: 4,
            title: 'ПОЛУЧЕНИЕ ЗАКАЗА',
            description: 'Заказ можно получить любым удобным способом, выбор при оформлении – курьерская доставка или пункт выдачи.',
        },
    ];
    const data2 = [
        {
            number: 1,
            title: 'ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ',
            description: 'Мы гарантируем возврат денежных средств, если товар бракованный.'
        },
        {
            number: 2,
            title: 'ГАРАНТИЯ ОРИГИНАЛЬНОСТИ ПРОДУКЦИИ',
            description: 'Мы тщательно отобрали партнеров, поэтому готовы подтвердить оригинальность продукции, которую везем.'
        },
        {
            number: 3,
            title: 'ГАРАНТИЯ ОТ МАГАЗИНА',
            description: 'Мы предоставляем бесплатную гарантию на 3 месяца от Brandly на всю электронику и бытовую технику.'
        },
    ];

    return (
        <div>
            <div className="flex justify-center w-auto mb-20">
                <CarouselMain
                    slideSize={{base: '100%', sm: '50%'}}
                    images={images}
                    height={400}
                />
            </div>
            <div className="flex flex-col justify-center w-auto mb-20">
                <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-4">Подборка популярных
                    товаров</h2>
                <CarouselCard/>
            </div>

            <div className="flex flex-col justify-center w-auto mb-20">
                <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-8">Гарантия</h2>
                <div className="flex flex-wrap gap-4 mb-4">
                    {data2.map((item, index) => {
                        const {number, title, description} = item;
                        return (
                            <div key={index}
                                 className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-32percent">
                                <div
                                    className="absolute w-14 p-2 text-3xl font-bold rounded-full bg-green-500 text-center text-white mb-4 top-3 left-3">{number}
                                </div>
                                <h3 className="font-extrabold text-xl uppercase mb-2">{title}</h3>
                                <div>
                                    {description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="flex flex-col justify-center w-auto mb-20">
                <h2 className="text-center text-2xl font-bold lg:text-5xl lg:font-extrabold mb-8">Как это работает
                    ?</h2>
                <div className="flex flex-wrap gap-4 mb-4">
                    {data.map((item, index) => {
                        const {number, title, description} = item;
                        return (
                            <div key={index}
                                 className="relative px-4 pt-20 pb-4 drop-shadow-sm border-1 rounded-lg w-full xl:w-23percent">
                                <div
                                    className="absolute w-14 p-2 text-3xl font-bold rounded-full bg-indigo-600 text-center text-white mb-4 top-3 left-3">{number}
                                </div>
                                <h3 className="font-extrabold text-xl uppercase mb-2">{title}</h3>
                                <div>
                                    {description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Button radius="full"
                        className="mx-auto px-20 w-2/6 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
                    Сделать заказ
                </Button>
            </div>
        </div>
    );
}
