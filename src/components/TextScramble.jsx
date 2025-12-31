import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <motion.span>{displayText}</motion.span>;
};

export default TextScramble;