import {Typography} from "@/components/typography";
import {InsightSummary} from "@/components/insight-summary";
import {InsightDailyCount} from "@/components/insight-daily-count";
import {InsightTagStatus} from "@/components/insight-tag-status";
import {InsightBalance} from "@/components/insight-balance";
import {InsightTitle} from "@/components/insight-title";

export default function InsightPage() {
    return (
        <div>
            <InsightTitle />
            <div className="flex flex-col gap-5 max-w-3xl">
                <InsightSummary />
                <InsightDailyCount />
                <div className="md:flex gap-5">
                    <InsightTagStatus />
                    <InsightBalance />
                </div>
            </div>
        </div>
    )
}
