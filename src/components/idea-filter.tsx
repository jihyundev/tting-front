'use client'

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

export const IdeaFilter = ({ setIsDescending }: {
    setIsDescending: (value: boolean) => void
}) => {
    const [selectedFilter, setSelectedFilter] = useState<'최신순' | '생성순' | ''>('');

    const handleFilter = (filter: '최신순' | '생성순') => {
        setSelectedFilter(filter);
        setIsDescending(filter === '최신순');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <FilterIcon size={14} className="mr-2"/>
                    {selectedFilter || '필터'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                alignOffset={-48}
            >
                <DropdownMenuItem onClick={() => handleFilter('최신순')}>최신순</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilter('생성순')}>생성순</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
