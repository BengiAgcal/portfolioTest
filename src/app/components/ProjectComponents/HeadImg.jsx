"use client";

import React from 'react';
import Image from 'next/image';

const HeadImg = ({ imageSrc, alt }) => {

    return (
        <section>
            
            <Image
                src={imageSrc} // Pass the image source as a prop
                alt={alt} // Use alt text for accessibility
                layout="responsive" // This makes the image responsive
                width={800} // You need a width
                height={600} // You need a height
                className="object-cover" // Optional: Adjust object-fit behavior
                priority
            />
            
        </section>
    )
}

export default HeadImg