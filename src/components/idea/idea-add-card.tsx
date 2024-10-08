'use client'

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
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
import {Tag} from "@/components/tag/tag";
import {Button} from "@/components/ui/button";
import {useIdeaAdd} from "@/hooks/use-idea-add";
import {Typography} from "@/components/typography";
import type {TagItem} from "@/types/idea-create";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {IdeaTagAddButton} from "@/components/idea/idea-tag-add-button";
import {useSearchParams} from "next/navigation";

const FormSchema = z.object({
    ideaDetail: z
        .string()
        .min(1, {
            message: "아이디어를 작성해주세요.",
        })
        .max(300, {
            message: "아이디어가 너무 길어요. 아이디어를 분리해주세요",
        }),
});

export const IdeaAddCard = () => {
    const searchParams = useSearchParams();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ideaDetail: '',
        }
    });
    const [tags, setTags] = useState<TagItem[]>([]);
    const router = useRouter();

    const { mutate, isPending } = useIdeaAdd();

    // 미리 아이디어 선택한 채로 진입하는 경우
    useEffect(() => {
        const isPrefill = searchParams.get('prefill') === "true"
        if (isPrefill) {
            // sessionStorage 에 저장된 selectedProposal 데이터를 불러온다.
            const selectedProposalString = sessionStorage.getItem("selectedProposal")
            if (selectedProposalString) {
                const selectedProposal = JSON.parse(selectedProposalString)
                form.setValue('ideaDetail', selectedProposal || '')
                sessionStorage.removeItem("selectedProposal")
            }

            const ideaCombinedString = sessionStorage.getItem("ideaCombined")
            if (ideaCombinedString) {
                const content = JSON.parse(ideaCombinedString).content
                form.setValue('ideaDetail', content || '')

                const tags = JSON.parse(ideaCombinedString).tags
                setTags(tags || [])
                sessionStorage.removeItem("ideaCombined")
            }
        }
    }, [form, searchParams])

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        mutate({
            content: data.ideaDetail,
            tags,
            proposalId: sessionStorage.getItem("selectedProposalId") || null,
        }, {
            onSuccess: () => {
                router.push('/');
            }
        });
    }

    const onDeleteTag = (tagId?: string) => {
        if (!tagId) {
            console.error("tagId is not provided");
            return;
        }
        setTags(tags.filter(tag => tag.id !== tagId));
    };

    return (
        <Card className="w-2/3 h-2/3">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
                    <CardContent className="pt-6 h-full">
                        <FormField
                            control={form.control}
                            name="ideaDetail"
                            render={({ field }) => (
                                <FormItem className="h-full">
                                    <FormControl>
                                        <Textarea
                                            placeholder="아이디어를 입력해주세요."
                                            className="text-2xl text-gray-600 resize-none h-full min-h-28"
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
                            <div className="flex gap-2.5 flex-wrap justify-start w-2/3">
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
                                {tags.length < 5 && (
                                    <IdeaTagAddButton
                                        onSelectTag={(tag) => setTags([...tags, tag])}
                                    />
                                )}
                            </div>
                            <div className="flex gap-2.5">
                                {tags.length === 0 && (
                                    <Typography variant="caption" className="pt-4">
                                        태그를 한 개 이상 추가해주세요.
                                    </Typography>
                                )}
                                <Button
                                    type="submit"
                                    disabled={isPending || !form?.formState?.isValid || tags.length === 0}
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
    )
}
