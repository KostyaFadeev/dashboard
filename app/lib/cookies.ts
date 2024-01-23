"use server";
import {cookies} from "next/headers";

const shouldUseHttps =
    process.env.NEXT_PUBLIC_STOREFRONT_URL?.startsWith("https") || !!process.env.NEXT_PUBLIC_VERCEL_URL;

export async function addItem(id, selectSize: { toString: () => string }) {
    const tempValue = await getItems();
    let cookiesArray = [];

    if (tempValue) {
        cookiesArray = tempValue.split('|');
    }

    const cookiesStr = [...cookiesArray, id + '?' + selectSize].join('|');

    cookies().set("checkoutIds", cookiesStr, {
        secure: shouldUseHttps,
        sameSite: "lax",
        httpOnly: true,
    });

    console.log(cookiesStr);
}

export async function getItems() {
    const checkoutId = cookies().get("checkoutIds")?.value || "";
    return (
        checkoutId
    )
}

export async function deleteItem(id, size) {
    const findValue = id + '?' + size;
    const tempValue = await getItems();
    let cookiesArray = [];

    if (tempValue) {
        cookiesArray = tempValue.split('|');
    }
    const deleteArray = cookiesArray.filter(item => item !== findValue);

    const cookiesStr = deleteArray.join('|');

    cookies().set("checkoutIds", cookiesStr, {
        secure: shouldUseHttps,
        sameSite: "lax",
        httpOnly: true,
    });
}

export async function deleteAll() {
    const cookiesStr = '';

    cookies().set("checkoutIds", cookiesStr, {
        secure: shouldUseHttps,
        sameSite: "lax",
        httpOnly: true,
    });
}
