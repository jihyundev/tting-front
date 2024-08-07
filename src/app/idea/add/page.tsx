import {IdeaAddCard} from "@/components/idea-add-card";
import {LoaderCircleIcon} from "lucide-react";
import {Suspense} from "react";

const CreateFormFallback = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <LoaderCircleIcon size={30} />
        </div>
    )
}

export default function IdeaAddPage() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Suspense fallback={<CreateFormFallback />}>
                <IdeaAddCard />
            </Suspense>
        </div>
    )
}
