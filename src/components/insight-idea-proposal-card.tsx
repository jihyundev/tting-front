'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {InsightIdeaProposal} from "@/types/insights-fetch";
import {Typography} from "@/components/typography";
import {Button} from "@/components/ui/button";
import {useInsightProposalReject} from "@/hooks/use-insight-proposal-reject";
import {useRouter} from 'next/navigation'

export const InsightIdeaProposalCard = ({ proposal }: {
    proposal: InsightIdeaProposal
}) => {
    const router = useRouter();
    const {reject} = useInsightProposalReject();
    const onReject = () => {
        reject({proposalId: proposal.id})
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{proposal.persona}</CardTitle>
                <CardDescription className="hidden">{proposal.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <Typography variant={"body3"}>
                    {proposal.content}
                </Typography>
            </CardContent>
            <CardFooter className="flex gap-3">
                <Button variant="outline" onClick={onReject}>괜찮아요</Button>
                <Button onClick={() => router.push("/idea/add")}>아이디어 추가</Button>
            </CardFooter>
        </Card>
    )
}
