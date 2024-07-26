'use client'

import {SearchIcon} from "@/components/icons";
import {CircleX} from "lucide-react";

export const SearchBar = ({
    value = "",
    onSearch = () => {},
    onChange = () => {}
}: {
    value?: string,
    onSearch?: (searchText: string) => void,
    onChange?: (searchText: string) => void
}) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const onInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch(value);
        }
    };

    return (
        <div className="flex items-center justify-center py-3 px-3.5 bg-white border border-gray-200 rounded-full shadow-sm h-14 w-full max-w-3xl">
            <SearchIcon className="h-9 w-9" />
            <input
                type="text"
                maxLength={50}
                placeholder="아이디어 검색하기"
                className="flex-1 ml-3 border-none outline-none text-2xl text-gray-600 placeholder-gray-400"
                value={value}
                onChange={onInputChange}
                onKeyDown={onInputKeydown}
            />
            {value && (
                <CircleX
                    className="h-7 w-7 text-gray-500 cursor-pointer"
                    onClick={() => onChange("")}
                />
            )}
        </div>
    )
}
