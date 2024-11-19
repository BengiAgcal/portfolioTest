import React from 'react';
import Project from './Project';
import Empty from './Empty';

const Projects = () => {
    return (
        <section>
            <h2  className="big-text2 text-5xl md:text-8xl font-medium pt-24  text-center "id="projects" > <span></span>Selected Works</h2>
            <div  className="container px-0 py-2">
               

                <div className="grid grid-cols-1 md:grid-cols-3 w-full items-center justify-center ">

                    <Project 
                        // imageSrc="/BAI/Swim.mp4"
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/BAI/Swim-qlohO0qjePqd4CA7SiBJpwwb0QOWtw.mp4"
                        title="BAI BAI"
                        subtitle="3D Animated Projection Mapping Installation (2023-2024)"
                        link="/BAIBAI"
                        isVideo={true}
                        className="md:col-span-2 md:pb-[15vh]" // span 2 columns on medium screens and up
                    />

                    {/* Empty slot (to create a gap if needed) */}
                    <Empty />
                    <Empty />
                    <Project
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/Beaver/dam-PPP2OkjXIzBabUyJEAzbcAksmgBa42.mp4"
                        //imageSrc="/BVR/dam.mp4"
                        title="Beaver World"
                        subtitle="3D Environmental Education Video Game (2023-2024)"
                        link="/Beaver"
                        isVideo={true}
                        className=" md:col-span-2 pb-0 md:pb-[15vh]" // span 1 column
                    />


                    <Project
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/T8C/Deer2-mdv3GAxcZ3snlzdMmjzAdjiFqDqiUq.mp4"
                        // imageSrc="/T8C/Deer2.mp4"
                        title="The 8th Continent"
                        subtitle="A video game installation on plastic pollution with participant-created voice recordings (2023)"
                        link="/Eight"
                        isVideo={true}
                        className="md:col-span-2 flex md:pb-[15vh] md:w-3/4 lg:w-4/6 items-center justify-center" // span 1 column
                    />
                    <Empty />
                    <Empty />


                    <Project
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/HCT/dont-xqhefQcoo6IosZYYr7dyyaEGIHOlTK.mp4"
                        //imageSrc="/HCT/dont.mp4"
                        title="Here, They Cant Touch Me"
                        subtitle="3D Physics Simulation, Video Projection on Wooden Plinth (2023)"
                        link="/Here"
                        isVideo={true}
                        className="md:col-span-2 md:pb-[15vh]" // span 1 column
                    />

                    <Project
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/Bull/head-SKNS0bEcvWLTuHyjZK7kZ21U73c15h.mp4"
                       // imageSrc="/Bull/head.mp4"
                        title="Bullish"
                        subtitle="Mixed Media Interactive Installation: Print, AR, and Found Object (2022)"
                        link="/Bullish"
                        isVideo={true}
                        className="md:col-span-2 flex md:pb-[15vh] md:w-3/4 lg:w-4/6 items-center justify-center" // span 1 column
                    />
                    <Empty />
                    <Empty />
                    <Project
                        imageSrc="https://tksoio8smstmaj9d.public.blob.vercel-storage.com/WNM/head-hSs9asuXCkQyiSX4KIAccdz5JUOmui.mp4"
                        //imageSrc="/WNM/head.mp4"
                        title="Worth No More"
                        subtitle="3D Animated Video (2021)"
                        link="/Worth"
                        isVideo={true}
                        className="md:col-span-2 flex md:pb-[15vh] items-center justify-center" // span 1 column
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;
