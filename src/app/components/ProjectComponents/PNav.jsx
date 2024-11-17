"use client";
import Link from 'next/link';
import React from 'react';



const PNav = () => {
  return (
    <section style={{

      position: "sticky",
      top: 0,
      width: "100%",
      zIndex:50
    }}>

        <nav className=" top-0 left-0 right-0 z-10 animate-slide-down border-b-2-0  bg-white bg-opacity-50" >
            <div className="flex flex-wrap items-center justify-start mx-auto p-2 bg-white bg-opacity-50 ">
            
            <Link href="/" className="big-text2 font-bold italic block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-300">Back</Link>

            </div>

            
        </nav>

    </section>
  )
}

export default PNav