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
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-5 mx-auto flex-col items-center'>
                <div className='col-span-1 md:col-span-1 mx-auto '>
                   <Project imageSrc={imageSrc} title={""} subtitle={title} link={link} isVideo={false}/>
                    
                    <a href={link} target="_blank" // Open in a new tab
                        rel="noopener noreferrer" className="button small-text rounded-xl mt-4 self-start hidden sm:hidden ">Learn More</a>

                </div>
                <div className='col-span-1 md:col-span-3 p-4 flex flex-col justify-center h-full'>
                    <h2 className='small-text text-base md:text-xl font-bold pt-4'>{title}</h2>
                    <p className='small-text text-base md:text-xl italic py-4'>{desc}</p>
                    {link=="" ? <p className='big-text2  italic text-2xl md:text-3xl py-4'>Publication Pending</p>: <a href={link} target="_blank" // Open in a new tab
                        rel="noopener noreferrer" className="button small-text rounded-xl py-4 self-start block sm:block ">Learn More</a>}
                    
                </div>

            </div>
        </section>
    )
}

export default Public