'use client'

import {useEffect} from "react";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {TagItemCard} from "@/components/tag-item-card";
import {useTagList} from "@/hooks/use-tag-list";
import {ListFilter} from "@/components/list-filter";
import {TagAddButton} from "@/components/tag-add-button";
import {SkeletonCard} from "@/components/skeleton-card";

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

    if (isError) {
        return (
            <div className="w-full h-full flex justify-center align-center">
                <Image
                    src="/brand/error-logo.svg"
                    alt="error-logo"
                    width={280}
                    height={200}
                />
                <div>
                    <div>에러가 발생했어요.</div>
                    <div>에러: {error ? error.message : '알 수 없음'}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="sticky top-0 right-0 w-full bg-gray-200">
                <div className="py-5 flex justify-between">
                    <ListFilter setIsDescending={setIsDescending} />
                    <TagAddButton />
                </div>
            </div>
            {data?.pages.map((page, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {page.data.data.map((tag, j) => (
                        <TagItemCard key={j} tag={tag}/>
                    ))}
                    <div ref={ref} />
                </div>
            ))}
            {isLoading && (
                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            )}
        </div>
    )
}
