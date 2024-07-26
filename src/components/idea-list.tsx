'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import {useSearchIdeas} from "@/hooks/use-search-ideas";
import {IdeaItemCard} from "@/components/idea-item-card";
import {IntroCard} from "@/components/intro-card";
import {LoadingAnimation} from "@/components/loading-animation";
import {SearchBar} from "@/components/search-bar";

export const IdeaList = () => {
    const [searchText, setSearchText] = useState("");

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        setSearchText: setSearchQueryText,
    } = useSearchIdeas({});

    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        threshold: 0.3
    })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    const handleSearch = (searchText: string) => {
        setSearchText(searchText);
        setSearchQueryText(searchText);
    };

    if (!data?.pages?.[0]?.data.count && !isLoading && !isError) {
        return <IntroCard />
    }

    return (
        <>
            <div>
                <div className="sticky w-full my-5 flex justify-center">
                    <SearchBar
                        value={searchText}
                        onSearch={handleSearch}
                        onChange={setSearchText}
                    />
                </div>
                {data?.pages?.map((page, pageIndex) => (
                    <div key={pageIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {page.data.data.map(idea => (
                            <IdeaItemCard key={idea.id} idea={idea} />
                        ))}
                        <div ref={ref} />
                    </div>
            ))}
                {isLoading && (
                    <div className="w-full h-full flex justify-center align-center">
                        <div className="w-48 h-36">
                            <LoadingAnimation />
                        </div>
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
