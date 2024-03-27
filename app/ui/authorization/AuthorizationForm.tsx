'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input } from 'antd';
import { Link } from '@nextui-org/react';
import {useFormState, useFormStatus} from 'react-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { authenticate } from '@/app/lib/actions';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import './AuthorizationForm.scss';
import { UserOutlined } from '@ant-design/icons';

const loginFields = [
  {
    title: 'Email',
    type: 'email',
    name: 'email',
    // icon: <UserOutlined />,
    autoComplete: 'username',
    placeholder: 'Введите email адрес',
    rules: [{ type: 'email', message: 'Некорректная почта'},
      { required: true, message: 'Обязательное поле' }]
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
    // icon: <UserOutlined />,
    autoComplete: 'current-password',
    placeholder: 'Введите пароль',
    rules: [{ required: true, message: 'Обязательное поле' }]
  },
];
const authFields = [
  {
    title: 'Email',
    type: 'email',
    name: 'email',
    // icon: <UserOutlined />,
    autoComplete: 'username',
    placeholder: 'Введите email адрес',
    rules: [{ type: 'email', message: 'Некорректная почта'},
      { required: true, message: 'Обязательное поле' }]
  },
  {
    title: 'Пароль',
    name: 'password',
    type: 'password',
    // icon: <UserOutlined />,
    autoComplete: 'current-password',
    placeholder: 'Введите пароль',
    rules: [{ min: 5, message: 'Ненадёжный пароль' },
      { required: true, message: 'Обязательное поле' }
    ]
  //  todo Нужно найти адекватные правила определения надежности
  },
  {
    title: 'Повторите пароль',
    type: 'password',
    name: 'password2',
    dependencies: 'password',
    // icon: <UserOutlined />,
    autoComplete: 'current-password',
    placeholder: 'Введите пароль',
    rules: [{ min: 5, message: 'Ненадёжный пароль' }, {
      required: true, message: 'Обязательное поле'
    },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') == value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Пароли не совпадают'));
        },
      }),],

  }
];

/**
 * Компонент с формами авторизации 'Регистрация или вход'
 * @description
 */

const InfoBlock = ({ text, linkText, onClick, className }) => (
  <p className="w-full">
    {text}
    <Link size="sm" onPress={onClick}>
      {linkText}
    </Link>
  </p>
);

const SubmitButton = ({ buttonText }) => {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 bg-blue-700" type="primary" aria-disabled={pending}>
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

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} введен некорректно',
      number: '${label} is not a valid number!',
    },
  };

  return (
    <div className="authorization-form">
      <h2 className="authorization-form__title">
        {selected === 'login' ? 'Войти' : 'Зарегистрироваться'}
      </h2>
      <Form onFinish={action} action={action} className="authorization-form__container" >
        <div className="authorization-form__block">
          {fields?.map((item, index) => (
            <div key={index}>
              <label className="authorization-form__label" htmlFor={item.type}>
                {item.title}
              </label>
              <Form.Item name={item.name} rules={item.rules} dependencies={[item?.dependencies]}>
                <Input
                  className="authorization-form__input"
                  id={item.type}
                  type={item.type}
                  name={item.type}
                  placeholder={item.placeholder}
                  required
                  autoComplete={item.autoComplete}
                  size="large"
                  // prefix={item.icon}
                />
              </Form.Item>
            </div>
          ))}
        </div>
        {selected === 'login' ? (
          <>
            <div className="flex justify-between content-center items-center">
              <InfoBlock
                // text="Вы у нас впервые?"
                linkText="Создать аккаунт"
                onClick={() => handleClick('sign-up')}
              />
              <Form.Item>
                <SubmitButton buttonText="Войти" />
              </Form.Item>
            </div>
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


            <SubmitButton buttonText="Зарегистрироваться" />
            {code === 'CredentialSignin' && (
              <div className="flex h-8 items-end space-x-1">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  Неверные данные
                </p>
              </div>
            )}
            <InfoBlock
                text="Уже есть аккаунт? "
                linkText="Войти"
                onClick={() => handleClick('login')}
            />
            <InfoBlock
                text="При регистрации я даю согласие на
                      обработку своих персональных данных "
                linkText="Политика конфиденциальности"
                onClick={() => handleClick('privacy-policy')}
                //todo добавить ссылку на политику
            />
          </>
        )}
      </Form>
    </div>
  );
};

export default observer(AuthorizationForm);
