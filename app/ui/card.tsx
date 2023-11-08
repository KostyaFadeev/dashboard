'use client'

import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";
import {Radio, RadioGroup} from "@nextui-org/radio";


export default function CardItem() {

    return (
        <Card className="py-4 flex">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    width={270}
                />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large mb-2">Nike Air Max </h4>
                <RadioGroup
                    label="Выбери размер"
                    orientation="horizontal"
                    className="mb-2"
                >
                    <Radio value="buenos-aires">8 US</Radio>
                    <Radio value="sydney">9 US</Radio>
                    <Radio value="san-francisco">10 US</Radio>
                </RadioGroup>
                <small className="text-default-500 text-md mb-2">Тут будет краткое описание товара</small>
                <div className="font-bold text-xl mb-4">9 999 руб</div>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Заказать
                </Button>
            </CardBody>
        </Card>
    );
}
