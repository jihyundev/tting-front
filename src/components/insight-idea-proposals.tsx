'use client'

import {useInsightProposals} from "@/hooks/use-insight-proposals";
import {InsightIdeaProposalCard} from "@/components/insight-idea-proposal-card";
import {Skeleton} from "@/components/ui/skeleton";
import {CommonError} from "@/components/common-error";
import {Typography} from "@/components/typography";
import {LogoExclude} from "@/components/icons";
import {useUserProfile} from "@/hooks/use-user-profile";

export const InsightIdeaProposals = () => {
    const { data, isLoading, isSuccess, isError, error } = useInsightProposals();
    const { name } = useUserProfile();
    const isProposalsEmpty = isSuccess && data && data.data.length === 0;

    return (
        <div className="w-80">
            <Typography variant="header5" className="mb-2.5">아이디어 제안</Typography>
            <Typography variant="caption" className="mb-5">다양한 관점의 아이디어가 필요하신가요? {name || ''}님의 아이디어를 기반으로 새로운 아이디어를 제안해드려요.</Typography>
            {isLoading && <Skeleton className="h-80" />}
            {isError && <CommonError error={error} />}
            {data && (
                <ul>
                    {data.data.map((item) => (
                        <InsightIdeaProposalCard key={item.id} proposal={item} />
                    ))}
                </ul>
            )}
            {isProposalsEmpty && (
                <div className="flex flex-col justify-center items-center gap-5 mt-32">
                    <LogoExclude />
                    <Typography variant="subtitle3">
                        오늘 제안을 모두 확인했어요! <br />내일 새로운 아이디어를 제안해드릴게요 :)
                    </Typography>
                </div>
            )}
        </div>
    )
}
