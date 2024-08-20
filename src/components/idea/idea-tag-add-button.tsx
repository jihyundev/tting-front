'use client'

import {useState, useEffect} from "react";
import {Typography} from "@/components/typography";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Tag} from "@/components/tag/tag";
import {useTagList} from "@/hooks/use-tag-list";
import {Separator} from "@/components/ui/separator";
import type {TagItem} from "@/types/idea-create";

export const IdeaTagAddButton = ({ onSelectTag }: {
    onSelectTag: (tag: TagItem) => void
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
    } = useTagList({ pageSize: 50 });

    const onClickTag = (tag: TagItem) => {
        onSelectTag(tag);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredTags = data?.pages.reduce<TagItem[]>((acc, page) => {
        const filteredData = page.data.data.filter(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return acc.concat(filteredData);
    }, []);

    return (
        <Dialog>
            <DialogTrigger className="flex items-center px-2 py-3 h-9 text-ellipsis overflow-hidden rounded-full border border-gray-400 box-border">
                <Typography variant="button1">태그 추가...</Typography>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-3"></DialogTitle>
                    <DialogDescription className="hidden">아이디어에 태그를 추가해보세요</DialogDescription>
                    <Input
                        value={searchTerm}
                        placeholder="태그 검색..."
                        onChange={handleSearchChange}
                    />
                </DialogHeader>
                <Separator />
                {isError && (
                    <div>태그 목록을 불러오는 중 오류가 발생했어요.</div>
                )}
                <DialogFooter>
                    <div className="flex justify-start items-start flex-wrap gap-3 h-60 overflow-auto">
                        {filteredTags?.map((tag, j) => (
                            <DialogClose asChild key={`${tag.id} - ${j}`}>
                                <Tag
                                    size={'M'}
                                    label={tag.name}
                                    color={tag.color}
                                    onClick={() => onClickTag(tag)}
                                    readOnly={true}
                                />
                            </DialogClose>
                        ))}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
