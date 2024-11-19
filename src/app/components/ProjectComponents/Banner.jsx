"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Banner = ({Title}) => {

    const marqueeVariants = {
        animate: {
            x: [0, -128],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                },
            },
        },
    };


    return (
        <div>
            <div className=" relative w-full h-[120px] lg:h-[200px] overflow-hidden">
                {/* 3. Using framer motion */}
                <motion.div
                    className="absolute whitespace-nowrap"
                    variants={marqueeVariants}
                    //animate="animate"
                    whileInView="animate"
                >
                    <h1 className="big-text text-8xl md:text-9xl xl:text-[200px] text-center ">
                        {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title}
                        {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title}
                        {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title}
                        {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title} {Title}
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};
export default Banner