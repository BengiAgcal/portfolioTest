"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Video = ({ src, fallbackSrc }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    // const [currentSrc, setCurrentSrc] = useState(src); // Manage the current source state

    // Check if video is in view
    const isInView = useInView(videoRef, { amount: 0.2 }); // Trigger when 20% of the video is in view

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

    // const handleVideoError = () => {
    //     // Switch to fallback source if the main source fails
    //     if (fallbackSrc) {
    //         setCurrentSrc(fallbackSrc);
    //     }
    // };

    return (
        <motion.div
            ref={containerRef}
            style={{ scale }}
            transition={{ duration: 2, ease: "circOut" }}
        >
            <video
                ref={videoRef}
                //src={currentSrc} // Use the state-managed source
                autoPlay
                loop
                muted
                playsInline
                // onError={handleVideoError} // Handle errors
                className="w-full h-auto"
            >
                <source src={src} type="video/mp4" />
                <source src={fallbackSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

export default Video;
