import {TagColors} from "@/types/tag-colors";

type TagSearchQuery = {
    offset?: number;
    limit?: number;
    descending?: boolean;
}

type Tag = {
    id: string;
    userId: string;
    name: string;
    color: TagColors;
    createdAt: string;
    updatedAt: string;
    latestIdeaContent: string;
    ideaCount: number;
}

type TagFetchResponse = {
    data: Tag[];
    count: number;
}

export type {TagSearchQuery, Tag, TagFetchResponse}
