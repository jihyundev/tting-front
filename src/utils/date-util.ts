import dayjs from "dayjs";

export const formatLastEdited = (lastEdited: string) => {
    if (!lastEdited) return "";

    const now = dayjs();
    const edited = dayjs(lastEdited);
    const diffDays = now.diff(edited, 'day');
    const diffHours = now.diff(edited, 'hour');
    const diffMinutes = now.diff(edited, 'minute');

    if (diffDays > 0) {
        return `${diffDays}일 전 수정`;
    } else if (diffHours > 0) {
        return `${diffHours}시간 전 수정`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes}분 전 수정`;
    } else {
        return "방금 전 수정";
    }
}
