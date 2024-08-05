'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useSearchIdeas} from "@/hooks/use-search-ideas";
import {useTagDetail} from "@/hooks/use-tag-detail";
import {IdeaItemCard} from "@/components/idea-item-card";
import {ListFilter} from "@/components/list-filter";
import {Typography} from "@/components/typography";
import {TagEditButton} from "@/components/tag-edit-button";
import {SkeletonCard} from "@/components/skeleton-card";
import {IntroCard} from "@/components/intro-card";

export const TagIdeaList = ({ tagId = '' }: {
    tagId: string
}) => {
    const {
        data: tagData,
        isLoading: tagIsLoading,
        isError: tagIsError,
    } = useTagDetail({ tagId });

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        setIsDescending: setQueryIsDescending
    } = useSearchIdeas({
        tagId
    });

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
        <>
            <div className="w-full">
                <header className="w-full min-h-12 sticky top-0 flex justify-center items-center text-center mb-6 bg-gray-200">
                    <Typography variant="subtitle1">{tagData?.data?.name || ''} 아이디어를 가져왔어요.</Typography>
                </header>
                <div className="sticky top-0 right-0 w-full bg-gray-200">
                    <div className="py-5 flex justify-between">
                        <ListFilter setIsDescending={setQueryIsDescending} />
                        {tagData?.data && (
                            <TagEditButton tag={tagData.data} />
                        )}
                    </div>
                </div>
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
                        {data?.pages?.map((page, pageIndex) => (
                            <>
                                {page.data.data.map(idea => (
                                    <IdeaItemCard key={idea.id} idea={idea} />
                                ))}
                                <div ref={ref} key={pageIndex}/>
                            </>
                        ))}
                    </div>

                {(!data?.pages?.[0]?.data.count && !isLoading && !isError) && (
                    <div className="mt-40 w-full flex justify-center">
                        <div className="max-w-xl">
                            <IntroCard />
                        </div>
                    </div>
                )}
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
                {isError && (
                    <div className="w-full h-full flex justify-center align-center">
                        <Image
                            src="/brand/error-logo.svg"
                            alt="error-logo"
                            width={280}
                            height={200}
                        />
                        에러가 발생했어요. 에러: {error ? error.message : '알 수 없음'}
                    </div>
                )}
            </div>
        </>
    );
}
