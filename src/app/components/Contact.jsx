"use client";
import { motion } from "framer-motion";
import React from 'react';

const Contact = () => {

    const fadeInAnimVariants = {
        initial: {  // Note the correct spelling "initial"
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id='contact' className='pt-24 md:pt-48 pb-12'>
            <div className="container px-0 py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full items-center justify-center">
                    <div className='md:col-span-1 order-last md:order-1'>
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                            whileInView={{ opacity: 1, }}
                            src="/Footer.png" // Pass the image source as a prop
                            alt="sas" // Use title as alt text for accessibility
                            width={800}
                            height={800}
                            className="w-full lg:w-3/4 h-auto max-w-full"
                        />
                    </div>

                    <div className='md:col-span-1 order-1 md:order-2'>
                        <div className='big-text2 text-7xl lg:text-9xl text-center md:text-left '>
                            <span className='font-light'>
                                Let&apos;s <br />
                            </span>
                            <span className='font-black italic'>
                                Connect!
                            </span>
                        </div>
                        <div className='grid grid-cols-3 w-auto justify-center md:justify-start items-center text-center mt-4'

                        >
                            <motion.a href='https://www.linkedin.com/in/bengi-agcal/'
                                variants={fadeInAnimVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex justify-center md:justify-start items-center col-span-1 p-2'
                            >
                                <img
                                    src="/LinkedIn.png"
                                    alt="LinkedIn"
                                    width={50}
                                    height={50}
                                    className="w-auto h-auto max-w-full opacity-50 hover:opacity-100"
                                />
                            </motion.a>
                            <motion.a href="mailto:benjiagcal@gmail.com"
                                variants={fadeInAnimVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex justify-center md:justify-start items-center col-span-1 p-2'
                            >
                                <img
                                    src="/Email.png"
                                    alt="Email"
                                    width={50}
                                    height={50}
                                    className="w-auto h-auto max-w-full opacity-50 hover:opacity-100"
                                />
                            </motion.a>
                            <motion.a href='https://www.instagram.com/bagcal.art/'
                                variants={fadeInAnimVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex justify-center md:justify-start items-center col-span-1 p-2'
                            >
                                <img
                                    src="/Instagram.png"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                    className="w-auto h-auto max-w-full opacity-50 hover:opacity-100"
                                />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;
