'use client'

import {useState, useEffect} from "react";

const useTextTyping = (completionWord: string) => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setText((prevTitleValue) => {
                let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                setCount(count + 1);

                if (count >= completionWord.length) {
                    setCount(0);
                    setText('');
                }

                return result;
            });
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [completionWord, count]);

    return text;
};

export { useTextTyping }
