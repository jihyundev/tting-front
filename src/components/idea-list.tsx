'use client'
import Image from "next/image";
import {useIdeas} from "@/hooks/use-ideas";
import {IdeaItemCard} from "@/components/idea-item-card";
import {IntroCard} from "@/components/intro-card";
import {LoadingAnimation} from "@/components/loading-animation";

export const IdeaList = () => {
    const {data, isLoading, isError, error} = useIdeas({});

    if (isLoading) {
        return (
            <div className="h-full flex justify-center">
                <div className="w-48 h-36">
                    <LoadingAnimation />
                </div>
            </div>
        )
    }

    if (isError) {
        return <div className="h-full flex justify-center">
            <Image
                src="/brand/error-logo.svg"
                alt="error-logo"
                width={280}
                height={200}
            />
            에러가 발생했어요. 에러: {error.message}
        </div>
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data?.data?.data?.length && data.data.data.map(idea => (
                    <IdeaItemCard key={idea.id} idea={idea} />
                ))}
            </div>
            {!data?.data?.data?.length && !isLoading && !isError && <IntroCard />}
        </>
    );
}
