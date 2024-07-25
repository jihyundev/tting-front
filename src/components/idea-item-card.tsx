import {IdeaItem} from "@/types/idea-fetch";
import {Tag} from "@/components/tag";
import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export const IdeaItemCard = ({idea}: { idea: IdeaItem }) => {
    return (
        <Card>
            <CardHeader>
                {idea.content}
            </CardHeader>
            <Separator/>
            <CardFooter className="pt-6 flex align-center gap-1.5">
                {idea.tags.map(tag => (
                    <Tag key={tag.id} label={tag.name} color={tag.color} />
                ))}
            </CardFooter>
        </Card>
    )
}
