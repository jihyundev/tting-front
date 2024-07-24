'use client'

import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Typography} from "@/components/typography";
import {Tag} from "@/components/tag";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {useGeneratedIdeaAdd} from "@/hooks/use-generated-idea-add";
import type {IdeaCreationItem} from "@/types/idea-create";

export const IdeaSaveCard = ({ idea, onCheck }: {
    idea: IdeaCreationItem,
    onCheck: (idea: IdeaCreationItem) => void,
}) => {
    const { mutate, isPending, isError, isSuccess } = useGeneratedIdeaAdd();
    const onRemove = () => {
        onCheck(idea)
    };
    const onSave = async () => {
        await mutate(idea, {
            onSuccess: () => {
                onCheck(idea)
            }
        })
    }
    return (
        <Card className="w-full">
            <CardHeader className="p-5">
                <Typography variant="body3">{idea.content}</Typography>
            </CardHeader>
            <Separator />
            <CardFooter className="px-5 py-4 flex justify-between">
                <div className="flex gap-1.5">
                    {idea.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            label={tag.name}
                            color={tag.color}
                        />
                    ))}
                </div>
                <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={onRemove}>삭제</Button>
                    <Button type="button" onClick={onSave}>아이디어 저장</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
