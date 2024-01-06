'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React, { useState } from 'react';

const DeliveryAccordion = () => {
  // const [selectedKeys, setSelectedKeys] = useState(['1']);
  return (
    <Accordion
      variant="splitted"
      // selectedKeys={selectedKeys}
      // onSelectionChange={(value) => {
      //   if (typeof 'any' === value) {
      //     setSelectedKeys(value);
      //   }
      // }}
    >
      <AccordionItem className="font-extrabold" key={0} title={'Доставка'}>
        <div className="mb-2 font-normal">
          Товары Boundary доставляются из-за рубежа с нашего склада и со складов наших партнеров. Мы
          стараемся максимально сократить время доставки товаров. Обычно срок составляет 3-4 недели
          и будет указан в карточке товара.
        </div>
        <div className="mb-2 font-normal">
          Вы сможете отслеживать передвижение вашего заказа в личном кабинете.
        </div>
        <div className="font-semibold">
          Для быстрого и беспроблемного таможенного оформления просим Вас обратить внимание на
          следующие моменты:
        </div>
        <div className="mb-6 font-normal">
          <ul>
            <li className="ml-4">
              1. При заказе на сайте будет необходимо предоставить свои паспортные данные. Это надо
              сделать только один раз при первом заказе. Далее мы будем использовать их для
              оформления последующих ваших заказов;
            </li>
            <li className="ml-4">
              2. Мы ограничиваем количество однотипных товаров в одном заказе в зависимости от его
              категории. В категориях «Техника» можно купить не более двух единиц с одним артикулом
              одновременно, а в категориях «Одежда и обувь» — не более четырех одинаковых вещей с
              одним артикулом. При заказе большего количества таможенные органы могут признать
              посылку коммерческой партией. Такие посылки не подлежат таможенному оформлению и будут
              аннулированы;
            </li>
            <li className="ml-4">
              3. Лимиты суммы и/или веса отправления, не облагаемые таможенной пошлиной, составляют
              1000 евро или 31 кг на одну посылку. Пошлина рассчитывается и включается в итоговую
              сумму только при превышении лимитов в момент оплаты заказа на сайте, в дальнейшем мы
              уже оплачиваем ее во время таможенного оформления. Никаких дополнительных платежей до
              получения заказа не будет. По величине пошлины Таможенная Служба установила следующие
              правила: если посылка превышает указанные выше лимиты, ФТС взимает пошлину из расчета
              15% от превышения суммы или 2 евро за каждый килограмм от превышения веса в
              зависимости от того, что из этого больше. Данное ограничение распространяется на одну
              посылку. Количество посылок, получаемых в месяц, не ограничено.
            </li>
          </ul>
        </div>

        <div className="font-semibold">Мы предлагаем два способа доставки:</div>
        <div className="mb-2 font-normal">
          <ul>
            <li className="ml-4">
              1. Курьерская доставка: Вы указываете адрес доставки, а мы – примерный день и время,
              когда заказ будет у вас. Как только посылка прибудет в ваш город, мы напишем вам
              сообщение в Telegram и письмо на электронную почту с трек-номером и ссылкой на сайт
              транспортной компании, где будет указана плановая дата и время доставки. Если они вам
              не подойдут, то доставку можно будет перенести на удобные вам день и время. В
              назначенную дату курьер свяжется с вами, чтобы предупредить о своем приезде (не менее,
              чем за час до доставки). Курьер также может попросить предъявить документ, указанный
              во время оформления заказа. При получении посылки обязательно обратите внимание на
              внешнюю упаковку! В случае обнаружения каких-либо повреждений, необходимо вместе с
              курьером составить акт о повреждении посылки и вскрыть ее для оценки состояние
              содержимого. В случае, если товар тоже поврежден, отразить это в акте.
            </li>
            <li className="ml-4">
              2. Доставка до ПВЗ: Вы выбираете пункт выдачи, в котором вам удобно забрать посылку.
              Для получения будет необходимо назвать номер заказа. Так как товар предоплачен, у вас
              могут попросить предъявить документ, указанный во время оформления заказа. При
              получении посылки обязательно обратите внимание на внешнюю упаковку! Если она
              повреждена, то необходимо там же составить акт о повреждении посылки и вскрыть ее для
              оценки состояния содержимого. В случае, если товар тоже поврежден, отразить это в
              акте.
            </li>
          </ul>
        </div>
        <div className="font-normal my-6">
          Обратите Внимание! Мы рекомендуем снимать вскрытие посылки на видео. Это поможет быстрее
          разобраться в ситуации и решить возникшие проблемы.
        </div>
      </AccordionItem>
      <AccordionItem className="font-extrabold" key={1} title={'Оплата'}>
        <div className="mb-4 font-normal">
          Мы принимаем оплату онлайн на сайте любой картой российских банков или через Систему
          быстрых платежей (СБП) в приложении банка.
        </div>
        <div className="uppercase mb-2 font-semibold">Порядок оплаты:</div>
        <div className="mb-6 font-normal">
          Поскольку мы осуществляем международную доставку, оплата производится при оформлении
          заказа. Сразу после получения денежных средств мы резервируем выбранный вами товар у
          поставщика. До этого момента цена и наличие вещей могут измениться.
        </div>
        <div className="uppercase mb-2 font-semibold">Таможенная пошлина:</div>
        <div className="mb-6 font-normal">
          Поскольку мы осуществляем международную доставку, оплата производится при оформлении
          заказа. Сразу после получения денежных средств мы резервируем выбранный вами товар у
          поставщика. До этого момента цена и наличие вещей могут измениться.
        </div>
        <div className="mb-2 font-semibold">Что входит в итоговую стоимость заказа:</div>
        <div className="mb-6 font-normal">
          Итоговая стоимость заказа состоит из цены товара, комиссии сервиса, доставки и таможенной
          пошлины. Таможенная пошлина будет расчитана только в тех случаях, когда сумма ваших
          покупок более 1000 евро (по курсу ЦБ) и/или весом более 31 кг.
        </div>
        <div className="mb-2 font-semibold">Порядок уплаты таможенной пошлины:</div>
        <div className="mb-6 font-normal">
          При заказе товаров из-за границы в РФ пошлиной облагаются только посылки стоимостью более
          1000 евро или весом более 31 кг. Если стоимость и вес ниже, то оплачивать ничего не нужно.
          Сумма таможенной пошлины для заказа рассчитывается автоматически во время его оформления и
          включена в итоговую стоимость покупки. Вы сможете ее увидеть в отдельной строке перед
          оплатой. Никаких дополнительных платежей больше не потребуется.
        </div>
        <div className="mb-6 font-normal">
          В случае получения запроса от таможенного брокера или каких-либо смс о дополнительных
          платежах, пожалуйста, свяжитесь с нашими менеджерами для урегулирования вопроса. Также
          если сумма пошлины изменится в большую или меньшую сторону от предварительного расчета,
          разница не возмещается/не требуется к дополнительной оплате клиентом.
        </div>
        <div className="mb-2 font-semibold">Как рассчитывается таможенная пошлина:</div>
        <div className="mb-4 font-normal">
          Величина таможенной пошлины определяется путем сравнения двух показателей и выбора
          наибольшего из двух значений:
        </div>
        <div className="mb-2 font-normal">
          - 15% от разницы стоимости товара и порога беспошлинной торговли — 1000 евро (до
          01.04.2023);
        </div>
        <div className="mb-2 font-normal">
          - 2 евро за каждый килограмм свыше весового порога беспошлинной торговли 31 кг.
        </div>
        <div className="mb-6 font-normal">
          Расчет на сайте производится по курсу ЦБ на дату оформления заказа.
        </div>
        <div className="mb-2 font-semibold">Примеры расчета таможенной пошлины:</div>
        <div className="font-normal">
          <b>Пример 1.</b> Для отправления весом 20 кг и стоимостью 100 000 рублей пошлина будет
          рассчитываться следующим образом (например, по курсу ЦБ на дату заказа 1 евро равен 96
          рублей):
        </div>
        <div className="mb-6 font-normal">
          100 000 ÷ 96 = 1042 евро (это стоимость заказа)(1042 - 1000) * 15% = 6,3 евро
          <p>
            Получается, что лимит превышен на 42 евро, и таможенная пошлина составит 6,3 евро или
            605 рублей.
          </p>
        </div>
        <div className="font-normal">
          <b>Пример 2.</b> Для отправления весом 40 кг и стоимостью 50 000 рублей пошлина будет
          рассчитываться следующим образом (например, по курсу ЦБ на дату заказа 1 евро равен 96
          рублей):
        </div>
        <div className="mb-2 font-normal">
          Расчет по весу заказа:(40-31) * 2 = 18 евро. 18 евро = 1728 рублей (в примере 1 евро = 96
          рублей на дату заказа по курсу ЦБ)
          <p>
            Получается, что лимит превышен на 9 кг, и таможенная пошлина составит 18 евро или 1728
            рублей.
          </p>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default DeliveryAccordion;