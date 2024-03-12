'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Input } from 'antd';
import { Link } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { authenticate } from '@/app/lib/actions';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import './AuthorizationForm.scss';
import { UserOutlined } from '@ant-design/icons';

const loginFields = [
  {
    title: 'Email',
    type: 'email',
    icon: <UserOutlined />,
    autoComplete: 'username',
    placeholder: 'Введите email адрес',
  },
  {
    title: 'Пароль',
    type: 'password',
    icon: <UserOutlined />,
    autoComplete: 'current-password',
    placeholder: 'Введите пароль',
  },
];
const authFields = [
  {
    title: 'Имя',
    type: 'name',
    icon: <UserOutlined />,
    autoComplete: 'username',
    placeholder: 'Введите имя',
  },
  {
    title: 'Email',
    type: 'email',
    icon: <UserOutlined />,
    autoComplete: 'username',
    placeholder: 'Введите email адрес',
  },
  {
    title: 'Пароль',
    type: 'password',
    icon: <UserOutlined />,
    autoComplete: 'current-password',
    placeholder: 'Введите пароль',
  },
];

/**
 * Компонент с формами авторизации 'Регистрация или вход'
 * @description
 */

const InfoBlock = ({ text, linkText, onClick }) => (
  <p className="text-center text-small">
    {text}
    <Link size="sm" onPress={onClick}>
      {linkText}
    </Link>
  </p>
);

const SubmitButton = ({ buttonText }) => {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full bg-blue-700" aria-disabled={pending}>
      {buttonText} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
};

const AuthorizationForm = () => {
  const [code, action] = useFormState(authenticate, undefined);
  const [selected, setSelected] = React.useState('login');
  const [fields, setFields] = useState(loginFields);

  const handleClick = (val) => {
    setSelected(val);
    setFields(val === 'login' ? loginFields : authFields);
  };

  return (
    <div className="authorization-form">
      <h2 className="authorization-form__title">
        {selected === 'login' ? 'Войти' : 'Зарегистрироваться'}
      </h2>
      <form action={action} className="authorization-form__container">
        <div className="authorization-form__block">
          {fields?.map((item, index) => (
            <div key={index}>
              <label className="authorization-form__label" htmlFor={item.type}>
                {item.title}
              </label>
              <Input
                className="authorization-form__input"
                id={item.type}
                type={item.type}
                name={item.type}
                placeholder={item.placeholder}
                required
                autoComplete={item.autoComplete}
                size="large"
                prefix={item.icon}
              />
            </div>
          ))}
        </div>
        {selected === 'login' ? (
          <>
            <InfoBlock
              text="Вы у нас впервые?"
              linkText="Создать аккаунт"
              onClick={() => handleClick('sign-up')}
            />
            <SubmitButton buttonText="Войти" />
            {code === 'CredentialSignin' && (
              <div className="flex h-8 items-end space-x-1">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  Неверные данные
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <InfoBlock
              text="Уже есть аккаунт на нашем сервисе?"
              linkText="Войти"
              onClick={() => handleClick('login')}
            />

            <SubmitButton buttonText="Регистрация" />
            {code === 'CredentialSignin' && (
              <div className="flex h-8 items-end space-x-1">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  Неверные данные
                </p>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default observer(AuthorizationForm);
