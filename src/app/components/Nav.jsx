"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import * as motion from "framer-motion/client"
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const scrolltoHash = function (element_id) {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      };


    return (
        <section style={{

            position: "sticky",
            top: 0,
            width: "100%",
            zIndex:50
        }}>

            <nav className=" sticky top-0 left-0 right-0 animate-slide-down border-b-2-0  border-gray-500 z-50" style={{zIndex:50}} >
                <div className="flex flex-wrap items-center justify-end md:justify-center mx-auto p-2 bg-white bg-opacity-50 ">
                    <div className="mobile-menu items-end block md:hidden">
                        {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-end">
                                <Image 
                                src="/Menu.png" 
                                alt="menu" 
                                width={24}
                                height={24}
                                priority
                                 />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex h-6 w-6 small-text text-2xl font-light">
                                X
                            </button>
                        )}
                    </div>
                    <div className="menu hidden md:block md:w-auto font-light" id="navbar">
                        <ul className="flex px-4 md:p-0 md:flex-row md:space-x-8">
                            <li >
                                <div onClick={() => scrolltoHash('about')} className=" cursor-pointer small-text block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-300">About</div>
                            </li>
                            <li>
                                <div onClick={() => scrolltoHash('projects')} className=" cursor-pointer small-text block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-300">Works</div>
                            </li>
                            <li>
                                <div onClick={() => scrolltoHash('public')} className=" cursor-pointer small-text block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-300">Exhibitions & Publications</div>
                            </li>
                            <li>
                                <div onClick={() => scrolltoHash('contact')} className=" cursor-pointer small-text block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-300">Contact</div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Mobile Menu Items */}
                <AnimatePresence mode='popLayout'>
                    {navbarOpen ?

                        <motion.div className={`absolute w-full block md:hidden flex-col items-center bg-white bg-opacity-50 z-50 `}
                            initial={{
                                y: -20,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,

                            }}
                            transition={{
                                duration: 0.3,
                                type: "backInOut",
                            }}
                            exit={{
                                y: -20,
                                opacity: 0 
                            }}
                        >
                            <ul className={`absolute flex flex-col space-y-2 p-4  bg-white bg-opacity-50 z-10`}>
                                <li>
                                    <div onClick={() => scrolltoHash('about')} className=" cursor-pointer small-text block py-2 px-3 text-xl hover:text-gray-300">About</div>
                                </li>
                                <li>
                                <div onClick={() => scrolltoHash('projects')} className=" cursor-pointer small-text block py-2 px-3 text-xl hover:text-gray-300">Works</div>
                                </li>
                                <li>
                                <div onClick={() => scrolltoHash('public')} className=" cursor-pointer small-text block py-2 px-3 text-xl hover:text-gray-300">Exhibitions & Publications</div>
                                </li>
                                <li>
                                    <div onClick={() => scrolltoHash('contact')} className=" cursor-pointer small-text block py-2 px-3 text-xl hover:text-gray-300">Contact</div>
                                </li>
                            </ul>
                        </motion.div>
                        : null} </AnimatePresence>
            </nav>

        </section>
    );
};

export default Nav;
