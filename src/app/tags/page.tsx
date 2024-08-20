import {TagList} from "@/components/tag/tag-list";
import {Typography} from "@/components/typography";

export default function TagsPage() {
    return (
        <div>
            <header className="w-full min-h-12 sticky top-6 flex justify-center items-center text-center mb-6 bg-gray-200">
                <Typography variant="subtitle1">보고 싶은 태그를 선택해주세요</Typography>
            </header>
            <div className="flex justify-center items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 pb-12">
                <TagList/>
            </div>
        </div>
    )
}
