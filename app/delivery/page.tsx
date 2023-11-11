import React from "react";

import {Metadata} from "next";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import CustomTabs from "@/app/ui/custom-tabs";

export const metadata: Metadata = {
    title: 'Доставка и оплата',
    description: 'Информация о доставке и оплате'
};

const data = [
    {
        id: "delivery",
        label: "Доставка",
        content: "Товары Brandly доставляются из-за рубежа с нашего склада и со складов наших партнеров. Мы стараемся максимально сократить время доставки товаров. Обычно срок составляет 2-4 недели и будет указан в карточке товара.\n" +
            "\n" +
            "Вы сможете отслеживать передвижение вашего заказа в личном кабинете.\n" +
            "\n" +
            "Так как все посылки доставляются из-за рубежа, они считаются международными отправлениями и проходят таможенное оформление согласно Таможенному Кодексу, вне зависимости от стоимости и веса, в соответствии с приказом ФТС от 05.07.2018 №1060.\n" +
            "\n"},
    {
        id: "Payment",
        label: "Оплата",
        content: "Способы оплаты:\n" +
            "\n" +
            "Мы принимаем оплату онлайн на сайте любой картой российских банков или через Систему быстрых платежей (СБП) в приложении банка.\n" +
            "\n" +
            "Порядок оплаты:\n" +
            "\n" +
            "Оплата заказа происходит на последнем этапе его оформления. Сразу после получения денежных средств мы резервируем выбранный вами товар у поставщика. До этого момента цена и наличие вещей могут измениться.\n" +
            "\n" +
            "Что входит в итоговую стоимость заказа:\n" +
            "\n" +
            "Итоговая стоимость заказа состоит из цены товара, доставки и таможенной пошлины. Таможенная пошлина будет расчитана только в тех случаях, когда сумма ваших покупок более 1000 евро (по курсу ЦБ) и/или весом более 31 кг."  },
    {
        id: "warranty",
        label: "Гарантия",
        content: "Гарантия на товар:\n" +
            "\n" +
            "Мы предоставляем гарантию на три месяца с момента получения посылки на товары из категорий «Электроника» и «Бытовая техника». В случае, если в течение этого времени вы обнаружили неисправность, вам необходимо связаться с нами в Telegram или по электронной почте и выслать фото/видео и описание брака. Мы заберем товар и сдадим в наш сервисный центр для дальнейшей проверки качества:\n" +
            "\n" +
            "Если брак подтверждается и подлежит ремонту, то мы устраняем его и возвращаем вам устройство назад;\n" +
            "Если же сервисный центр сообщает о невозможности починки, то мы возвращаем вам денежные средства и забираем бракованное устройство.\n" +
            "Важно! Диагностика техники проводится исключительно в нашем авторизованном сервисном центре. В случае, если ремонт или проверка качества были проведены в стороннем сервисном центре, мы не сможем компенсировать вам денежные средства.\n" +
            "\n" +
            "Гарантия не распространяется на категории «Игрушки и игры», «Витамины и БАДы», «Одежда и обувь»."}
]


export default function DeliveryPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-xl lg:text-3xl font-semibold mb-10">Условия доставки и оплаты</h2>
            <CustomTabs data={data}/>
        </div>
    );
}
