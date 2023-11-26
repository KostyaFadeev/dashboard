import {
  CheckCircleIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx('inline-flex text-white items-center rounded-full px-2 py-1 text-xs', {
        'bg-gray-600': status === 'pending',
        'bg-green-500 text-white': status === 'paid',
        'bg-cyan-500 text-white': status === 'collect',
        'bg-indigo-400': status === 'deliveryToRussia',
        'bg-teal-400': status === 'deliveryInRussia',
        'bg-green-500': status === 'deliveryOk',
      })}
    >
      {status === 'pending' ? (
        <>
          Ожидаемо
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Оплачено
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'collect' ? (
        <>
          В сборке
          <ClipboardDocumentListIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'deliveryToRussia' ? (
        <>
          Отправлено в Россию
          <TruckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'deliveryInRussia' ? (
        <>
          Отправлено по РФ
          <TruckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'deliveryOk' ? (
        <>
          Доставлено
          <CheckCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
