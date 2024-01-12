'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { authenticate } from '@/app/lib/actions';

import { Button } from './button';

import React from 'react';
import { Tabs, Tab, Link, Card, CardBody } from '@nextui-org/react';
import { AtSymbolIcon, UserIcon, KeyIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

export default function LoginForm() {
  const [code, action] = useFormState(authenticate, undefined);
  const [selected, setSelected] = React.useState('login');

  const handleTabsChange = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full h-[450px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(value) => {
              if (typeof value === 'string') {
                handleTabsChange(value);
              }
            }}
          >
            <Tab key="login" title="Войти">
              <form action={action} className="flex flex-col gap-6">
                <div className="w-full">
                  <div>
                    <label
                      className="mb-3 mt-2 block text-xs font-medium text-gray-900"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Введите email адрес"
                        required
                        autoComplete="username"
                      />
                      <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                      htmlFor="password"
                    >
                      Пароль
                    </label>
                    <div className="relative">
                      <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        required
                        minLength={6}
                        autoComplete="current-password"
                      />
                      <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </div>
                </div>

                <p className="text-center text-small">
                  Вы у нас впервые?{' '}
                  <Link size="sm" onPress={() => setSelected('sign-up')}>
                    Создать аккаунт
                  </Link>
                </p>
                <div className="flex gap-2 justify-start flex-col">
                  <LoginButton />
                  <div className="flex h-8 items-end space-x-1">
                    {code === 'CredentialSignin' && (
                      <>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p aria-live="polite" className="text-sm text-red-500">
                          Неверные данные
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Зарегистрироваться">
              <form className="flex flex-col gap-6">
                <div className="w-full">
                  <div>
                    <label
                      className="mb-3 mt-2 block text-xs font-medium text-gray-900"
                      htmlFor="name"
                    >
                      Имя
                    </label>
                    <div className="relative">
                      <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="name"
                        type="text"
                        name="Имя"
                        placeholder="Введите имя"
                        required
                      />
                      <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-3 mt-2 block text-xs font-medium text-gray-900"
                      htmlFor="email"
                    >
                      Логин
                    </label>
                    <div className="relative">
                      <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        autoComplete="username"
                      />
                      <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                      htmlFor="password"
                    >
                      Пароль
                    </label>
                    <div className="relative">
                      <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                        autoComplete="current-password"
                      />
                      <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </div>
                </div>

                <p className="text-center text-small">
                  Уже есть аккаунт на нашем сервисе?{' '}
                  <Link size="sm" onPress={() => setSelected('login')}>
                    Войти
                  </Link>
                </p>
                <div className="flex gap-2 justify-start flex-col">
                  <LoginButton />
                  <div className="flex h-8 items-end space-x-1">
                    {code === 'CredentialSignin' && (
                      <>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p aria-live="polite" className="text-sm text-red-500">
                          Неверные данные
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full bg-blue-700" aria-disabled={pending}>
      Войти <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
