import {cookies} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {ShoppingBagIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import {CheckoutLink} from "@/app/cart/CheckoutLink";
import {SearchIcon} from "@/public/icons";
// import { CheckoutLink } from "./CheckoutLink";
// import { DeleteLineButton } from "./DeleteLineButton";
// import * as Checkout from "@/lib/checkout";

export const metadata = {
    title: "Shopping Cart · Saleor Storefront example",
};

export default async function Page() {
    const checkoutId = cookies().get("checkoutId")?.value || "";

    //Тестовые данные товаров в корзине
    const checkout = {
        id: 'Q2hlY2tvdXQ6NjcxYTc1MmMtZDdmMi00Y2VlLTkwZjMtOWE2ZTFkZWVlN2Fm',
        email: null,
        lines: [
            {
                id: 'Q2hlY2tvdXRMaW5lOmYwOWI4OWMzLWZiMDktNDBhZi05ZWVmLTdkZDUzYmUwZTAyZQ==',
                quantity: 1,
                totalPrice: {gross: {amount: 20, currency: 'USD'}},
                variant: {
                    product: {
                        id: 'UHJvZHVjdDoxMzQ=',
                        name: 'Nike Air Max',
                        slug: 'ascii-tee',
                        thumbnail: {
                            url: '/Nike Air Max Verona Sail_1.jpg',
                            alt: ''
                        },
                        category: {name: 'Кроссовки'}
                    },
                    pricing: {price: {gross: {amount: 20, currency: 'USD'}}},
                    name: '44',
                    id: 'UHJvZHVjdFZhcmlhbnQ6MzQ5'
                }
            },
            {
                id: 'Q2hlY2tvdXRMaW5lOmYwOWI4OWMzLWZiMDktNDBhZi05ZWVmLTdkZDUzYmUwZTAyZQ==',
                quantity: 1,
                totalPrice: {gross: {amount: 20, currency: 'USD'}},
                variant: {
                    product: {
                        id: 'UHJvZHVjdDoxMzQ=',
                        name: 'Nike Air Max',
                        slug: 'ascii-tee',
                        thumbnail: {
                            url: '/Nike Air Max Verona Sail_1.jpg',
                            alt: ''
                        },
                        category: {name: 'Кроссовки'}
                    },
                    pricing: {price: {gross: {amount: 20, currency: 'USD'}}},
                    name: '44',
                    id: 'UHJvZHVjdFZhcmlhbnQ6MzQ5'
                }
            }
        ],
        totalPrice: {gross: {amount: 40, currency: 'USD'}}
    };

    // if (!checkout || checkout.lines.length < 1) {
    //     return (
    //         <section className="mx-auto max-w-7xl p-8">
    //             <div className="mt-8 flex items-center gap-4"><h1 className="text-3xl font-bold text-neutral-900">Ваша корзина пуста</h1>
    //                 <ShoppingBagIcon width={34} height={34}/></div>
    //             <p className="my-12 text-sm text-neutral-500">
    //                 Похоже, вы еще не добавили ни одного товара в корзину.
    //             </p>
    //             <NextLink href="../catalog" className="mx-auto">
    //                 <Button
    //                     color="primary"
    //                     variant="shadow"
    //                     radius="full"
    //                     className="text-white shadow-lg w-60"
    //                 >
    //                     Перейти к покупкам
    //                 </Button>
    //             </NextLink>
    //         </section>
    //     );
    // }

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
            <form className="mt-12">
                <ul
                    data-testid="CartProductList"
                    role="list"
                    className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
                >
                    {checkout?.lines.map((item) => (
                        <li key={item.id} className="flex py-4">
                            <div
                                className="aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                                {item.variant?.product?.thumbnail?.url && (
                                    <Image
                                        src={item.variant.product.thumbnail.url}
                                        alt={item.variant.product.thumbnail.alt ?? ""}
                                        width={200}
                                        height={200}
                                        className="h-full w-full object-contain object-center"
                                    />
                                )}
                            </div>
                            <div className="relative flex flex-1 flex-col justify-between p-4 py-2">
                                <div className="flex justify-between justify-items-start gap-4">
                                    <div className="">
                                        <Link
                                            href={`/products/${item.variant.product.slug}?variant=${item.variant.id}`}>
                                            <h2 className="font-medium text-neutral-700">{item.variant?.product?.name}</h2>
                                        </Link>
                                        <p className="mt-1 text-sm text-neutral-500">{item.variant?.product?.category?.name}</p>
                                        {item.variant.name !== item.variant.id && Boolean(item.variant.name) && (
                                            <p className="mt-1 text-sm text-neutral-500">Размер: {item.variant.name}</p>
                                        )}
                                    </div>
                                    <div className="text-right flex gap-1 font-semibold text-neutral-900">
                                        <div>{item.totalPrice.gross.amount}</div>
                                        <div>{item.totalPrice.gross.currency}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-sm font-bold">Количество: {item.quantity}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <div className="rounded border bg-neutral-50 px-4 py-2">
                        <div className="flex items-center justify-between gap-2 py-2">
                            <div>
                                <p className="font-semibold text-neutral-900">Сумма заказа</p>
                                <p className="mt-1 text-sm text-neutral-500">Стоимость доставки будет рассчитана на
                                    следующем этапе.</p>
                            </div>
                            <div className="font-medium text-neutral-900 flex gap-1">
                                <div>{checkout.totalPrice.gross.amount}</div>
                               <div>{checkout.totalPrice.gross.currency}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <CheckoutLink
                            checkoutId={checkoutId}
                            disabled={!checkout.lines.length}
                            className="w-full sm:w-1/3"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}
