import {Button} from "@/components/ui/button";
import {useIdeasDelete} from "@/hooks/use-ideas-delete";
import {Loader2} from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {IdeaItem} from "@/types/idea-fetch";

export const IdeasDeleteButton = ({ selectedIdeas }: {
    selectedIdeas: IdeaItem[]
}) => {
    const { mutate, isPending, isError, isSuccess } = useIdeasDelete();

    const deleteSelectedIdeas = () => {
        mutate(selectedIdeas.map(idea => idea.id));
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    disabled={selectedIdeas.length === 0}
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            삭제중
                        </>
                    ) : "삭제하기"}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>아이디어 삭제</AlertDialogTitle>
                    <AlertDialogDescription>
                        선택한 아이디어를 정말 삭제하시나요?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>아니요</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteSelectedIdeas}>네 삭제할게요</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
