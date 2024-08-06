type InsightSummary = {
    totalIdeas: number;
    recentIdeasAdded: number;
    recentUsageIndex: number;
}

type InsightDailyCount = {
    count: number;
    data: {key: string, value: number}[];
}

export type { InsightSummary, InsightDailyCount }
