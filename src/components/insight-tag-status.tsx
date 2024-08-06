'use client'

import {useInsightTags} from "@/hooks/use-insight-tags";
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, YAxis, XAxis, Bar } from "recharts"

export const InsightTagStatus = () => {
    const { chartData, isLoading, isError } = useInsightTags();

    return (
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>태그 현황</CardTitle>
                <CardDescription>태그별 아이디어 수를 표시합니다</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </Card>
    )
}
