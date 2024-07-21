import Link from "next/link";
import {Logo} from "@/components/icons";
import {House, Package, Tag, PieChart, PanelLeft} from "lucide-react";
import {NavItem} from "@/components/nav-item";
import {Separator} from "@/components/ui/separator";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                        <Logo className="h-10 w-10 transition-all group-hover:scale-110" />
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <House className="h-5 w-5" />
                        홈
                    </Link>
                    <Link
                        href="/idea/create"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <Package className="h-5 w-5" />
                        만들기
                    </Link>
                    <Link
                        href="/tags"
                        className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                        <Tag className="h-5 w-5" />
                        태그
                    </Link>
                    <Link
                        href="/insight"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <PieChart className="h-5 w-5" />
                        인사이트
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

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
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <MobileNav />
                </header>
            </div>
        </>
    );
}
