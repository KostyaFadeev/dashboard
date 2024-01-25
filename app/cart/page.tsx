import {ShoppingBagIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import {getItems} from "@/app/lib/cookies";
import {fetchDataCards, getCurrency} from "@/app/lib/data";
import Cart from "@/app/ui/cart/cart";

export const metadata = {
    title: "Корзина",
};

interface UpdatedItem {
    countOrders: number;
}


export default async function Page() {
    const dataCardList = await fetchDataCards();
    const currency = await getCurrency();
    const tempValue = await getItems();
    const cartDataArray = tempValue.split('|').map((item, index) => {
        let elem = item.split('?');
        return {
            id: parseInt(elem[0]),
            currentSize: elem[1],
        }
    });

    let newArray: UpdatedItem[] = [];
    cartDataArray.map(cartItem => {
        dataCardList.map(item => {
            let countOrders = 0;
            if (item.id === cartItem.id) {
                item.currentSize = cartItem.currentSize
                item.variants[0].values.map(itemSize => {
                    if (itemSize === cartItem.currentSize) {
                        countOrders++;
                    }
                })

                // Изменяем объект item на тип UpdatedItem
                let updatedItem: UpdatedItem = { ...item, countOrders: countOrders };
                newArray.push(updatedItem);
            }
        })
    })


    if (!newArray || newArray.length < 1) {
        return (
            <section className="mx-auto max-w-7xl p-8">
                <div className="mt-8 flex items-center gap-4"><h1 className="text-3xl font-bold text-neutral-900">Ваша корзина пуста</h1>
                    <ShoppingBagIcon width={34} height={34}/></div>
                <p className="my-12 text-sm text-neutral-500">
                    Похоже, вы еще не добавили ни одного товара в корзину.
                </p>
                <NextLink href="../catalog" className="mx-auto">
                    <Button
                        color="primary"
                        variant="shadow"
                        radius="full"
                        className="text-white shadow-lg w-60"
                    >
                        Перейти к покупкам
                    </Button>
                </NextLink>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl p-2">
            <div className="p-4 flex-colum border-2 rounded-lg border-blue-500">
                <div className="flex items-center gap-4 mb-2">
                    <ShieldCheckIcon width={24}/>
                    <div className="text-lg">Не беспокойтесь, мы все проверим!</div>
                </div>
                <div className="text-lg">
                    Boundary проверяет каждый товар на подлинность и на наличие неуточненных дефектов. В случае проблем
                    мы возвращаем покупателю деньги, а продавцу товар.
                </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-neutral-900">Корзина</h1>
            <Cart cartData={newArray} currency={currency}/>
        </section>
    );
}
