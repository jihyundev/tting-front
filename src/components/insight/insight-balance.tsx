'use client'

import {useInsightBalance} from "@/hooks/use-insight-balance";
import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import {Typography} from "@/components/typography";
import {Skeleton} from "@/components/ui/skeleton";
import {CommonError} from "@/components/common-error";

export const InsightBalance = () => {
    const { chartData, isLoading, isError, error } = useInsightBalance();

    const chartConfig = {
        balance: {
            label: "balance",
            color: "hsl(var(--chart-2))",
        },
    }

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <Typography variant='header5'>아이디어 균형</Typography>
                <CardDescription>6가지 영역에 대한 아이디어의 균형을 표시합니다</CardDescription>
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
                    <ChartContainer
                        config={chartConfig}
                    >
                        <RadarChart data={chartData}>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <PolarGrid className="fill-[--color-balance] opacity-20" />
                            <PolarAngleAxis dataKey="category" />
                            <Radar
                                dataKey="value"
                                fill="var(--color-balance)"
                                fillOpacity={0.5}
                            />
                        </RadarChart>
                    </ChartContainer>
                )}
            </CardContent>
            <CardFooter>
                <Typography variant="caption" className="w-full text-center">
                    최근 30일 기준
                </Typography>
            </CardFooter>
        </Card>
    )
}
