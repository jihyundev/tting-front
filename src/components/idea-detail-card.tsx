'use client'

import {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Loader2} from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {Textarea} from "@/components/ui/textarea";
import {Tag} from "@/components/tag";
import {Button} from "@/components/ui/button";
import {useIdeaEdit} from "@/hooks/use-idea-edit";
import {Typography} from "@/components/typography";
import {formatLastEdited} from "@/utils/date-util";
import {TagItem} from "@/types/idea-create";
import {useIdeaDetail} from "@/hooks/use-idea-detail";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {IdeaTagAddButton} from "@/components/idea-tag-add-button";

const FormSchema = z.object({
    ideaDetail: z
        .string()
        .min(1, {
            message: "아이디어를 작성해주세요.",
        })
        .max(300, {
            message: "아이디어가 너무 길어요. 아이디어를 분리해주세요",
        }),
})

export const IdeaDetailCard = ({ id }: {
    id: string
}) => {
    const { data, isLoading, isError } = useIdeaDetail({
        ideaId: id
    });

    const [tags, setTags] = useState<TagItem[]>(data?.data?.tags || []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ideaDetail: data?.data?.content || '',
        }
    });

    const { mutate, isPending } = useIdeaEdit();

    useEffect(() => {
        setTags(data?.data?.tags || []);
        form.reset({
            ideaDetail: data?.data?.content || '',
        });
    }, [data, form])


    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        mutate({
            id: id,
            content: data.ideaDetail,
            tags
        });
    };

    const onDeleteTag = (tagId?: string) => {
        if (!tagId) {
            console.error("tagId is not provided");
            return;
        }
        setTags(tags.filter(tag => tag.id !== tagId));
    };

    return (
        <>
            <Card className="w-2/3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="pt-6">
                            <FormField
                                control={form.control}
                                name="ideaDetail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="아이디어를 입력해주세요."
                                                className="resize-none min-h-28"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter>
                            <div className="w-full pt-6 flex justify-between align-center gap-1.5">
                                <div className="flex gap-1.5">
                                    {tags.map(tag => (
                                        <Tag
                                            key={tag.id}
                                            label={tag.name}
                                            color={tag.color}
                                            size={'M'}
                                            readOnly={false}
                                            onDelete={() => onDeleteTag(tag.id || '')}
                                        />
                                    ))}
                                    <IdeaTagAddButton />
                                </div>
                                <div className="flex gap-2.5">
                                    <Typography variant="caption" className="pt-4">{formatLastEdited(data?.data?.updatedAt || '')}</Typography>
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                저장중
                                            </>
                                        ) : "저장하기"}
                                    </Button>
                                </div>
                            </div>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </>
    )
}
