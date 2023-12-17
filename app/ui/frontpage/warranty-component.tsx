import React from 'react';
import { CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function WarrantyComponent() {
  return (
    <div className="flex items-center flex-col justify-start w-full px-2 mb-6">
      <h2 className="mb-2">В каких ситуациях возможен возврат:</h2>
      <div className="flex justify-center">
        <div className="flex w-10 h-10 mr-4 p-2 rounded-lg bg-green-500 text-center text-white">
          <ShieldCheckIcon />
        </div>
        <div className="text-md font-normal leading-6">
          Возврату подлежат товары с заводским браком или поврежденные при доставке, также те
          товары, которые доставили вам по ошибке.
          <br /> Вернуть вещь по каким-либо иным личным причинам, к сожалению, будет невозможно.
        </div>
      </div>
    </div>
  );
}
