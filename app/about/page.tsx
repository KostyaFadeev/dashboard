import React from "react";

import {Metadata} from "next";
import {Image} from "@nextui-org/react";
import AccordionMain from "@/app/ui/accordion/accordion";
import {TelegramIcon} from "@/public/icons";
import PersonCard from "@/app/ui/person-card";

export const metadata: Metadata = {
    title: 'About',
    description: 'Page about company Boundary'
};

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

const persons = [
    {
        img: '',
        name: "Константин Фадеев",
        description: "Тут будет краткая информация о сотруднике",
        link: "https://t.me/kostya_fadeev"
    },
    {
        img: '',
        name: "Алексеева Вероника",
        description: "Тут будет краткая информация о сотруднике",
        link: "https://t.me/nikitosa22"
    },
    {
        img: '',
        name: "Ланцов Егор",
        description: "Тут будет краткая информация о сотруднике",
        link: "https://t.me/mortymo"
    }
]

export default function AboutPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between mb-16">
                <div className="xl:w-5/12 mb-6 xl:mb-0">
                    <h2 className="text-center text-4xl font-semibold mb-2">О нас</h2>
                    <div className="text-lg font-normal">
                        Привет! Мы - <span className="text-xl font-bold text-indigo-800">Boundary.</span> Мы занимаемся
                        поставкой в Россию лучших брендов со всего мира. Мы
                        гарантируем, что все продукты являются подлинными, и если товар, по каким-либо причинам окажется
                        некачественным, мы вернем ваши деньги. Кроме того, мы предоставляем бесплатную гарантию. Мы
                        осуществляем трансграничную торговлю, которая включает в себя множество сложных процессов.
                        Однако мы взяли на себя эту сложную работу, чтобы сделать процесс покупки для вас максимально
                        простым. Вы можете сделать заказ, оплатить его в рублях, отслеживать посылку и ждать доставки
                        прямо к вам домой.
                    </div>
                </div>
                <Image
                    width={600}
                    height={400}
                    alt="NextUI hero Image with delay"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>
            <h2 className="text-center text-3xl font-semibold mb-2">Часто задаваемые вопросы</h2>
            <div className="mb-10">
                <h3 className="px-2 text-2xl font-semibold text-indigo-600">Доставка</h3>
                <AccordionMain data={data}/>
            </div>
            <div className="mb-10">
                <h3 className="px-2 text-2xl font-semibold text-yellow-400">Оплата</h3>
                <AccordionMain data={data}/>
            </div>
            <div className="mb-10">
                <h3 className="px-2 text-2xl font-semibold text-green-500">Обмен и возврат</h3>
                <AccordionMain data={data}/>
            </div>
            <div className="mb-10">
                <h3 className="px-2 text-2xl font-semibold text-amber-600">Гарантия</h3>
                <AccordionMain data={data}/>
            </div>
            <div className="mb-10">
                <h3 className="px-2 text-2xl font-semibold text-indigo-800 mb-6 text-center">Остались вопросы ? Спроси любого из наших менеджеров!
                </h3>
                <div className="flex justify-center w-auto gap-6 flex-wrap">
                    {persons.map((item, index) => {
                        const {name, description, link} = item;
                        return (
                            <PersonCard key={index} name={name} description={description} link={link}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}