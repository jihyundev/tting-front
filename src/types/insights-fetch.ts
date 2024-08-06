import {TagColors} from "@/types/tag-colors";

type InsightSummary = {
    totalIdeas: number;
    recentIdeasAdded: number;
    recentUsageIndex: number;
}

type InsightDailyCount = {
    count: number;
    data: {key: string, value: number}[];
}

type InsightTagCount = {
    key: string;
    value: number;
    color: TagColors
}

export type { InsightSummary, InsightDailyCount, InsightTagCount }
