
"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image';
import ImageWithFallback from "../ImageWithFallback"


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
                <ImageWithFallback 
                 alt={alt? alt: "Artwork Image"}
                 src={imageSrc} 
                 layout="responsive" // This makes the image responsive
                width={800} // You need a width
                height={600} // You need a height
                className="object-cover"
                />
{/*}
            <Image
                src={imageSrc} // Pass the image source as a prop
                alt={alt? alt: "Artwork Image"} // Use alt text for accessibility
                layout="responsive" // This makes the image responsive
                width={800} // You need a width
                height={600} // You need a height
                className="object-cover" // Optional: Adjust object-fit behavior
            />
{*/}
        </motion.div>
    )
}

export default MovingImg