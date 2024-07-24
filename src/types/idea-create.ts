import {TagColors} from "@/types/tag-colors";

type TagItem = {
    id: string | null;
    name: string;
    color: TagColors;
}

type CreationType = 'DIRECTLY_ADDED' | 'GENERATED' | 'PROPOSAL';
type BalanceType = 'PHYSICAL' | 'EMOTIONAL' | 'MENTAL' | 'ECONOMIC' | 'TECHNICAL' | 'ARTISTIC';

type IdeaCreationItem = {
    id: string;
    content: string;
    creationType: CreationType;
    balanceType: BalanceType;
    tags: TagItem[];
    isChecked?: boolean;
}

export type {IdeaCreationItem}
