"use client";

import {Button} from "@nextui-org/react";
import React from "react";
import {deleteAll} from "@/app/lib/cookies";
import NextLink from "next/link";


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
        <NextLink
			data-testid="CheckoutLink"
			onClick={(e) => disabled && e.preventDefault()}
			aria-disabled={disabled}
			href={`/checkout`}
		>
            <Button
                onClick={handleClick}
                radius="sm"
                className="mt-auto h-12 w-80 bg-green-500 text-xl text-white shadow-lg"
            >
                Подтвердить заказ!
            </Button>
        </NextLink>
    );
};
