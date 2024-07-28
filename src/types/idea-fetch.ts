import {TagItem} from "@/types/idea-create";

type IdeaSearchQuery = {
    text?: string;
    offset?: number;
    limit?: number;
    descending?: boolean;
    tagId?: string;
}

type IdeaItem = {
    id: string;
    userId: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tags: TagItem[];
}

type IdeaFetchResponse = {
    data: IdeaItem[];
    count: number;
}

export type {IdeaSearchQuery, IdeaItem, IdeaFetchResponse}
