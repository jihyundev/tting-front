import {IdeaItem} from "@/types/idea-fetch";
import {Tag} from "@/components/tag";
import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {useState} from "react";

export const IdeaItemSelectCard = ({idea, onSelect, onUnselect}: {
    idea: IdeaItem,
    onSelect: (idea: IdeaItem) => void,
    onUnselect: (idea: IdeaItem) => void
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const onSelectCard = () => {
        if (isSelected) {
            setIsSelected(false);
            onUnselect(idea);
        } else {
            setIsSelected(true);
            onSelect(idea);
        }
    }
    return (
        <Card
            className={`${isSelected && "ring"} flex flex-col justify-end`}
            onClick={onSelectCard}
        >
            <CardHeader>
                {idea.content}
            </CardHeader>
            <Separator/>
            <CardFooter className="pt-6 flex align-center gap-1.5 justify-start items-start flex-wrap">
                {idea.tags.map(tag => (
                    <Tag key={tag.id} label={tag.name} color={tag.color} />
                ))}
            </CardFooter>
        </Card>
    )
}
