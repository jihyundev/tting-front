'use client'

import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {TagItemCard} from "@/components/tag-item-card";
import {useTagList} from "@/hooks/use-tag-list";
import {ListFilter} from "@/components/list-filter";

export const TagList = () => {
    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        setIsDescending
    } = useTagList();

    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        threshold: 0.3
    })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
        <div className="w-full">
            <div className="sticky top-0 right-0 w-full bg-gray-200">
                <div className="py-5 flex justify-center">
                    <ListFilter setIsDescending={setIsDescending} />
                </div>
            </div>
            {data?.pages.map((page, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {page.data.data.map((tag, j) => (
                        <TagItemCard key={j} tag={tag}/>
                    ))}
                </div>
            ))}
        </div>
    )
}
