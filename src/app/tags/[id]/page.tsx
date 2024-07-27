import {TagIdeaList} from "@/components/tag-idea-list";

export default function TagDetailPage({ params }: {
    params: { id: string }
}) {
    return (
        <div className="flex justify-center items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 pb-12">
            <TagIdeaList tagId={params.id}/>
        </div>
    )
}
