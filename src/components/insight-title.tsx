'use client'

import {useUserProfile} from "@/hooks/use-user-profile";
import {Typography} from "@/components/typography";

export const InsightTitle = () => {
    const { name } = useUserProfile();
    return (
        <Typography variant="subtitle1" className="text-center mb-7">
            {name || ''}님은 적극적으로 아이디어를 활용하고 있어요
        </Typography>
    )
}
