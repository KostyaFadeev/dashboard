'use client';
import React from 'react';

import { Card, CardBody } from '@nextui-org/card';
import { Tab, Tabs } from '@nextui-org/react';
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import DeliveryComponent from '@/app/ui/frontpage/delivery-component';
import PaymentComponent from '@/app/ui/frontpage/payment-component';
import WarrantyComponent from '@/app/ui/frontpage/warranty-component';

interface Object {
  id: string;
  label: string;
  content: string;
}

interface CustomTabsProps {
  data: Array<Object>;
}

const iconMap = {
  delivery: ClipboardDocumentCheckIcon,
  payment: CreditCardIcon,
  warranty: ShieldCheckIcon,
};

const componentMap = {
  delivery: DeliveryComponent,
  payment: PaymentComponent,
  warranty: WarrantyComponent,
};

export default function CustomTabs({ data }: CustomTabsProps) {
  return (
    <div className="flex w-full flex-col">
      {data && (
        <div className="flex w-full flex-col">
          <Tabs aria-label="Dynamic tabs" items={data}>
            {(data) => {
              const Icon = iconMap[data.id as keyof typeof iconMap];
              const Component = componentMap[data.id as keyof typeof componentMap];
              return (
                <Tab
                  key={data.id}
                  className="text-lg lg:text-xl"
                  title={
                    <div className="flex items-center space-x-2">
                      {Icon ? <Icon width={20} /> : null}
                      <span>{data.label}</span>
                    </div>
                  }
                >
                  <Card>
                    <CardBody className="text-md lg:text-lg p-2">{Component ? <Component /> : null}</CardBody>
                  </Card>
                </Tab>
              );
            }}
          </Tabs>
        </div>
      )}
    </div>
  );
}
