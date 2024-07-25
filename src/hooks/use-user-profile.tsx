import { useQuery } from "@tanstack/react-query";
import {getMe} from "@/services/user";

export const useUserProfile = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getMe'],
        queryFn: getMe
    });

    return {
        data,
        isLoading,
        isError,
        error
    };
}
