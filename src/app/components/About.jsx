"use client";
import { motion } from "framer-motion";
import React from 'react';
import Video from "./ProjectComponents/Video";

const About = () => {

    
    return (
        <section>
            <motion.div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-0 pt-12 md:pt-48 lg:px-12 mx-auto justify-items-center"
                initial={{ opacity: 0 }}
                viewport={{   once: false }}
                transition={{ duration: 0.75, ease: "circOut" }}
                whileInView={{ opacity: 1, }}
               
               >
                {/* Column 1 */}
                <div className="col-span-7 py-4 text-center lg:text-left">
                    <h2 className="big-text2 text-5xl md:text-7xl font-medium py-4">About Me!</h2>
                    <p className="small-text text-base md:text-xl">
                    Hi! I&apos;m Bengi (aka Benji) – a developer and designer with a background in both engineering and the arts. 
                    I hold a Bachelor&apos;s degree in Computer Engineering with a minor in Psychology from the Hong Kong University 
                    of Science and Technology and completed my MFA in immersive technologies at the University of British Columbia, 
                    where I also taught university-level courses in creative coding, art history and immersive environments.
                    </p>

                    <p className="small-text text-base md:text-xl py-4">
                    With experience across multiple game engines, 3D rendering sofware, and digital design platforms, I&apos;ve created and led many works ranging from video games and VR/AR 
                    projects to projection-based installations. My skills span 3D art, interaction design, XR technologies, digital design, and front-end development. I also have a strong 
                    focus on art direction, bringing a keen eye for visual composition, storytelling, and cohesive design, ensuring that each element is thoughtfully integrated in my work.
                    </p>
                    <p className="small-text text-base md:text-xl py-4">
                    I thrive in collaborative environments, and I&apos;m excited to continue blending technology and creativity to create memorable digital experiences!
                    </p>
                    <a href='/Benji_Agcal_CV.pdf' download={true}
                        className="button small-text text-xl rounded-xl inline-block">Résumé</a>
                </div>

                {/* Column 2 */}
                <div className="col-span-5 p-4 place-self-center flex items-center justify-center">
                    {/* <Video src={'about.mp4'} /> */}
                    <Video 
                    fallbackSrc={'about.mp4'}
                    src={"https://t=ksoio8smstmaj9d.public.blob.vercel-storage.com/about-fOtwrU29kzUoRDXA3aiw3YOdsEyIbc.mp4"} />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
