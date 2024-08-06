import {Typography} from "@/components/typography";
import {InsightSummary} from "@/components/insight-summary";
import {InsightDailyCount} from "@/components/insight-daily-count";

export default function InsightPage() {
    return (
        <div>
            <Typography variant="subtitle1" className="text-center mb-10">
                아이디어 통계와 분석을 준비 중이에요. 곧 만나요!
            </Typography>
            <div className="flex flex-col gap-5">
                <InsightSummary />
                <InsightDailyCount />
            </div>
        </div>
    )
}
