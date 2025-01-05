"use client";
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import Project from './Project';

const Public = ({ imageSrc, alt, title, desc, link }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-5 py-5 mx-auto flex-col items-center'>
                <div className='col-span-1 md:col-span-1 mx-auto w-4/5 md:w-full'>
                    <Project imageSrc={imageSrc} title={""} subtitle={title} link={link} isVideo={false} />

                    <a href={link} target="_blank" // Open in a new tab
                        rel="noopener noreferrer" className="button small-text rounded-xl mt-4 self-start hidden sm:hidden ">Learn More</a>

                </div>
                <div className='col-span-1 md:col-span-3 p-0 md:p-4 flex flex-col justify-center h-full'>
                    <h2 className='small-text text-base text-center md:text-left md:text-xl font-bold pt-4'>{title}</h2>
                    <p className='small-text text-sm md:text-base italic pt-1 pb-3 text-center md:text-left '>{desc}</p>

                    {link == "" ? <p className='big-text2 italic text-xl md:text-3xl text-center md:text-left '>Publication Pending</p> : <a href={link} target="_blank" // Open in a new tab
                        rel="noopener noreferrer" className="button small-text rounded-xl m-auto md:m-0 center w-3/5 md:w-auto md:self-start block ">Learn More</a>}
                </div>

            </div>
        </section>
    )
}

export default Public