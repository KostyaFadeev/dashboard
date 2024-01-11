'use client';
import React, { useEffect, useState } from 'react';
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
  cn,
  ScrollShadow,
  Link,
} from '@nextui-org/react';
import { Carousel } from '@mantine/carousel';

import { siteConfig } from '@/app/ui/site';
import { TelegramIcon } from '@/public/icons';
import SizeModal from '@/app/ui/size-modal/size-modal';
import { getCNYRate } from '@/app/lib/utils';
import { addItem } from '../lib/cookies';

interface Variant {
  label: string;
  values: string[];
}

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  images: Array<string>;
  variants: Array<Variant>;
  price: string;
  weight: any;
  tableSize: string | undefined;
}

export default function CardItem({
  id,
  title,
  description,
  images,
  price,
  weight,
  variants,
  tableSize,
}: CardItemProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOpenSizeModal, setIsOpenSizeModal] = useState(false);
  const [correctPrice, setCorrectPrice] = useState('');

  const handleClick = () => {
    setIsOpenSizeModal(true);
  };
  const onChangeHandle = () => {
    setIsOpenSizeModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const priceInKG = 640;
      const servicePrice = 1000;
      const course = await getCNYRate();
      const currentPrice = parseInt(price.replace(/ /g, ''));
      let priceOfDeliveryInRussia = weight * priceInKG;
      let multiplied = parseInt(
        String(currentPrice + currentPrice * course[0] + priceOfDeliveryInRussia + servicePrice)
      );
      let result = multiplied.toLocaleString(); // цена товара в рублях по курсу ЦБ
      setCorrectPrice(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Card className="py-4 flex h-max" key={id}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={images[0]}
            height={230}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div
            onClick={onOpen}
            className="uppercase font-bold text-large mb-2 cursor-pointer hover:text-orange-600"
          >
            {title}
          </div>
          <ScrollShadow orientation="horizontal" className="max-w-[800px] max-h-[60px]">
            {variants?.map((item, index) => {
              const { label, values } = item;
              return (
                <RadioGroup key={index} label={label} orientation="horizontal" className="mb-2">
                  {values.map((item, index) => (
                    <Radio key={index} value={item}>
                      {item}
                    </Radio>
                  ))}
                </RadioGroup>
              );
            })}
          </ScrollShadow>
          <div className="flex align-center justify-between mt-6">
            <div className="flex flex-col">
              <div className="font-medium text-lg opacity-50">
                <s>{correctPrice} ₽</s>
              </div>
              <div className="font-medium text-2xl">{correctPrice} ₽</div>
            </div>
            <Button
              onClick={onOpen}
              radius="sm"
              className="mt-auto w-40 bg-green-500 text-lg text-white shadow-lg"
            >
              Заказать
            </Button>
          </div>
        </CardBody>
      </Card>

      <Modal
        className="w-full"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
      >
        <ModalContent className="px-2 pt-2">
          {(onClose) => (
            <div className="flex flex-col md:flex-row">
              <ModalHeader className="flex flex-col px-2">
                <Carousel withControls={true} withIndicators loop align="center">
                  {images.map((src, index) => (
                    <Carousel.Slide key={index}>
                      <Image alt="NextUI hero Image" src={src} />
                    </Carousel.Slide>
                  ))}
                </Carousel>
                <h3 className="text-xl text-center mb-2 uppercase">{title}</h3>
                <ScrollShadow className="w-full h-[150px]">
                  <p className="text-sm font-normal">{description}</p>
                </ScrollShadow>
                <div className="flex flex-row gap-2 py-2 mb-2">
                  <div className="font-medium text-2xl">{correctPrice} ₽</div>
                  <div className="font-medium text-lg opacity-50">
                    <s>{correctPrice} ₽</s>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col mt-2 px-2 min-w-[41%]">
                <ScrollShadow orientation="horizontal" className="max-w-[400px] max-h-[300px]">
                  {variants.map((item, index) => {
                    const { label, values } = item;
                    return (
                      <RadioGroup
                        key={index}
                        label={label}
                        orientation="horizontal"
                        className="w-[800px] mb-2"
                      >
                        {values.map((item, index) => (
                          <CustomRadio className="p-2" key={index} value={item}>
                            {item}
                          </CustomRadio>
                        ))}
                      </RadioGroup>
                    );
                  })}
                </ScrollShadow>
                {!!tableSize && (
                  <Button
                    onClick={handleClick}
                    color="primary"
                    variant="bordered"
                    className="text-sm"
                  >
                    Таблица размеров
                  </Button>
                )}
                <SizeModal isOpen={isOpenSizeModal} onChangeHandle={onChangeHandle} />
                <RadioGroup label="Доставка" defaultValue="free" description="">
                  <CustomRadio description="В пункт выдачи" value="free">
                    Бесплатно
                  </CustomRadio>
                  <CustomRadio description="Курьером" value="pro">
                    От 350₽
                  </CustomRadio>
                </RadioGroup>
                {/*<div className="flex gap-4">*/}
                {/*  <Tooltip placement= "bottom-end" color="primary" content="Boundary гарантирует 100% оригинальность товаров" delay={1000}>*/}
                {/*    <CheckCircleIcon  className="cursor-pointer" width={28}/>*/}
                {/*  </Tooltip>*/}
                {/*  <Tooltip placement= "bottom-end" color="primary" content="Подробную информацию о доставка уточняйте у менеджера или в личном кабинете" delay={1000}>*/}
                {/*      <InformationCircleIcon className="cursor-pointer" width={28}/>*/}
                {/*  </Tooltip>*/}
                {/*</div>*/}
                <ModalFooter className="mt-auto px-0">
                  <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
                    <Button color="primary" variant="light">
                      Заказать
                      <TelegramIcon />
                    </Button>
                  </Link>
                  <Button className="bg-green-500" color="primary" onPress={() => {onClose; addItem(id)}}>
                    В корзину
                  </Button>
                </ModalFooter>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          ' inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
      }}
    >
      {children}
    </Radio>
  );
};
