'use client';
import React from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Radio, RadioGroup } from '@nextui-org/radio';
import {
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { siteConfig } from '@/app/ui/site';
import { Carousel } from '@mantine/carousel';

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  img: string;
  price: string;
}

export default function CardItem({ id, title, description, img, price }: CardItemProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="py-4 flex" key={id}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
          <Image alt="Card background" className="object-cover rounded-xl" src={img} height={230} />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="font-bold text-large mb-2 cursor-pointer hover:text-orange-600">
            {title}
          </div>
          <RadioGroup label="Выбери размер" orientation="horizontal" className="mb-2">
            <Radio value="buenos-aires">8 US</Radio>
            <Radio value="sydney">9 US</Radio>
            <Radio value="san-francisco">10 US</Radio>
          </RadioGroup>
          <small className="text-default-500 text-md mb-2">{description}</small>
          <div className="flex align-center justify-between mt-6">
            <div className="font-medium text-2xl mb-4">{price} ₽</div>
            <Button
              onClick={onOpen}
              radius="sm"
              className="w-40 bg-green-500 text-lg text-white shadow-lg"
            >
              Заказать
            </Button>
          </div>
        </CardBody>
      </Card>

      <Modal className="w-full" isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="px-2 pt-2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <Carousel withControls={true} withIndicators loop align="center">
                  {siteConfig.MainPage.mainImages.map((src, index) => (
                    <Carousel.Slide key={index}>
                      <Image alt="NextUI hero Image" src={src} />
                    </Carousel.Slide>
                  ))}
                </Carousel>

                <h3 className="text-2xl text-center">{title}</h3>
              </ModalHeader>
              <ModalBody className="flex flex-col">
                <p>{description}</p>
                <RadioGroup label="Выбери размер" orientation="horizontal" className="mb-2">
                  <Radio value="buenos-aires">8 US</Radio>
                  <Radio value="sydney">9 US</Radio>
                  <Radio value="san-francisco">10 US</Radio>
                </RadioGroup>
                <Button className="text-sm">Таблица размеров</Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
                <Button color="primary" onPress={onClose}>
                  Заказать
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
