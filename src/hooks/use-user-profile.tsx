import { useQuery } from "@tanstack/react-query";
import {getMe} from "@/services/user";

export const useUserProfile = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getMe'],
        queryFn: getMe
    });

    const name = data?.data?.name;

    return {
        data,
        name,
        isLoading,
        isError,
        error
    };
}
