'use client';

import React from 'react';
import { Drawer, Grid } from 'antd';

import '../cart/CartDrawer.scss';

import { observer } from 'mobx-react-lite';
import { authorizationStore } from '@/app/stores/AuthorizationStore';
import AuthorizationForm from '@/app/ui/authorization/AuthorizationForm';

const { useBreakpoint } = Grid;

/**
 * Драйвер с выезжающей справа формой авторизации
 * @description
 */

const AuthorizationDrawer = () => {
  const { openAuth, setOpenAuth } = authorizationStore;
  const { md } = useBreakpoint();

  const onClose = () => {
    setOpenAuth(false);
  };

  return (
    <Drawer width={md ? 445 : 375} classNames="text-xl" onClose={onClose} open={openAuth}>
      <AuthorizationForm />
    </Drawer>
  );
};

export default observer(AuthorizationDrawer);
