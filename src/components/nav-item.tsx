'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import {clsx} from "clsx";

export function NavItem({ href, label, children }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={clsx(
                'w-full flex flex-col gap-1.5 justify-center items-center p-1 rounded-lg text-muted-foreground transition-colors hover:text-foreground',
                {
                    'text-black': pathname === href
                }
            )}
        >
            <div className={clsx(
                'w-12 h-7 rounded-2xl flex items-center justify-center p-1',
                {
                    'bg-accent': pathname === href
                }
            )}>{children}</div>
            <div className="text-xs text-center">{label}</div>
        </Link>
    );
}
