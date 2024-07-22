'use client'

import {useEffect, useRef, useState} from "react";
// import lottie from "lottie-web";
// import lottieJson from "/lotties/tting-loading.json"

let lottie: any;

export const LoadingAnimation = () => {
    const container = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [lottieJson, setLottieJson] = useState(null);

    useEffect(() => {
        fetch('/lotties/tting-loading.json')
            .then(response => response.json())
            .then(data => setLottieJson(data));
    }, []);

    useEffect(() => {
        import("lottie-web").then((loadedLottie) => {
            lottie = loadedLottie;
            setIsLoaded(true);
        });
    }, [])

    useEffect(() => {
        if (isLoaded && lottieJson) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieJson
            })

            return () => anim.destroy();
        }
    }, [isLoaded, lottieJson])

    return (
        <div ref={container} className="w-full h-full" />
    )
}
