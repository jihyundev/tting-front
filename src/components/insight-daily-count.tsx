'use client'
import {useInsightDailyCount} from "@/hooks/use-insight-daily-count";
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {Skeleton} from "@/components/ui/skeleton";
import {CommonError} from "@/components/common-error";

const chartConfig = {
    count: {
        label: "count",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const InsightDailyCount = () => {
    const { chartData, isLoading, isError, error} = useInsightDailyCount();

    return (
        <Card>
            <CardHeader>
                <CardTitle>아이디어 생성 현황</CardTitle>
                <CardDescription>최근 30일 간의 아이디어 생성 현황입니다</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="h-80">
                        <Skeleton className="h-80" />
                    </div>
                )}
                {isError && (
                    <CommonError
                        error={error}
                    />
                )}
                {chartData && (
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <defs>
                                <linearGradient id="fillDailyCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-count)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-count)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => value}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Area
                                dataKey="count"
                                type="natural"
                                fill="url(#fillDailyCount)"
                                stroke="var(--color-count)"
                            />
                        </AreaChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    )
}
