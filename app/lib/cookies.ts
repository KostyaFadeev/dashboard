"use server";
import { cookies } from "next/headers";

const shouldUseHttps =
    process.env.NEXT_PUBLIC_STOREFRONT_URL?.startsWith("https") || !!process.env.NEXT_PUBLIC_VERCEL_URL;

export async function addItem(id: { toString: () => string }) {

    cookies().set("checkoutId", id.toString(), {
        secure: shouldUseHttps,
        sameSite: "lax",
        httpOnly: true,
    });
}

export async function getItem() {
    const checkoutId = cookies().get("checkoutId")?.value || "";
    console.log('checokoutId from cookies: ', checkoutId);
}
