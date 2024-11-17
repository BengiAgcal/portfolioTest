"use client";
import { motion } from "framer-motion";
import React from 'react';


const HeadImg = ({ imageSrc, alt }) => {

    return (
        <section>
            
            <img
                src={imageSrc} // Pass the image source as a prop
                alt={alt} // Use title as alt text for accessibility
                className="w-full h-auto pt-8"
            />
            
        </section>
    )
}

export default HeadImg