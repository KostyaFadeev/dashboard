'use client';
import React, {useState} from 'react';
import {Button, Image} from '@nextui-org/react';
import {getCorrectPriceRUB} from "@/app/lib/data";
import Link from "next/link";
import {HomeIcon, PhoneIcon, UserIcon, XCircleIcon} from "@heroicons/react/24/outline";
import {deleteAll, deleteItem} from "@/app/lib/cookies";
import {CheckoutLink} from "@/app/cart/CheckoutLink";
import {AtSymbolIcon, LinkIcon} from "@heroicons/react/24/solid";
import {RadioGroup} from "@nextui-org/radio";
import {CustomRadio} from "@/app/ui/card-item";

interface Data {
    src: string;
    alt: string;
    link: string;
}

interface CartProps {
    cartData: Array<Data>;
    [key: string]: any;
}

const Cart: React.FC<CartProps> = ({ cartData, currency }: CartProps) => {
    const [selectDeliveryType, setSelectDeliveryType] = useState(0);
    const [selectCurrancy, setSelectCurrancy] = useState(0);
    let totalPrice = 0;

    return (
        <form className="mt-12">
            <ul
                data-testid="CartProductList"
                role="list"
                className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
            >
                {cartData?.map((item, index) => {
                    const price = getCorrectPriceRUB(currency[0], item.price, item.weight);
                    totalPrice = totalPrice + price;

                    return(
                        <li key={index} className="flex py-4">
                            <div
                                className="aspect-square flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                                {item.images && (
                                    <Image
                                        src={item.images[0]}
                                        alt={""}
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
                                            href={'/'}>
                                            <h2 className="font-medium text-neutral-700">{item.title}</h2>
                                        </Link>
                                        <p className="mt-1 text-sm text-neutral-500">Вес: {item.weight} кг</p>
                                        <p className="mt-1 text-sm text-neutral-500">Размер: {item.currentSize}</p>
                                    </div>
                                    <div className="text-right flex flex-col gap-2 font-semibold text-neutral-900">
                                        <div  onClick={() => {
                                            deleteItem(item.id, item.currentSize);
                                        }} className="cursor-pointer flex justify-end mb-2">
                                            <XCircleIcon width={34} height={34}/>
                                        </div>
                                        <div className="flex gap-1">
                                            <div>{price}</div>
                                            <div>RUB</div>
                                        </div>
                                        <div className="flex gap-1">
                                            <div>{item.price}</div>
                                            <div>{item.currency}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-sm font-bold">Количество: {item.countOrders}</div>
                                </div>
                            </div>
                        </li>
                    )})}
            </ul>
            {cartData && cartData.length > 0 && (
                <Button
                    color="danger"
                    variant="shadow"
                    radius="sm"
                    className="mt-6 text-white shadow-lg w-60"
                    onClick={() => {deleteAll()}}
                >
                    Очистить корзину
                </Button>
            )}

            <div className="mt-12 mb-4">
                <div className="rounded border bg-neutral-50 px-4 py-2">
                    <div className="flex items-center justify-between gap-2 py-2">
                        <div>
                            <p className="font-semibold text-neutral-900">Сумма заказа</p>
                            <p className="mt-1 text-sm text-neutral-500">Стоимость доставки будет рассчитана ниже</p>
                        </div>
                        <div className="font-medium text-xl text-neutral-900 flex gap-1">
                            <div>{totalPrice}</div>
                            <div>RUB</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-20 justify-start flex-wrap">
                    <div className="flex mt-4 w-full lg:w-1/3 flex-col gap-6">
                        <h2 className="mt-4 text-2xl font-bold text-neutral-900">Данные получателя:</h2>
                        <div className="w-full">
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="lastName"
                                >
                                    Фамилия
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        placeholder="Введите Фамилию"
                                        required
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="firstName"
                                >
                                    Имя
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        placeholder="Введите Имя"
                                        required
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="middleName"
                                >
                                    Отчество
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="middleName"
                                        type="text"
                                        name="middleName"
                                        placeholder="Введите Отчество"
                                        required
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Введите email адрес"
                                        required
                                        autoComplete="username"
                                    />
                                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label
                                    className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                                    htmlFor="phone"
                                >
                                    Номер телефона
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        placeholder="Введите номер телефона"
                                        required
                                        minLength={6}
                                    />
                                    <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 w-full lg:w-1/2 flex-col gap-6">
                        <h2 className="mt-4 text-2xl font-bold text-neutral-900">Адрес доставки:</h2>
                        <div className="w-full">
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="city"
                                >
                                    Город
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="city"
                                        type="text"
                                        name="city"
                                        placeholder="Введите город"
                                    />
                                    <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="mb-3 mt-2 block text-sm font-medium text-gray-900"
                                    htmlFor="street"
                                >
                                    Улица, дом, квартира
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="street"
                                        type="text"
                                        name="street"
                                        placeholder="Введите адрес"
                                        required
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex-wrap  gap-8 flex">
                            <RadioGroup value={selectDeliveryType} onValueChange={setSelectDeliveryType} label="Доставка" defaultValue="free" description="">
                                <CustomRadio description="В пункт выдачи Почта России" value={0}>
                                    Бесплатно
                                </CustomRadio>
                                <CustomRadio description="Курьером" value={550}>
                                    + 550₽
                                </CustomRadio>
                            </RadioGroup>
                            <RadioGroup value={selectCurrancy} onValueChange={setSelectCurrancy} label="Дополнительная страховка" defaultValue="free" description="">
                                <CustomRadio description="Не требуется" value={0}>
                                    Бесплатно
                                </CustomRadio>
                                <CustomRadio description="Хочу страховку" value={Math.round(totalPrice*0.03)}>
                                    + {Math.round(totalPrice*0.03)} ₽
                                </CustomRadio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className="rounded mt-10 border bg-neutral-50 px-4 py-2">
                    <div className="flex items-center justify-between gap-2 py-2">
                        <div>
                            <p className="font-semibold text-xl text-neutral-900">Общая сумма заказа:</p>
                        </div>
                        <div className="font-medium text-xl text-neutral-900 flex gap-1">
                            <div>{totalPrice + selectDeliveryType + selectCurrancy}</div>
                            <div>RUB</div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mb-8 text-start">
                    <CheckoutLink
                        disabled={!cartData.length}
                        className="w-full sm:w-1/3"
                    />
                </div>
            </div>
        </form>
    );
};

export default Cart;
