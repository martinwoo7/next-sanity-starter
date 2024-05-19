'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const TextTyping = ({ strings }: { strings: string[] }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const text = strings[currentIndex];
        // @ts-ignore
        let timer;

        if (isTyping) {
            // Typing animation

            const fullText = strings[currentIndex];
            const textLength = currentText.length;

            if (textLength < fullText.length) {
                timer = setTimeout(() => {
                    setCurrentText(fullText.substring(0, textLength + 1));
                }, 100); // Typing speed
            } else {
                timer = setTimeout(() => {
                    setIsTyping(false);
                }, 1000); // Delay before deleting
            }
        } else {
            if (currentText.length > 0) {
                timer = setTimeout(() => {
                    setCurrentText(
                        currentText.substring(0, currentText.length - 1),
                    );
                }, 80); // Deleting speed
            } else {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % strings.length,
                );
                setIsTyping(true);
            }
        }

        // @ts-ignore
        return () => clearTimeout(timer);
    }, [currentText, currentIndex, isTyping, strings]);

    return (
        <>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {currentText}
            </motion.span>

            {/* TODO: Animate blinking cursor */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, yoyo: Infinity }}
            >
                _
            </motion.span>
        </>
    );
};

export default TextTyping;
