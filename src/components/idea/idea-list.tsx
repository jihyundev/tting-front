'use client'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useSearchIdeas} from "@/hooks/use-search-ideas";
import {IdeaItemCard} from "@/components/idea/idea-item-card";
import {IntroCard} from "@/components/intro-card";
import {SearchBar} from "@/components/search-bar";
import {ListFilter} from "@/components/list-filter";
import {Button} from "@/components/ui/button";
import {IdeaItemSelectCard} from "@/components/idea/idea-item-select-card";
import {IdeaItem} from "@/types/idea-fetch";
import {IdeasDeleteButton} from "@/components/idea/ideas-delete-button";
import {SkeletonCard} from "@/components/skeleton-card";
import {CommonError} from "@/components/common-error";

export const IdeaList = () => {
    const [searchText, setSearchText] = useState("");
    const [mode, setMode] = useState<"default" | "select">("default");
    const [selectedIdeas, setSelectedIdeas] = useState<IdeaItem[]>([]);
    const router = useRouter();

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        setSearchText: setSearchQueryText,
        setIsDescending: setQueryIsDescending
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

    const onSelectIdea = (idea: IdeaItem) => {
        setSelectedIdeas([...selectedIdeas, idea]);
    };

    const onUnselectIdea = (idea: IdeaItem) => {
        setSelectedIdeas(selectedIdeas.filter(selectedIdea => selectedIdea.id !== idea.id));
    }

    const navigateToIdeaCreate = () => {
        // 데이터 가지고 아이디어 생성 화면으로 이동
        sessionStorage.setItem("selectedIdeas", JSON.stringify(selectedIdeas));
        router.push("/idea/create?prefill=true");
    }

    const onDeleteIdeas = () => {
        setMode("default")
        setSelectedIdeas([]);
    }

    if (!data?.pages?.[0]?.data.count && !isLoading && !isError) {
        return (
            <div className="mt-40 w-full flex justify-center">
                <div className="max-w-xl">
                    <IntroCard />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="w-full">
                <div className="sticky top-0 right-0 w-full bg-gray-200">
                    <div className="py-5 flex justify-center">
                        <SearchBar
                            value={searchText}
                            onSearch={handleSearch}
                            onChange={setSearchText}
                        />
                    </div>
                    <div className="pb-5 flex justify-between">
                        <ListFilter setIsDescending={setQueryIsDescending} />
                        {mode === "default" && (
                            <div className="flex gap-3">
                                <Button
                                    onClick={() => router.push("/idea/add")}
                                >
                                    아이디어 추가
                                </Button>
                                <Button
                                    onClick={() => setMode("select")}
                                >
                                    아이디어 선택
                                </Button>
                            </div>
                        )}
                        {mode === "select" && (
                            <div className="flex gap-3">
                                <Button
                                    onClick={navigateToIdeaCreate}
                                    disabled={selectedIdeas.length === 0}
                                >
                                    조합하기
                                </Button>
                                <IdeasDeleteButton
                                    selectedIdeas={selectedIdeas}
                                    onDeleteIdeas={onDeleteIdeas}
                                />
                            </div>
                        )}
                    </div>
                </div>
                    <div className="mt-1 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
                        {data?.pages?.map((page, pageIndex) => (
                            <>
                                {page.data.data.map(idea => (
                                    (mode === "select") ? (
                                        <IdeaItemSelectCard
                                            key={idea.id}
                                            idea={idea}
                                            onSelect={onSelectIdea}
                                            onUnselect={onUnselectIdea}
                                        />
                                    ) : (
                                        <IdeaItemCard key={idea.id} idea={idea} />
                                    )
                                ))}
                                <div ref={ref} key={pageIndex}></div>
                            </>
                        ))}
                    </div>
                {isLoading && (
                    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-1">
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
                    <CommonError error={error} />
                )}
            </div>
        </>
    );
}
