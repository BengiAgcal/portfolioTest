"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ imageSrc, title, subtitle, link, isVideo, className , fallbackSrc }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["0.2 1", "1.33 1"],
     
    }
  );
  const scale = useTransform(scrollYProgress, [0 ,1], [0.8,1 ]);

  const videoRef = useRef(null);
    

    // Check if video is in view
    const isInView = useInView(videoRef, { amount: 0.1 }); // Trigger when 50% of the video is in view

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play();
                console.log("play");
            } else {
                videoRef.current.pause();
                console.log("pause");
            }
        }
    }, [isInView]);
 
  

  return (
    <motion.div
      ref={ref}
      style={{ scale: scale}}
      transition={{ duration: 2, ease: "circOut" }}
      className={className}>
      <Link

        href={link} // Link to navigate to
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security feature to prevent access to the original window
        className="z-0 relative mt-0 block" // Use block to allow full width of the anchor
      >

        {/* Image */}
        
        {isVideo ? (
          <video
          ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto" // Ensure z-0 is on the video
          >
            <source src={imageSrc} type="video/mp4" />
            <source src={fallbackSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
          src={imageSrc} // Pass the image source as a prop
          alt={title} // Use title as alt text for accessibility
          layout="responsive" // This makes the image responsive
          width={800} // You need a width
          height={600} // You need a height
          className="object-cover" // Optional: Adjust object-fit behavior
          priority
        />
        )}

        {/* Overlay */}
        <div className="z-0 absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-500 flex flex-col items-center justify-center space-y-2 p-2">
          <h1 className="desc-text text-center text-white text-xl md:text-3xl font-bold">{title}</h1>
          <h2 className="desc-text text-center text-white text-base lg:text-xl font-thin">{subtitle}</h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
