'use client'
import {useInsightSummary} from "@/hooks/use-insight-summary";
import {Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription} from "@/components/ui/card";
import {Typography} from "@/components/typography";

const SummaryCard = ({title, description, value}: {
    title: string,
    description: string,
    value: number
}) => {
    return (
        <Card className="w-1/3">
            <CardHeader className="pb-3">
                <Typography variant='header5'>{title}</Typography>
                <CardDescription className="hidden">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Typography variant="header3">
                    {value}
                </Typography>
            </CardContent>
            <CardFooter>
                <Typography variant="caption">
                    {description}
                </Typography>
            </CardFooter>
        </Card>
    )
};

export const InsightSummary = () => {
    const {data, isLoading, isError} = useInsightSummary();
    return (
        <div className="flex gap-6">
            <SummaryCard
                title="누적 아이디어 수"
                description="현재까지 생성된 총 아이디어 수"
                value={data?.data.totalIdeas || 0}
            />
            <SummaryCard
                title="아이디어 생성 수"
                description="최근 30일간 추가된 아이디어 수"
                value={data?.data.recentIdeasAdded || 0}
            />
            <SummaryCard
                title="아이디어 활용 지수"
                description="최근 30일간 아이디어 활용 지수"
                value={data?.data.recentUsageIndex || 0}
            />
        </div>
    )
}
