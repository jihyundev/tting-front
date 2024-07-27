import {Skeleton} from "@/components/ui/skeleton";

export const SkeletonCard = () => {
    return (
        <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div className="mt-4">
                <Skeleton className="h-4 " />
                <Skeleton className="h-4 mt-2" />
                <Skeleton className="h-4 mt-2" />
            </div>
            <div className="flex items-center mt-2">
                <Skeleton className="h-7 w-14 rounded-lg" />
                <Skeleton className="h-7 w-14 rounded-lg" />
                <Skeleton className="h-7 w-14 rounded-lg" />
            </div>
        </div>
    )
}
