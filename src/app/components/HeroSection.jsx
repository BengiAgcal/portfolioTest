"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView,  cubicBezier, easeIn } from "framer-motion";

const HeroSection = () => {

    const Bezing = cubicBezier(.35, .17, .3, .86)

    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0,1000], [0, 360]);
    

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const parentRef = useRef(null);
    const childRef = useRef(null);
    const childRef2 = useRef(null);

    // Function to set the height of the parent based on the child's height
    const setParentHeight = () => {
        if (parentRef.current && childRef.current) {
            const childHeight = childRef.current.offsetHeight;
            const childHeight2 = childRef2.current.offsetHeight;
            parentRef.current.style.height = `${childHeight + childHeight2}px`;
        }
    };

    useEffect(() => {
        // Set height initially when the component mounts
        setParentHeight();

        // Add resize event listener
        window.addEventListener('resize', setParentHeight);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', setParentHeight);
        };
    }, []); // Empty dependency array ensures this runs on mount and unmount

    return (
        <section ref={ref}>

            <div ref={parentRef} id="hero" className='relative md:min-h-screen'>
                <motion.h1 ref={childRef2}
                    className="big-text text-8xl md:text-9xl xl:text-[200px] text-center "
                    initial={{ opacity: 0}}
                    animate={isInView ?{ opacity: 1 }:{}}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeIn" }}

                > Bengi Agcal</motion.h1>
                <motion.img
                    src="/StarTiger.png"
                    alt="Picture of a Star"
                    className="absolute w-3/5 xl:w-2/5 top-10 left-10 xl:left-36"
                    initial={{ opacity: 0, rotate: "15deg" }}
                    animate={isInView ?{ opacity: 1, rotate: "30deg" }:{}}
                    style={{ rotate }} // Apply rotation transform
                    transition={{ delay: 0.5, duration: 2.5, ease: Bezing }}

                />
                <motion.img
                    src="/Poster.png"
                    alt="Picture of a Tiger"
                    className="absolute xl:w-3/4 top-36 md:top-20 xl:top-36 left-1/2 transform -translate-x-1/2 xl:-translate-x-1/3 z-0"
                    initial={{ opacity: 0, transform: "translateY(-500px) translateX(-50%)" }}
                    animate={isInView ?{ opacity: 1, transform: "translateY(0px) translateX(-50%)" }: {}}
                    transition={{ delay: 0, duration: 1.5, ease: "easeOut" }}
                />
                <img ref={childRef}
                    src="/Poster.png"
                    alt="Picture of a Tiger"
                    className=" xl:w-3/4 top-36 md:top-20 xl:top-36 left-1/2 transform -translate-x-1/2 xl:-translate-x-1/3 opacity-0"
                />
            </div>

            {/* 
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between w-full">
                    <div className="text-right md:mr-4 w-full md:w-auto">
                        <p className='small-text font-medium text-base md:text-2xl'>Developer</p>
                    </div>
                    <div className="text-right md:mr-4 w-full md:w-auto">
                        <p className='small-text font-medium text-base md:text-2xl'>Designer</p>
                    </div>
                    <div className="text-right w-full md:w-auto">
                        <p className='small-text font-medium text-base md:text-2xl'>Artist</p>
                    </div>
                </div>
            </div>
            */}
        </section>
    );
}

export default HeroSection;
