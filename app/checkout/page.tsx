import {FaceSmileIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";

export const metadata = {
    title: "Оплата",
};

export default async function Page() {

    return (
        <section className="mx-auto max-w-7xl p-8">
            <div className="mt-8 flex items-center gap-4"><h1 className="text-3xl font-bold text-neutral-900">Ваш
                заказ успешно создан!</h1>
                <FaceSmileIcon width={34} height={34}/></div>
            <p className="my-12 text-lg text-neutral-500">
                Мы уже начали его оформление, ожидайте ответа менеджера.
            </p>
            <NextLink href="../catalog" className="mx-auto">
                <Button
                    color="primary"
                    variant="shadow"
                    radius="full"
                    className="text-white shadow-lg w-60"
                >
                    Продолжить покупки
                </Button>
            </NextLink>
        </section>
    );
}
