'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";

import { useIdeaGenerate } from "@/hooks/use-idea-generate"
import { Typography } from "@/components/typography";
import { LoadingIdeaCreate } from "@/components/loading-idea-create";
import { IdeaSaveCard } from "@/components/idea/idea-save-card";
import {useEffect, useState} from "react";
import {IdeaCreationItem} from "@/types/idea-create";
import {LogoExclude} from "@/components/icons";
import {useSearchParams} from "next/navigation";
import {IdeaItem} from "@/types/idea-fetch";

const FormSchema = z.object({
    baseInput: z
        .string()
        .min(5, {
            message: "최소 5자 이상 입력해주세요.",
        })
        .max(10000, {
            message: "입력 내용이 10000자를 초과했어요. 내용을 나눠서 입력해주세요.",
        }),
    instruction: z
        .string()
        .max(150, {
            message: "요청사항이 너무 많으면 원하는 결과에서 벗어날 수 있어요.",
        })
        .optional()
})

export const IdeaCreateForm = () => {
    const searchParams = useSearchParams();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });
    const { mutate, isPending, isError, isSuccess, data, reset } = useIdeaGenerate();
    const [ideas, setIdeas] = useState<Array<IdeaCreationItem>>([]);

    useEffect(() => {
        if (isSuccess && data) {
            const response: IdeaCreationItem[] = data?.data || []
            setIdeas(response)
        }
    }, [isSuccess, data]);

    // 미리 아이디어 선택한 채로 진입하는 경우
    useEffect(() => {
        const isPrefill = searchParams.get('prefill') === "true"
        if (isPrefill) {
            // sessionStorage 에 저장된 selectedIdeas 데이터를 불러온다.
            const selectedIdeasString = sessionStorage.getItem("selectedIdeas")
            if (selectedIdeasString) {
                const preSelectedIdeas = JSON.parse(selectedIdeasString) as IdeaItem[];
                const prefilledInput = preSelectedIdeas.map(idea => idea.content).join("\n \n")
                form.setValue('baseInput', prefilledInput || '')
            }
        }
    }, [form, searchParams])

    const onCheckIdea = (checkedIdea: IdeaCreationItem) => {
        setIdeas(ideas.map(idea => idea.id === checkedIdea.id ? { ...idea, isChecked: true } : idea));
    }

    const onReset = () => {
        // form.setValue('baseInput', '');
        // form.setValue('instruction', '');
        setIdeas([]);
        reset();
    };

    const ideasFiltered = () => ideas.filter(item => !item.isChecked);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        mutate({
            baseInput: data.baseInput,
            instruction: data.instruction || ''
        })
    }

    return (
        <div className="w-full h-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex justify-center mx-12 gap-6">
                    <div className="flex-1 flex flex-col gap-16">
                        <FormField
                            control={form.control}
                            name="baseInput"
                            render={({ field }) => (
                                <FormItem className="h-full">
                                    <FormLabel>입력</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="아이디어를 뽑고 싶은 장문의 콘텐츠를 입력해보세요."
                                            className="resize-none min-h-80 h-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="instruction"
                            render={({ field }) => (
                                <FormItem className="h-32">
                                    <FormLabel>요청사항</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="요청사항을 입력해 원하는 결과물을 구체적으로 요청할 수 있어요."
                                            className="resize-none h-20"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-1 ">
                        <div className="w-full pb-2 border-b border-dotted border-gray-400">
                            <Label>결과</Label>
                        </div>
                        {isPending && (
                            <div className="flex flex-col justify-center items-center gap-2 h-full">
                                <LoadingIdeaCreate />
                            </div>
                        )}
                        {isError && (
                            <div className="flex flex-col justify-center items-center gap-2 h-full">
                                <Typography variant="content">에러가 발생했어요.</Typography>
                                <Button type="submit">재시도하기</Button>
                            </div>
                        )}
                        {(isSuccess && data && ideasFiltered().length > 0) && (
                            <div className="flex flex-col justify-start items-start gap-2 h-full mt-1">
                                <Typography variant="content">아이디어를 만들었어요. 마음에 드는 아이디어를 저장해보세요.</Typography>
                                {ideasFiltered().map((idea, index) => (
                                    <IdeaSaveCard
                                        key={index}
                                        idea={idea}
                                        onCheck={onCheckIdea}
                                    />
                                ))}
                            </div>
                        )}
                        {(isSuccess && data && ideasFiltered().length === 0) && (
                            <div className="flex flex-col justify-center items-center gap-5 h-full">
                                <LogoExclude />
                                <Typography variant="subtitle3">아이디어를 모두 확인했어요!</Typography>
                                <Button type="button" onClick={onReset}>돌아가기</Button>
                            </div>
                        )}
                        {!isPending && !isError && !isSuccess && (
                            <div className="flex flex-col justify-center items-center gap-2 h-full">
                                <Button type="submit">아이디어 만들기</Button>
                                <Button disabled={true}>카드뉴스 만들기</Button>
                                <Button disabled={true}>영상대본 만들기</Button>
                                <Typography variant="content">*무료 플랜에서는 ‘아이디어 만들기’만 가능해요.</Typography>
                            </div>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    )
}
