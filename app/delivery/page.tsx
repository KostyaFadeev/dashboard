import React from 'react';
import { Metadata } from 'next';

import CustomTabs from '@/app/ui/custom-tabs';
import { siteConfig } from '@/app/ui/site';

export const metadata: Metadata = {
  title: 'Доставка и оплата',
  description: 'Информация о доставке и оплате',
};

export default function DeliveryPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-xl lg:text-3xl font-semibold mb-10">
        {siteConfig.DeliveryPage.title}
      </h2>
      <CustomTabs data={siteConfig.DeliveryPage.tabsData} />
    </div>
  );
}
