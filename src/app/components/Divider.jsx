"use client";
import React from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence, cubicBezier, easeIn } from "framer-motion";

const Divider = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0,1], [0, 720]);
    return (
        <section className='px-0 py-2 mx-auto'>
            <div className='grid grid-cols-3 gap-4 place-items-center'>
                <div>
                    <img src='/Line.png' alt='line' />
                </div>
                <div className='w-4/5'>
                    <motion.img src='/StarDiv.png' alt='star' style={{ rotate, opacity:0.75 }}  />
                </div>
                <div>
                    <img src='/Line.png' alt='line' />
                </div>
            </div>
        </section>

    )
}

export default Divider