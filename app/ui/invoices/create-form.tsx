'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { CustomerField } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  TruckIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Выберите клиента
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Выберите клиента
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.customerId ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.customerId.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Введите сумму заказа
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Введите сумму в USD"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.amount ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.amount.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Статусы заказа</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex flex-wrap gap-4">
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                  aria-describedby="customer-error"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                >
                  Ожидает оплаты <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Оплачено <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="collect"
                  name="status"
                  type="radio"
                  value="collect"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="collect"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  В сборке <ClipboardDocumentListIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="deliveryToRussia"
                  name="status"
                  type="radio"
                  value="deliveryToRussia"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="deliveryToRussia"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-indigo-400 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Отправлено в Россию <TruckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="deliveryInRussia"
                  name="status"
                  type="radio"
                  value="deliveryInRussia"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="deliveryInRussia"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-teal-400 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Отправлено по РФ <TruckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex w-full md:w-auto items-center">
                <input
                  id="deliveryOk"
                  name="status"
                  type="radio"
                  value="deliveryOk"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="deliveryOk"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Доставлено <CheckCircleIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
            {state.errors?.status ? (
              <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-red-500">
                {state.errors.status.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Отмена
        </Link>
        <Button type="submit">Создать заявку</Button>
      </div>
    </form>
  );
}
