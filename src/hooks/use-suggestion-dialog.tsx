import {useState} from "react";
import {useUserSuggestion} from "@/hooks/use-user-suggestion";

export const useSuggestionDialog = () => {
    const [isSuggestionDialogOpen, setIsSuggestionDialogOpen] = useState(false);
    const [suggestionTitle, setSuggestionTitle] = useState('');
    const [suggestionContent, setSuggestionContent] = useState('');
    const {mutate: mutateSuggestion, isPending: isSuggestionPending} = useUserSuggestion();

    const onSuggestion = () => {
        mutateSuggestion({
            title: suggestionTitle,
            content: suggestionContent
        }, {
            onSuccess: () => {
                setIsSuggestionDialogOpen(false);
            }
        });
    }

    return {
        isSuggestionDialogOpen,
        setIsSuggestionDialogOpen,
        setSuggestionTitle,
        setSuggestionContent,
        onSuggestion,
        isSuggestionPending
    }
}
