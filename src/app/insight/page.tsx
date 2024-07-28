import Image from "next/image";
import {Typography} from "@/components/typography";

export default function InsightPage() {
    return (
        <div className="mt-40">
            <Typography variant="subtitle1" className="text-center m-6 mb-10">
                아이디어 통계와 분석을 준비 중이에요. 곧 만나요!
            </Typography>
            <Image
                src={"/images/insight-dashboard-mock-image.png"}
                alt={"insight-dashboard-mock-image"}
                width={800}
                height={400}
                className="blur-sm"
            />
        </div>
    )
}
