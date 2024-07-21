import {Typography} from "@/components/typography";
import {IdeaCreateForm} from "@/components/idea-create-form";

export default function CreatePage() {
    return (
        <>
            <header className="w-full sticky top-0 flex justify-center items-center text-center">
                <Typography variant="subtitle1">다양한 결과물을 만들어보세요</Typography>
            </header>
            <IdeaCreateForm />
        </>
    )
}
