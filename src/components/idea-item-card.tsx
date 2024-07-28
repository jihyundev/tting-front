import {IdeaItem} from "@/types/idea-fetch";
import {Tag} from "@/components/tag";
import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/ui/dialog";
import {IdeaDetail} from "@/components/idea-detail";

export const IdeaItemCard = ({idea}: { idea: IdeaItem }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col justify-end">
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
            </DialogTrigger>
            <DialogContent>
                <IdeaDetail idea={idea} />
            </DialogContent>
        </Dialog>
    )
}
