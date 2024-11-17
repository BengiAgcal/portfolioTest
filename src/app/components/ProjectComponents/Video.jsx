"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Video = ({ src }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    // Check if video is in view
    const isInView = useInView(videoRef, { amount: 0.2 }); // Trigger when 50% of the video is in view

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play();
               
            } else {
                videoRef.current.pause();
               
            }
        }
    }, [isInView]);

    // Scroll-based scale animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["0.2 1", "1.33 1"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <motion.div
            ref={containerRef}
            style={{ scale }}
            transition={{ duration: 2, ease: "circOut" }}
        >
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-auto'
            >
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

export default Video;
