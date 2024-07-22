import Link from "next/link";
import {Logo} from "@/components/icons";
import {House, Package, Tag, PieChart} from "lucide-react";
import {NavItem} from "@/components/nav-item";
import {Separator} from "@/components/ui/separator";

export function NavSidebar() {
    return (
        <>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Logo className="h-10 w-10 transition-all group-hover:scale-110" />
                    </Link>
                    <Separator />

                    <NavItem href="/" label="홈">
                        <House className="h-5 w-5" />
                    </NavItem>

                    <NavItem href="/idea/create" label="만들기">
                        <Package className="h-5 w-5" />
                    </NavItem>

                    <NavItem href="/tags" label="태그">
                        <Tag className="h-5 w-5" />
                    </NavItem>

                    <NavItem href="/insight" label="인사이트">
                        <PieChart className="h-5 w-5" />
                    </NavItem>
                </nav>
            </aside>
        </>
    );
}
