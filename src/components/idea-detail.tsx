import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {Loader2} from "lucide-react";
import {
    DialogTitle, DialogDescription
} from "@/components/ui/dialog";
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
import type {IdeaItem} from "@/types/idea-fetch";
import {useIdeaEdit} from "@/hooks/use-idea-edit";

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

export const IdeaDetail = ({ idea }: {
    idea: IdeaItem
}) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ideaDetail: idea.content,
        }
    });

    const { mutate, isPending, isError, isSuccess } = useIdeaEdit();

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        mutate({
            id: idea.id,
            content: data.ideaDetail
        });
    };

    return (
        <>
            <DialogTitle>상세보기</DialogTitle>
            <DialogDescription className="hidden">
                아이디어 상세보기/편집하기
            </DialogDescription>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    <div className="w-full pt-6 flex justify-between align-center gap-1.5">
                        <div className="flex gap-1.5">
                            {idea.tags.map(tag => (
                                <Tag key={tag.id} label={tag.name} color={tag.color} />
                            ))}
                        </div>
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
                </form>
            </Form>
        </>
    )
}
