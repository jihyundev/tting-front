import {IdeaItem} from "@/types/idea-fetch";
import {Tag} from "@/components/tag/tag";
import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export const IdeaItemCard = ({idea}: { idea: IdeaItem }) => {
    return (
        <Link href={`/idea/${idea.id}`} className="inline-block w-full mb-5">
            <Card className="flex flex-col justify-end">
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
        </Link>
    )
}
