"use client";

import {Button} from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";

type Props = {
    disabled?: boolean;
    checkoutId?: string;
    className?: string;
};

export const CheckoutLink = ({disabled, checkoutId, className = ""}: Props) => {
    return (
        <NextLink
			data-testid="CheckoutLink"
			onClick={(e) => disabled && e.preventDefault()}
			aria-disabled={disabled}
			// href={`/checkout?checkout=${checkoutId}`}
			href={`/checkout`}
		>
            <Button
                radius="sm"
                className="mt-auto h-12 w-80 bg-green-500 text-xl text-white shadow-lg"
            >
                Оплатить
            </Button>
        </NextLink>
    );
};
