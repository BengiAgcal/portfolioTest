"use client";
import { motion } from "framer-motion";
import React from 'react';
import Image from 'next/image';

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
                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                            whileInView={{ opacity: 1, }}
                            className="w-full lg:w-3/4 h-auto max-w-full">
                            <Image

                                src="/Footer.webp" // Pass the image source as a prop
                                alt="an artwork" // Use title as alt text for accessibility
                                layout="responsive" // This makes the image responsive
                                width={800} // You need a width
                                height={600} // You need a height
                                className="object-cover"

                            />
                        </motion.div>
                    </div>

                    <div className='md:col-span-1 order-1 md:order-2'>
                        <div className='big-text2 text-5xl lg:text-8xl text-center md:text-left '>
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
                                <Image
                                    src="/LinkedIn.png"
                                    alt="LinkedIn"
                                    
                                    width={75}
                                    height={75}
                                    className="object-cover opacity-50 hover:opacity-100"
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
                                <Image
                                    src="/Email.png"
                                    alt="Email"
                                    
                                    width={75}
                                    height={75}
                                    className="object-cover opacity-50 hover:opacity-100"
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
                                <Image
                                    src="/Instagram.png"
                                    alt="Instagram"
                                    
                                    width={75}
                                    height={75}
                                    className="object-cover opacity-50 hover:opacity-100"
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
