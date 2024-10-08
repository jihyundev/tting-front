import {Card} from "@/components/ui/card";
import {InsightSummary} from "@/components/insight/insight-summary";
import {InsightDailyCount} from "@/components/insight/insight-daily-count";
import {InsightTagStatus} from "@/components/insight/insight-tag-status";
import {InsightBalance} from "@/components/insight/insight-balance";
import {InsightTitle} from "@/components/insight/insight-title";
import {InsightIdeaProposals} from "@/components/insight/insight-idea-proposals";

export default function InsightPage() {
    return (
        <div className="mb-7">
            <InsightTitle />
            <div className="md:flex gap-7">
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
