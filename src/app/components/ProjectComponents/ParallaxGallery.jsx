'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Parallaxcol from ".//Parallaxcol"

const ParallaxGallery = ({ paralImgs }) => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -450]);

    return (
        <section>
            <div ref={container} className='grid grid-cols-3 min-h-[95vh] md:min-h-screen'>
                {
                    paralImgs.map((item, i) => (

                        <Parallaxcol
                            key={i}
                            index={i}
                            src={item.src}
                            refence={container}
                            start={item.start}
                            end = {item.end}
                            isVideo = {item.isVideo}

                        />)

                    )}

            </div>

        </section>
    );
};

export default ParallaxGallery;


/*
 <div className='grid grid-cols-3'>
            
        {images.map((image, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            zIndex: index, // Assign z-index based on array index
            height: image.height,
            width: image.width,
          }}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="object-cover"
          />
        </div>
      ))}

        </div>

      <div ref={container} className="container min-h-screen">
        <div className="flex w-full justify-center relative">
          <motion.div
            className="0 w-full justify-centeritems-center z-[1]"
            style={{ y: 0 }} // Apply the `sm` transform to this motion div
          >
            <h1 className='big-text text-9xl'>  Somethin </h1>
          </motion.div>
          <motion.div
            className="absolute left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-[2]"
            style={{ y: md }} // Apply the `md` transform here
          >
            <img className="object-cover" src={paralImgs[1]} alt="Image 2" />
          </motion.div>
          <motion.div
            className="absolute left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-[3]"
            style={{ y: lg }} // Apply the `lg` transform here
          >
            <img className="object-cover" src={paralImgs[2]} alt="Image 3" />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
*/