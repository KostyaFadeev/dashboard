import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Boundary',
  description: 'Сервис по доставке товаров из-за границы.',
  navItems: [
    {
      label: 'Каталог',
      href: '/catalog',
    },
    {
      label: 'О нас',
      href: '/about',
    },
    {
      label: 'Доставка и оплата',
      href: '/delivery',
    },
    {
      label: 'Калькулятор доставки',
      href: '/calculator',
    },
    {
      label: 'Как заказать ?',
      href: '/info',
    },
  ],
  navMenuItems: [
    {
      label: 'Войти',
      href: '/login',
    },
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Каталог',
      href: '/catalog',
    },
    {
      label: 'О нас',
      href: '/about',
    },
    {
      label: 'Доставка и оплата',
      href: '/delivery',
    },
    {
      label: 'Рассчитать стоимость',
      href: '/calculator',
    },
    {
      label: 'Как заказать ?',
      href: '/info',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    telegram: 'https://t.me/boundary_dostavka',
  },
  mainDropdownData: [
    {
      key: 'new',
      label: 'Войти',
      href: '/login',
    },
    {
      key: 'copy',
      label: 'Зарегистрироваться',
      href: '/login',
    },
    {
      key: 'delete',
      label: 'Выйти',
      href: '/login',
    },
  ],
  personsData: [
    {
      img: '',
      name: 'Константин Фадеев',
      description: 'Тут будет краткая информация о сотруднике',
      link: 'https://t.me/kostya_fadeev',
    },
    {
      img: '',
      name: 'Алексеева Вероника',
      description: 'Тут будет краткая информация о сотруднике',
      link: 'https://t.me/nikitosa22',
    },
  ],
  MainPage: {
    mainImages: ['/test3.jpg', '/test8.jpg', '/test6.jpg', '/test7.jpg', '/test5.jpg'],
    tabsData: [
      {
        id: 'delivery',
        label: 'Как заказать ?',
        content:
          'Товары Boundary доставляются из-за рубежа с нашего склада и со складов наших партнеров. Мы стараемся максимально сократить время доставки товаров. Обычно срок составляет 2-4 недели и будет указан в карточке товара.\n' +
          '\n' +
          'Вы сможете отслеживать передвижение вашего заказа в личном кабинете.\n' +
          '\n' +
          'Так как все посылки доставляются из-за рубежа, они считаются международными отправлениями и проходят таможенное оформление согласно Таможенному Кодексу, вне зависимости от стоимости и веса, в соответствии с приказом ФТС от 05.07.2018 №1060.\n' +
          '\n',
      },
      {
        id: 'payment',
        label: 'Как оплатить ?',
        content:
          'Способы оплаты:\n' +
          '\n' +
          'Мы принимаем оплату онлайн на сайте любой картой российских банков или через Систему быстрых платежей (СБП) в приложении банка.\n' +
          '\n' +
          'Порядок оплаты:\n' +
          '\n' +
          'Оплата заказа происходит на последнем этапе его оформления. Сразу после получения денежных средств мы резервируем выбранный вами товар у поставщика. До этого момента цена и наличие вещей могут измениться.\n' +
          '\n' +
          'Что входит в итоговую стоимость заказа:\n' +
          '\n' +
          'Итоговая стоимость заказа состоит из цены товара, доставки и таможенной пошлины. Таможенная пошлина будет расчитана только в тех случаях, когда сумма ваших покупок более 1000 евро (по курсу ЦБ) и/или весом более 31 кг.',
      },
      {
        id: 'warranty',
        label: 'Какие гарантии ?',
        content:
          'Гарантия на товар:\n' +
          '\n' +
          'Мы предоставляем гарантию на три месяца с момента получения посылки на товары из категорий «Электроника» и «Бытовая техника». В случае, если в течение этого времени вы обнаружили неисправность, вам необходимо связаться с нами в Telegram или по электронной почте и выслать фото/видео и описание брака. Мы заберем товар и сдадим в наш сервисный центр для дальнейшей проверки качества:\n' +
          '\n' +
          'Если брак подтверждается и подлежит ремонту, то мы устраняем его и возвращаем вам устройство назад;\n' +
          'Если же сервисный центр сообщает о невозможности починки, то мы возвращаем вам денежные средства и забираем бракованное устройство.\n' +
          'Важно! Диагностика техники проводится исключительно в нашем авторизованном сервисном центре. В случае, если ремонт или проверка качества были проведены в стороннем сервисном центре, мы не сможем компенсировать вам денежные средства.\n' +
          '\n' +
          'Гарантия не распространяется на категории «Игрушки и игры», «Витамины и БАДы», «Одежда и обувь».',
      },
    ],
    howIsWorkData: [
      {
        type: 'clipboardDocumentCheck',
        title: 'ЛЕГКОЕ ОФОРМЛЕНИЕ ЗАКАЗА',
        description:
          'Выбирай в каталоге нужный товар, добавляй его в корзину и переходи к детальному\n' +
          '                            оформлению.',
      },
      {
        type: 'credit',
        title: 'ОПЛАТА РОССИЙСКОЙ БАНКОВСКОЙ КАРТОЙ',
        description: 'У нас удобно — оплата в рублях и не нужно лишних манипуляций с деньгами.',
      },
      {
        type: 'clock',
        title: 'ПОДТВЕРЖДЕНИЕ ЗАКАЗА',
        description:
          'После того как заказ будет подтвержден, мы привезем его за 2-4 недели. В случае, каких либо проблем с наличием, мы немедленно известим тебя, предложим актуальную замену или вернем оплату.',
      },
      {
        type: 'checkBadge',
        title: 'ПОЛУЧЕНИЕ ЗАКАЗА',
        description:
          'Заказ можно получить любым удобным способом, выбор при оформлении – курьерская доставка или пункт выдачи.',
      },
    ],
    guaranteesData: [
      {
        type: 'banknotes',
        title: 'ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ',
        description: 'Мы гарантируем возврат денежных средств, если товар бракованный.',
      },
      {
        type: 'shieldCheck',
        title: 'ГАРАНТИЯ ОРИГИНАЛЬНОСТИ ПРОДУКЦИИ',
        description:
          'Мы тщательно отобрали партнеров, поэтому готовы подтвердить оригинальность продукции, которую везем.',
      },
      {
        type: 'shoppingBag',
        title: 'ГАРАНТИЯ ОТ МАГАЗИНА',
        description:
          'Мы предоставляем бесплатную гарантию на 3 месяца от Boundary на всю электронику и бытовую технику.',
      },
    ],
  },
  CalculatorPage: {
    title: 'Здесь вы можете рассчитать стоимость своего заказа',
    subtitle: 'О наших тарифах',
    description:
      'Привет! Мы - Boundary. Мы\n' +
      '            занимаемся поставкой в Россию лучших брендов со всего мира. Мы гарантируем, что все\n' +
      '            продукты являются подлинными, и если товар, по каким-либо причинам окажется\n' +
      '            некачественным, мы вернем ваши деньги. Кроме того, мы предоставляем бесплатную гарантию.\n' +
      '            Мы осуществляем трансграничную торговлю, которая включает в себя множество сложных\n' +
      '            процессов. Однако мы взяли на себя эту сложную работу, чтобы сделать процесс покупки для\n' +
      '            вас максимально простым. Вы можете сделать заказ, оплатить его в рублях, отслеживать\n' +
      '            посылку и ждать доставки прямо к вам домой.',
  },
  DeliveryPage: {
    title: 'Условия доставки и оплаты',
    tabsData: [
      {
        id: 'delivery',
        label: 'Доставка',
        content:
          'Товары Boundary доставляются из-за рубежа с нашего склада и со складов наших партнеров. Мы стараемся максимально сократить время доставки товаров. Обычно срок составляет 2-4 недели и будет указан в карточке товара.\n' +
          '\n' +
          'Вы сможете отслеживать передвижение вашего заказа в личном кабинете.\n' +
          '\n' +
          'Так как все посылки доставляются из-за рубежа, они считаются международными отправлениями и проходят таможенное оформление согласно Таможенному Кодексу, вне зависимости от стоимости и веса, в соответствии с приказом ФТС от 05.07.2018 №1060.\n' +
          '\n',
      },
      {
        id: 'Payment',
        label: 'Оплата',
        content:
          'Способы оплаты:\n' +
          '\n' +
          'Мы принимаем оплату онлайн на сайте любой картой российских банков или через Систему быстрых платежей (СБП) в приложении банка.\n' +
          '\n' +
          'Порядок оплаты:\n' +
          '\n' +
          'Оплата заказа происходит на последнем этапе его оформления. Сразу после получения денежных средств мы резервируем выбранный вами товар у поставщика. До этого момента цена и наличие вещей могут измениться.\n' +
          '\n' +
          'Что входит в итоговую стоимость заказа:\n' +
          '\n' +
          'Итоговая стоимость заказа состоит из цены товара, доставки и таможенной пошлины. Таможенная пошлина будет расчитана только в тех случаях, когда сумма ваших покупок более 1000 евро (по курсу ЦБ) и/или весом более 31 кг.',
      },
      {
        id: 'warranty',
        label: 'Гарантия',
        content:
          'Гарантия на товар:\n' +
          '\n' +
          'Мы предоставляем гарантию на три месяца с момента получения посылки на товары из категорий «Электроника» и «Бытовая техника». В случае, если в течение этого времени вы обнаружили неисправность, вам необходимо связаться с нами в Telegram или по электронной почте и выслать фото/видео и описание брака. Мы заберем товар и сдадим в наш сервисный центр для дальнейшей проверки качества:\n' +
          '\n' +
          'Если брак подтверждается и подлежит ремонту, то мы устраняем его и возвращаем вам устройство назад;\n' +
          'Если же сервисный центр сообщает о невозможности починки, то мы возвращаем вам денежные средства и забираем бракованное устройство.\n' +
          'Важно! Диагностика техники проводится исключительно в нашем авторизованном сервисном центре. В случае, если ремонт или проверка качества были проведены в стороннем сервисном центре, мы не сможем компенсировать вам денежные средства.\n' +
          '\n' +
          'Гарантия не распространяется на категории «Игрушки и игры», «Витамины и БАДы», «Одежда и обувь».',
      },
    ],
  },
};
