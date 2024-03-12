'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Radio, RadioGroup } from '@nextui-org/radio';
import NextLink from 'next/link';
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
import { EnvelopeIcon, TruckIcon } from '@heroicons/react/24/outline';
import { observer } from 'mobx-react-lite';
import { cartStore } from '@/app/stores/CartStore';

const CardItem = ({
  currency,
  id,
  currentSize,
  title,
  description,
  images,
  price,
  weight,
  variants,
  tableSize,
}) => {
  const { setProductsSelect, priceInKG, servicePrice } = cartStore;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isOpenSizeModal, setIsOpenSizeModal] = useState(false);
  const [correctPrice, setCorrectPrice] = useState('');
  const [selectSize, setSelectSize] = useState(currentSize);

  const handleClick = () => {
    setIsOpenSizeModal(true);
  };
  const onChangeHandle = () => {
    setIsOpenSizeModal(false);
  };

  useEffect(() => {
    const fetchData = () => {
      const currentPrice = parseInt(price.replace(/ /g, ''));
      let priceOfDeliveryInRussia = weight * priceInKG;
      let multiplied = parseInt(
        String(currentPrice + currentPrice * currency[0] + priceOfDeliveryInRussia + servicePrice)
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
            onClick={onOpen}
            alt="Card background"
            className="object-cover cursor-pointer rounded-xl"
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
                <RadioGroup
                  value={selectSize}
                  onValueChange={setSelectSize}
                  key={index}
                  label={label}
                  orientation="horizontal"
                  className="mb-2"
                >
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
                        value={selectSize}
                        onValueChange={setSelectSize}
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
                <div className="text-sm gap-4 flex items-center">
                  <TruckIcon stroke={'rgba(113, 113, 120, 1)'} width={24} height={24} />
                  14 - 30 дней может занять доставка
                </div>
                <div className="text-sm gap-4 flex items-center">
                  Поделиться:{' '}
                  <div className="flex gap-4">
                    <NextLink
                      target="_blank"
                      className="block flex gap-4 font-semibold text-indigo-800 hover:text-orange-500"
                      href={'https://t.me/Boundary_dostavka'}
                    >
                      <TelegramIcon width={24} />
                    </NextLink>
                    <NextLink
                      target="_blank"
                      className="block flex gap-4 font-semibold text-indigo-800 hover:text-orange-500"
                      href={'https://vk.com/boundary_delivery'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#2e6ee8"
                          d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2m3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437c-.864-.833-1.229-.937-1.448-.937c-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667a11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.459c.375 0 .51.167.656.552c.708 2.084 1.916 3.896 2.406 3.896c.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417c.188 0 .333-.104.677-.448a11.999 11.999 0 0 0 1.792-2.98a.628.628 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646c.145.219.656.646 1 1.052a6.486 6.486 0 0 1 1.229 1.708c.125.406-.084.615-.5.615"
                        />
                      </svg>
                    </NextLink>
                    <NextLink
                      className="block flex gap-4 font-semibold text-indigo-800 hover:text-orange-500"
                      href={''}
                    >
                      <EnvelopeIcon color={'#707078'} width={24} />
                    </NextLink>
                  </div>
                </div>
                <SizeModal isOpen={isOpenSizeModal} onChangeHandle={onChangeHandle} />
                <ModalFooter className="mt-auto px-0">
                  <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
                    <Button color="primary" variant="light">
                      Заказать
                      <TelegramIcon />
                    </Button>
                  </Link>
                  <Button
                    className="bg-green-500"
                    color="primary"
                    onClick={() => {
                      onClose();
                      setProductsSelect({
                        id,
                        title,
                        selectSize,
                        variants,
                        images,
                        correctPrice,
                        weight,
                      });
                    }}
                  >
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
};

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

export default observer(CardItem);
