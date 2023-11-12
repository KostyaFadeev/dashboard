'use client'

import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function CardItem() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Card className="py-4 flex">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        height={230}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="font-bold text-large mb-2 cursor-pointer hover:text-orange-600" onClick={onOpen}>Nike Air Max </div>
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
                    <Button radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Заказать
                    </Button>
                </CardBody>
            </Card>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
