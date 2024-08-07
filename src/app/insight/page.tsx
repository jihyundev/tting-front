import {Card} from "@/components/ui/card";
import {InsightSummary} from "@/components/insight-summary";
import {InsightDailyCount} from "@/components/insight-daily-count";
import {InsightTagStatus} from "@/components/insight-tag-status";
import {InsightBalance} from "@/components/insight-balance";
import {InsightTitle} from "@/components/insight-title";
import {InsightIdeaProposals} from "@/components/insight-idea-proposals";

export default function InsightPage() {
    return (
        <div className="mb-7">
            <InsightTitle />
            <div className="flex gap-7">
                <Card className="flex flex-col gap-5 max-w-3xl pt-7 px-9">
                    <InsightSummary />
                    <InsightDailyCount />
                    <div className="md:flex gap-5">
                        <InsightTagStatus />
                        <InsightBalance />
                    </div>
                </Card>
                <InsightIdeaProposals />
            </div>
        </div>
    )
}
