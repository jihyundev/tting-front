'use client'

import {useUserProfile} from "@/hooks/use-user-profile";
import {Typography} from "@/components/typography";
import {useInsightSummary} from "@/hooks/use-insight-summary";

export const InsightTitle = () => {
    const { name } = useUserProfile();
    const {data} = useInsightSummary();
    const recentUsageIndex = data?.data.recentUsageIndex || 0;

    return (
        <Typography variant="subtitle1" className="text-center mb-7">
            {recentUsageIndex > 100 ? `${name || ''}님은 아이디어를 적극적으로 활용하고 있어요` : '새로운 아이디어를 만들어 보세요'}
        </Typography>
    )
}
