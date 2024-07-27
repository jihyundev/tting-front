'use client'
import Image from "next/image";
import {useRouter} from 'next/navigation'
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useSearchIdeas} from "@/hooks/use-search-ideas";
import {IdeaItemCard} from "@/components/idea-item-card";
import {IntroCard} from "@/components/intro-card";
import {LoadingAnimation} from "@/components/loading-animation";
import {SearchBar} from "@/components/search-bar";
import {ListFilter} from "@/components/list-filter";
import {Button} from "@/components/ui/button";
import {IdeaItemSelectCard} from "@/components/idea-item-select-card";
import {IdeaItem} from "@/types/idea-fetch";

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

    if (!data?.pages?.[0]?.data.count && !isLoading && !isError) {
        return <IntroCard />
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
                            <Button
                                onClick={() => setMode("select")}
                            >
                                아이디어 선택
                            </Button>
                        )}
                        {mode === "select" && (
                            <Button
                                onClick={navigateToIdeaCreate}
                                disabled={selectedIdeas.length === 0}
                            >
                                조합하기
                            </Button>
                        )}
                    </div>
                </div>
                {data?.pages?.map((page, pageIndex) => (
                    <div key={pageIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-1">
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
