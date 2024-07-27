import {Suspense} from "react";
import {Typography} from "@/components/typography";
import {IdeaCreateForm} from "@/components/idea-create-form";
import {LoaderCircleIcon} from "lucide-react";

const CreateFormFallback = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <LoaderCircleIcon size={30} />
        </div>
    )
}

export default function CreatePage() {
    return (
        <>
            <header className="w-full min-h-12 sticky top-6 flex justify-center items-center text-center mb-6 bg-gray-200">
                <Typography variant="subtitle1">다양한 결과물을 만들어보세요</Typography>
            </header>
            <Suspense fallback={<CreateFormFallback />}>
                <div style={{ height: `calc(100% - 96px)` }}>
                    <IdeaCreateForm />
                </div>
            </Suspense>
        </>
    )
}
