'use client'

import {useInsightTags} from "@/hooks/use-insight-tags";
import {Card, CardHeader, CardContent, CardDescription, CardFooter} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, YAxis, XAxis, Bar } from "recharts"
import {Typography} from "@/components/typography";
import {Skeleton} from "@/components/ui/skeleton";
import {CommonError} from "@/components/common-error";

export const InsightTagStatus = () => {
    const { chartData, isLoading, isError, error } = useInsightTags();

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <Typography variant='header5'>태그 현황</Typography>
                <CardDescription>태그별 아이디어 수를 표시합니다</CardDescription>
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
                    <ChartContainer config={{
                        "count": {
                            label: "count"
                        }
                    }}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            layout="vertical"
                            margin={{
                                left: 0,
                            }}
                        >
                            <YAxis
                                width={80}
                                dataKey="name"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) =>
                                    value
                                }
                            />
                            <XAxis dataKey="count" type="number" hide />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="count" layout="vertical" radius={5} />
                        </BarChart>
                    </ChartContainer>
                )}
            </CardContent>
            <CardFooter>
                <Typography variant="caption" className="w-full text-center">
                    아이디어가 가장 많은 상위 5개 태그
                </Typography>
            </CardFooter>
        </Card>
    )
}
