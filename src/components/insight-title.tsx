'use client'

import {useUserProfile} from "@/hooks/use-user-profile";
import {Typography} from "@/components/typography";
import {useInsightSummary} from "@/hooks/use-insight-summary";

export const InsightTitle = () => {
    const { name } = useUserProfile();
    const {data} = useInsightSummary();
    const recentUsageIndex = data?.data.recentUsageIndex || 0;
    const getText = () => {
        if (!recentUsageIndex) {
            return '';
        }
        if (recentUsageIndex < 50) {
            return `${name || ''}님 새로운 아이디어를 추가해보세요.`;
        }
        if (recentUsageIndex < 150) {
            return `${name || ''}님 다양한 아이디어를 조합하고 만들어보세요.`;
        }
        return `${name || ''}님은 아이디어를 적극적으로 활용하고 있어요`;
    }

    return (
        <Typography variant="subtitle1" className="text-center mb-7">
            {getText()}
        </Typography>
    )
}
