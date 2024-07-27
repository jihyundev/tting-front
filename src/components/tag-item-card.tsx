import Link from "next/link";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import type {Tag} from "@/types/tag-fetch";
import {Separator} from "@/components/ui/separator";
import {Typography} from "@/components/typography";
import {TagIcon} from "lucide-react";
import {TAG_COLOR_MAPPER} from "@/types/tag-colors";
import {formatLastEdited} from "@/utils/date-util";

export const TagItemCard = ({ tag }: {
    tag: Tag
}) => {
    return (
        <Link href={`tags/${tag.id}`}>
            <Card className="h-full">
                <CardContent className="overflow-hidden pt-6">
                    <Typography variant="body3" className="line-clamp-4">
                        {tag.latestIdeaContent || '아이디어가 비어있습니다.'}
                    </Typography>
                </CardContent>
                <Separator/>
                <CardFooter className="pt-5">
                    <div>
                        <div className="flex gap-1.5 items-center">
                            <TagIcon size={24}/>
                            <Typography variant="subtitle2" className="text-gray-600">
                                {tag.name}
                            </Typography>
                            <div className={`w-3.5 h-3.5 rounded-full ${TAG_COLOR_MAPPER[tag.color]}`}></div>
                        </div>
                        <Typography variant="caption" className="pt-2.5">{formatLastEdited(tag.updatedAt)}</Typography>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
