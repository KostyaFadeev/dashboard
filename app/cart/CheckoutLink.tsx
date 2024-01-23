"use client";

import {Button} from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";
import {deleteAll} from "@/app/lib/cookies";

type Props = {
    disabled?: boolean;
    checkoutId?: string;
    className?: string;
};

export const CheckoutLink = ({disabled}: Props) => {
    const handleClick = () => {
        console.log(1);
        deleteAll();
    }

    return (
        <NextLink
			data-testid="CheckoutLink"
			// onClick={(e) => disabled && e.preventDefault()}
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
