'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, } from 'framer-motion';



const Parallaxcol = ({ src, refence, index, start, end, isVideo  }) => {



    const { scrollYProgress } = useScroll({
        target: refence,
        offset: ['start end', 'end start'],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], [start, end]);
    const Pl = (index%4*5)

    return (
        <section>
            <motion.div className='col-span-1 justify-end items-end p-2 md:p-0' style={{ y: imgY, zIndex: index, paddingRight:Pl }}>

                {isVideo ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='w-full md:w-3/4'// Ensure z-0 is on the video
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={src} // Pass the image source as a prop
                        className='w-full md:w-4/5'
                    />
                )}
               

            </motion.div>

        </section>
    )
}

export default Parallaxcol