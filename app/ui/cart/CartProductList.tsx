'use client';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { cartStore } from '@/app/stores/CartStore';

import './Cart.scss';

import CartProductCard from '@/app/ui/cart/CartProductCard';

/**
 * Компонент с карточками товаров в корзине
 * @description
 */

const CartProductList = () => {
  const { productsSelect } = cartStore;
  let totalPrice = 0;

  return (
    <ul data-testid="CartProductList" role="list">
      {productsSelect?.map((item, index) => {
        const price = item.price;
        totalPrice = totalPrice + price;

        return (
          <CartProductCard
            key={index}
            countOrders={item.count}
            price={price}
            id={item.id}
            images={item.images}
            title={item.title}
            weight={item.weight}
            selectSize={item.selectSize}
            variants={item.variants}
          />
        );
      })}
    </ul>
  );
};

export default observer(CartProductList);
