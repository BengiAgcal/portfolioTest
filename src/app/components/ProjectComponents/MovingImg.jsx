
"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"


const MovingImg = ({ imageSrc, alt }) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["0.2 1", "1.33 1"],

        }
    );
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scale }}

            transition={{ duration: 2, ease: "circOut" }}>

            <img
                src={imageSrc} // Pass the image source as a prop
                alt={alt} // Use title as alt text for accessibility
                className="w-full h-auto"
            />

        </motion.div>
    )
}

export default MovingImg