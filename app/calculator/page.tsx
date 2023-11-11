import React from "react";

import {Metadata} from "next";
import Calculator from "@/app/ui/calculator/calculator";
import {Image} from "@nextui-org/react";

export const metadata: Metadata = {
    title: 'Calculator',
    description: 'Calculator pricing'
};

export default function CalculatorPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-xl lg:text-3xl font-semibold mb-10">Здесь вы можете рассчитать стоимость своего
                заказа</h2>
            <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-around mb-16">
                <div className="xl:w-5/12 mb-6 xl:mb-0">
                    <h2 className="text-center text-4xl font-semibold mb-2">О наших тарифах</h2>
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
                <div className="w-full lg:w-5/12">
                    <Calculator/>
                </div>
            </div>
        </div>
    );
}
