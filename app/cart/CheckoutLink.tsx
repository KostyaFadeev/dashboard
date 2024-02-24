"use client";

import React from "react";
import {deleteAll} from "@/app/lib/cookies";
import NextLink from "next/link";
import {ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";


type Props = {
    disabled?: boolean;
    checkoutId?: string;
    className?: string;
};

export const CheckoutLink = ({disabled}: Props) => {
    //
    // const id = '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66';
    // const status = 'pending';
    // const price = 6600;
    // const date = '2024-01-23';

    const handleClick = () => {
        // console.log(1111111111111);
        // router.push('/checkout');
        // createInvoiceFromCard(id, price, status, date);
        deleteAll();
    }

    return (
        <div className="p-4 flex-colum border-2 rounded-lg border-blue-500">
            <div className="flex items-center gap-4 mb-2">
                <ChatBubbleLeftRightIcon width={24}/>
                <div className="text-lg">Дорогой клиент!</div>
            </div>
            <div className="text-lg">
                Этот раздел пока в разработке 👨‍💻 Совсем скоро вы сможете приобрести товары через наш официальный
                сайт.
                Сейчас заказать можно тут, через менеджеров <NextLink
                href={'https://t.me/Boundary_delivery'}>https://t.me/Boundary_delivery</NextLink>.
                Спасибо, что вы уже с нами 😇
            </div>
        </div>
        // <NextLink
        // 	data-testid="CheckoutLink"
        // 	onClick={(e) => disabled && e.preventDefault()}
        // 	aria-disabled={disabled}
        // 	href={`/checkout`}
        // >
        //     <Button
        //         onClick={handleClick}
        //         radius="sm"
        //         className="mt-auto h-12 w-80 bg-green-500 text-xl text-white shadow-lg"
        //     >
        //         Подтвердить заказ!
        //     </Button>
        // </NextLink>
    );
};
