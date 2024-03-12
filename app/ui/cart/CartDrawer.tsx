'use client';

import React, { useState } from 'react';
import { Drawer, Grid, Spin } from 'antd';
import clsx from 'clsx';
import NextLink from 'next/link';
import { Button } from '@nextui-org/react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

import './CartDrawer.scss';

import Cart from '@/app/ui/cart/Cart';
import { cartStore } from '@/app/stores/CartStore';
import { observer } from 'mobx-react-lite';

const { useBreakpoint } = Grid;

/**
 * Драйвер с выезжающей справа корзиной
 * @description
 */

const CartDrawer = () => {
  const { md } = useBreakpoint();
  const { productsSelect, loadingProducts } = cartStore;
  const [open, setOpen] = useState(false);

  let countProd = 0;
  productsSelect.forEach((item) => {
    countProd += item.count;
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (loadingProducts) {
    return <Spin />;
  }

  return (
    <>
      <div onClick={showDrawer} className="relative flex items-center" data-testid="CartNavItem">
        <ShoppingCartIcon
          color={'rgba(113, 113, 120, 1)'}
          width={24}
          height={24}
          className="h-6 w-6 shrink-0"
          aria-hidden="true"
        />
        {countProd > 0 ? (
          <div
            className={clsx(
              'absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white',
              countProd > 9 ? 'w-[3ch]' : 'w-[2ch]'
            )}
          >
            {countProd}{' '}
            <span className="sr-only">item{countProd > 1 ? 's' : ''} in cart, view bag</span>
          </div>
        ) : (
          <span className="sr-only">0 items in cart</span>
        )}
      </div>
      <Drawer
        width={md ? 445 : 375}
        classNames="text-xl"
        title="Корзина"
        onClose={onClose}
        open={open}
      >
        {!productsSelect || productsSelect?.length < 1 ? (
          <section className="mx-auto max-w-7xl p-8">
            <div className="mt-8 flex items-center gap-4">
              <h1 className="text-3xl font-bold text-neutral-900">Ваша корзина пуста</h1>
              <ShoppingBagIcon width={34} height={34} />
            </div>
            <p className="my-12 text-sm text-neutral-500">
              Похоже, вы еще не добавили ни одного товара в корзину.
            </p>
            <NextLink href="../catalog" className="mx-auto">
              <Button
                color="primary"
                variant="shadow"
                radius="full"
                className="text-white shadow-lg w-60"
              >
                Перейти к покупкам
              </Button>
            </NextLink>
          </section>
        ) : (
          <Cart />
        )}
      </Drawer>
    </>
  );
};

export default observer(CartDrawer);
