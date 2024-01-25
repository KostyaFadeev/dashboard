'use client'

import React from "react";
import { UserIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

export const MobileMenu = () => {
    return (
        <Link href="/login" className="relative flex items-center" data-testid="CartNavItem">
            <UserIcon color={'rgba(113, 113, 120, 1)'} width={24} height={24} className="h-6 w-6 shrink-0" aria-hidden="true" />
        </Link>
    )}
