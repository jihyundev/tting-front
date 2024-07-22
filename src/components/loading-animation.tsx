'use client'

import {useEffect, useRef, useState} from "react";
// import lottie from "lottie-web";
import lottieJson from "/public/lotties/tting-loading.json"

let lottie;

export const LoadingAnimation = () => {
    const container = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        import("lottie-web").then((loadedLottie) => {
            lottie = loadedLottie;
            setIsLoaded(true);
        });
    }, [])

    useEffect(() => {
        if (isLoaded) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieJson
            })

            return () => anim.destroy();
        }
    }, [isLoaded])

    return (
        <div ref={container} className="w-full h-full" />
    )
}
