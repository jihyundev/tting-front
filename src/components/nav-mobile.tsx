import Link from "next/link";
import {Logo} from "@/components/icons";
import {House, Package, Tag, PieChart, PanelLeft} from "lucide-react";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

export const NavMobile = () => {
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
