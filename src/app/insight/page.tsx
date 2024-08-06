import {Typography} from "@/components/typography";
import {InsightSummary} from "@/components/insight-summary";
import {InsightDailyCount} from "@/components/insight-daily-count";
import {InsightTagStatus} from "@/components/insight-tag-status";
import {InsightBalance} from "@/components/insight-balance";

export default function InsightPage() {
    return (
        <div>
            <Typography variant="subtitle1" className="text-center mb-10">
                아이디어 통계와 분석을 준비 중이에요. 곧 만나요!
            </Typography>
            <div className="flex flex-col gap-5 max-w-3xl">
                <InsightSummary />
                <InsightDailyCount />
                <div className="flex gap-5">
                    <InsightTagStatus />
                    <InsightBalance />
                </div>
            </div>
        </div>
    )
}
