import {TagColors} from "@/types/tag-colors";

type TagItem = {
    id: string | null;
    name: string;
    color: TagColors;
}

type IdeaCreationItem = {
    content: string;
    creationType: string;
    balanceType: string;
    tags: TagItem[];
}

export type {IdeaCreationItem}
