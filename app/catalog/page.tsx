import React, {Suspense} from "react";
import {Metadata} from "next";
import {lusitana} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import Pagination from "@/app/ui/invoices/pagination";
import {fetchInvoicesPages} from "@/app/lib/data";
import CardItem from "@/app/ui/card";

export const metadata: Metadata = {
    title: 'Каталог',
    description: 'Каталог товаров для покупателя'
};

export default async function CatalogPage({searchParams,}: {
    searchParams?: { query?: string; page?: string; };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Каталог товаров</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 border-gray-200 border-1 rounded-md">
                <Search placeholder="Найти товар..."/>
            </div>
            {/*<Filters/>*/}
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                <div className="flex gap-2 flex-wrap mt-6 justify-center">
                    {Array(12)
                    .fill('')
                    .map((i, index) => (
                        <CardItem key={index}/>
                    ))}
                </div>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </div>
    );
}
