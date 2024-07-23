'use client'

import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Typography} from "@/components/typography";
import {Tag} from "@/components/tag";
import {Separator} from "@/components/ui/separator";
import {TagColors} from "@/types/tag-colors";
import {Button} from "@/components/ui/button";

export const IdeaSaveCard = ({ content, tags }: {
    content: string
    tags: {
        name: string,
        color: TagColors
    }[]
}) => {
    return (
        <Card>
            <CardHeader className="p-5">
                <Typography variant="body3">{content}</Typography>
            </CardHeader>
            <Separator />
            <CardFooter className="px-5 py-4 flex justify-between">
                <div className="flex gap-1.5">
                    {tags.map((tag, index) => (
                        <Tag
                            key={index}
                            label={tag.name}
                            color={tag.color}
                        />
                    ))}
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">삭제</Button>
                    <Button>아이디어 저장</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
