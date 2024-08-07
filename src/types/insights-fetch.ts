import {TagColors} from "@/types/tag-colors";
import type {TagItem} from "@/types/idea-create";

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

type InsightBalance = {
    data: {key: string, value: number}[];
    count: number;
    maxValue: number;
}

type InsightIdeaProposal = {
    id: string;
    userId: string;
    persona: string;
    content: string;
    balanceType: string;
    tags: TagItem[];
    createdAt: string;
}

export type { InsightSummary, InsightDailyCount, InsightTagCount, InsightBalance, InsightIdeaProposal }
