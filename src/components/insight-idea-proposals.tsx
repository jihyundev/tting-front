'use client'

import {useInsightProposals} from "@/hooks/use-insight-proposals";
import {InsightIdeaProposalCard} from "@/components/insight-idea-proposal-card";
import {Skeleton} from "@/components/ui/skeleton";
import {CommonError} from "@/components/common-error";
import {Typography} from "@/components/typography";

export const InsightIdeaProposals = () => {
    const { data, isLoading, isError, error } = useInsightProposals();
    return (
        <div className="w-80">
            <Typography variant="header5" className="mb-2.5">아이디어 제안</Typography>
            <Typography variant="caption" className="mb-5">다양한 관점의 아이디어가 필요하신가요? 아이디어를 기반으로 새로운 아이디어를 제안해드려요.</Typography>
            {isLoading && <Skeleton className="h-80" />}
            {isError && <CommonError error={error} />}
            {data && (
                <ul>
                    {data.data.map((item) => (
                        <InsightIdeaProposalCard key={item.id} proposal={item} />
                    ))}
                </ul>
            )}
        </div>
    )
}
