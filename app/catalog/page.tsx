import React, { Suspense } from 'react';
import { Metadata } from 'next';

import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';
import {fetchDataCards, fetchInvoicesPages, getCurrency} from '@/app/lib/data';
import Catalog from "@/app/ui/catalog/catalog";

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог товаров для покупателя',
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const dataCardList = await fetchDataCards();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  const currency = await getCurrency();

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 border-gray-200 border-1 rounded-md">
        <Search placeholder="Найти товар..."/>
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
        <Catalog data={dataCardList} currency={currency} />
      </Suspense>
      <div className="mt-5 mb-4 flex w-full justify-center">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}
