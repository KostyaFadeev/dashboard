'use client';
import React from 'react';

import { Card, CardBody } from '@nextui-org/card';
import { Tab, Tabs } from '@nextui-org/react';

interface Object {
  id: string;
  label: string;
  content: string;
}

interface CustomTabsProps {
  data: Array<Object>;
}

export default function CustomTabs({ data }: CustomTabsProps) {
  return (
    <div className="flex w-full flex-col">
      {data && (
        <div className="flex w-full flex-col">
          <Tabs aria-label="Dynamic tabs" items={data}>
            {(data) => (
              <Tab key={data.id} className="text-xl" title={data.label}>
                <Card>
                  <CardBody className="text-lg p-6">{data.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      )}
    </div>
  );
}
