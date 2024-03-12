'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from '@nextui-org/react';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

import './CartProductCard.scss';

import { InputNumber, Select } from 'antd';
import { cartStore } from '@/app/stores/CartStore';

const propTypes = {
  id: PropTypes.any,
  images: PropTypes.array,
  title: PropTypes.string,
  weight: PropTypes.string,
  selectSize: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.array,
  countOrders: PropTypes.any,
};

/**
 * Карточка товара в корзине
 * @param {string} id - id  товара
 * @param {array} images - массив изображений
 * @param {string} title - название товара
 * @param {string} selectSize - выбранный размер
 * @param {string} countOrders - колличество одинаковых товаров
 * @param {string} price - стоимость товара
 * @param {array} variants - доступные размеры
 * @description
 */

const CartProductCard = ({ id, images, title, selectSize, variants, price, countOrders }) => {
  const { deleteProductsSelect } = cartStore;
  const [like, setLike] = useState(false);
  const sizes = variants[0].values.map((item) => {
    return { value: item, label: item };
  });

  return (
    <li className="cart-product-card">
      <div className="cart-product-card__image-block">
        {images && (
          <Image
            src={images[0]}
            alt={''}
            width={200}
            height={200}
            className="h-full w-full object-contain object-center"
          />
        )}
      </div>
      <div className="cart-product-card__container">
        <h3 className="cart-product-card__title">{title}</h3>
        <div className="cart-product-card__elements">
          <div className="cart-product-card__selects">
            <Select style={{ minWidth: 100 }} value={selectSize} options={sizes} />
            <InputNumber style={{ width: 60 }} min={1} max={10} value={countOrders} />
          </div>
          <HeartIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setLike(!like)}
            width={24}
            fill={like ? '#de3663' : 'none'}
            stroke={like ? '#de3663' : '#292929'}
          />
          <TrashIcon
            style={{ cursor: 'pointer' }}
            onClick={() => deleteProductsSelect(id, selectSize)}
            width={24}
          />
        </div>
        <div className="cart-product-card__prices">
          <div className="cart-product-card__prices-last">{price} ₽</div>
          <div className="cart-product-card__prices-current">{price} ₽</div>
        </div>
      </div>
    </li>
  );
};

CartProductCard.propTypes = propTypes;
export default CartProductCard;
