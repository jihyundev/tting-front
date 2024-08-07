import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postRejectIdeaProposal} from "@/services/insight";

export const useInsightProposalReject = () => {
    const queryClient = useQueryClient();
    const {mutate, isError, error} = useMutation({
        mutationKey: ['rejectIdeaProposal'],
        mutationFn: ({proposalId}: {
            proposalId: string;
        }) => postRejectIdeaProposal(proposalId),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['getInsightProposals']
        })
    });

    return {
        reject: mutate,
        isError,
        error
    }
}
