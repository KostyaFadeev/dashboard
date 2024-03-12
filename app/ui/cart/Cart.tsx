'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import './Cart.scss';

import CartProductList from '@/app/ui/cart/CartProductList';
import { Button, Input, Tooltip } from 'antd';
import { cartStore } from '@/app/stores/CartStore';
import { authorizationStore } from '@/app/stores/AuthorizationStore';
import { observer } from 'mobx-react-lite';
import { getCNYRate } from '@/app/lib/utils';
import AuthorizationDrawer from '@/app/ui/authorization/AuthorizationDrawer';

const propTypes = {
  cartData: PropTypes.array,
  currency: PropTypes.array,
};

/**
 * Компонент со всем содержимым корзины
 * @description
 */

const Cart = () => {
  const [currentCourse, setCurrentCourse] = useState<number[]>([]);
  const { servicePrice, priceInKG, productsSelect } = cartStore;
  const { totalPrice, priceDelivery, commissions } = productsSelect.reduce(
    (acc, item) => {
      const price = Number(item.price.replace(/\s/g, ''));

      return {
        totalPrice: acc.totalPrice + price,
        priceDelivery: acc.priceDelivery + item.weight * priceInKG,
        commissions: acc.commissions + servicePrice,
      };
    },
    {
      totalPrice: 0,
      priceDelivery: 0,
      commissions: 0,
    }
  );

  const onOpenAuthorization = () => {
    authorizationStore.setOpenAuth(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const course = await getCNYRate();
      setCurrentCourse(course);
    };
    fetchData();
  }, []);

  return (
    <div className="cart">
      <CartProductList />
      <div className="cart__block">
        <div className="cart__block-item">
          <div>Товары</div>
          <div>{totalPrice} ₽</div>
        </div>
        <div className="cart__block-item">
          <div>Скидака</div>
          <div>36 ₽</div>
        </div>
        <div className="cart__block-item">
          <div className="flex gap-2">
            Доставка
            <Tooltip placement="bottom" title="Стоимость доставки до России" color={'geekblue'}>
              <QuestionMarkCircleIcon className="cursor-pointer" width={20} />
            </Tooltip>
          </div>
          <div className="flex gap-2">
            <div className="text-green-500">28 дней</div>
            <div>{priceDelivery} ₽</div>
          </div>
        </div>
        <div className="cart__block-item">
          <div className="flex gap-2">
            Коммисия
            <Tooltip
              placement="bottom"
              title="Комиссия сервиса за выкуп товара и организацю доставки"
              color={'geekblue'}
            >
              <QuestionMarkCircleIcon className="cursor-pointer" width={20} />
            </Tooltip>
          </div>
          <div>{commissions} ₽</div>
        </div>
      </div>
      <div className="cart__total">
        <div className="cart__block-item">
          <div>Итого</div>
          <div className="text-green-500">{totalPrice + commissions + priceDelivery} ₽</div>
        </div>
        <div className="cart__promo-block">
          <Input className="cart__promo-input" placeholder="Промокод" />
          <Button className="cart__promo-block-button" type="text">
            Активировать
          </Button>
        </div>
        <div className="cart__block-item">
          <Input className="cart__address" placeholder="Указать адрес" />
        </div>
      </div>
      <Button className="cart__button" onClick={onOpenAuthorization}>
        Авторизоваться
      </Button>
      <AuthorizationDrawer />
    </div>
  );
};

Cart.propTypes = propTypes;
export default observer(Cart);
