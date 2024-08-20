import {IdeaDetailCard} from "@/components/idea/idea-detail-card";

export default function IdeaDetailPage({ params }: {
    params: { id: string }
}) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <IdeaDetailCard id={params.id} />
        </div>
    )
}
