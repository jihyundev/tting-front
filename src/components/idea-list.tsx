'use client'
import Image from "next/image";
import {useState} from "react";
import {useSearchIdeas} from "@/hooks/use-search-ideas";
import {IdeaItemCard} from "@/components/idea-item-card";
import {IntroCard} from "@/components/intro-card";
import {LoadingAnimation} from "@/components/loading-animation";
import {SearchBar} from "@/components/search-bar";

export const IdeaList = () => {
    const [searchText, setSearchText] = useState("");
    const {data, isLoading, isError, error, setSearchText: setSearchQueryText} = useSearchIdeas({});

    const handleSearch = (searchText: string) => {
        setSearchText(searchText);
        setSearchQueryText(searchText);
    };

    if (!data?.data?.data?.length && !isLoading && !isError) {
        return <IntroCard />
    }

    return (
        <>
            <div className="w-full">
                <div className="sticky w-full my-5 flex justify-center">
                    <SearchBar
                        value={searchText}
                        onSearch={handleSearch}
                        onChange={setSearchText}
                    />
                </div>
                {data?.data?.data?.length && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {data.data.data.map(idea => (
                            <IdeaItemCard key={idea.id} idea={idea} />
                        ))}
                    </div>
                )}
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
