"use client";
import React from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence, cubicBezier, easeIn } from "framer-motion";
import Image from 'next/image';
const Divider = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
    return (
        <section className='px-0 py-2 mx-auto'>
            <div className='grid grid-cols-3 gap-4 place-items-center'>
                <div>
                    <Image 
                    src='/Line.png' 
                    alt='line'
                    layout="responsive"
                    width={75}
                    height={75}
                    className="object-cover" />
                </div>
                <div className='w-4/5'>
                    <motion.div style={{ rotate, opacity: 0.75 }}>
                        <Image
                            src='/StarDiv.webp'
                            alt='star'
                            layout="responsive"
                            width={75}
                            height={75}
                            className="object-cover" />
                    </motion.div>
                </div>
                <div>
                <Image 
                    src='/Line.png' 
                    alt='line'
                    layout="responsive"
                    width={75}
                    height={75}
                    className="object-cover" />
                </div>
            </div>
        </section>

    )
}

export default Divider