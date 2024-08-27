'use client';

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {LoadingIdeaCreate} from "@/components/loading-idea-create";
import {useIdeasCombine} from "@/hooks/use-ideas-combine";
import {IdeaItem} from "@/types/idea-fetch";
import {CommonError} from "@/components/common-error";

export default function IdeaCombinePage() {
    const router = useRouter();
    const {mutate, isPending, isSuccess, isError, error, data} = useIdeasCombine();

    useEffect(() => {

        // sessionStorage 에 저장된 selectedIdeas 데이터를 불러온다.
        const selectedIdeasString = sessionStorage.getItem("selectedIdeas")
        if (selectedIdeasString) {
            const preSelectedIdeas = JSON.parse(selectedIdeasString) as IdeaItem[];
            const prefilledInput = preSelectedIdeas.map(idea => idea.content).join("\n \n")
            mutate({text: prefilledInput});
        }
    }, [mutate]);

    useEffect(() => {
        if (isSuccess && data) {
            sessionStorage.removeItem("selectedIdeas");

            const result = {
                content: data.data.content,
                tags: data.data.tags
            }

            sessionStorage.setItem("ideaCombined", JSON.stringify(result));
            router.push("/idea/add?prefill=true");
        }
    }, [isSuccess, data, router]);

    if (isError) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <CommonError error={error} />
                </div>
            </div>
        )

    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex justify-center items-center">
                <LoadingIdeaCreate />
            </div>
        </div>
    )
}
