import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  const renderWords = () => {
    return (
      <div className="flex flex-wrap">
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="mr-2 mb-2">
            {word.text.split('').map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`text-white`, word.className)}>
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}>
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "normal",
          }}>
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export default TypewriterEffectSmooth;