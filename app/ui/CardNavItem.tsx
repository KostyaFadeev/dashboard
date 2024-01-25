'use server'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from "next/link"
import clsx from "clsx";
import {getItems} from "@/app/lib/cookies";

export const CartNavItem = async () => {
    const products =  await getItems();
    const countProducts = products.length !== 0 ? products.split('|').length : 0;

    return (
        <Link href="/cart" className="relative flex items-center" data-testid="CartNavItem">
            <ShoppingCartIcon color={'rgba(113, 113, 120, 1)'} width={24} height={24} className="h-6 w-6 shrink-0" aria-hidden="true" />
            {countProducts > 0 ? (
                <div
                    className={clsx(
                        "absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white",
                        countProducts > 9 ? "w-[3ch]" : "w-[2ch]",
                    )}
                >
                    {countProducts} <span className="sr-only">item{countProducts > 1 ? "s" : ""} in cart, view bag</span>
                </div>
            ) : (
                <span className="sr-only">0 items in cart</span>
            )}
        </Link>
    );
};
