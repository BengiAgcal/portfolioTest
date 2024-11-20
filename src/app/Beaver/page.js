

import Footer from "../components/Footer";
import { ReactLenis } from "../utils/Lenis";
import PNav from "../components/ProjectComponents/PNav";
import Banner from "../components/ProjectComponents/Banner";
import Text from "../components/ProjectComponents/Text";
import ProjectDetails from "../components/ProjectComponents/ProjectDetails";
import ParallaxGallery from "../components/ProjectComponents/ParallaxGallery";
import MovingImg from "../components/ProjectComponents/MovingImg";
import Title from "../components/ProjectComponents/Title";
import Video from "../components/ProjectComponents/Video";
import Divider from "../components/Divider";
import HeadImg from "../components/ProjectComponents/HeadImg";
import STitle from "../components/ProjectComponents/STitle";


export default function project() {
    const tools = ["Unity 3D",
        "HDRP, Version Control, Terrain Tools",
        "The Vegetation Engine",
        "KWS Water System",
        "Malbers Animal Controller",
        "Blender",
        "Figma"];
    const P1 = "Beaver World is an immersive, place-based 3D experience designed to engage young audiences on the critical topic of water sustainability, rooted in the Syilx Indigenous practice of water responsibility. Set in the Okanagan Valley, this game allows players to step into the life of a beaver, an essential ecological engineer tasked with restoring a degraded landscape into a thriving wetland."
    const P2 = "In the role of a beaver, players are responsible for transforming a drought-stricken area into a flourishing wetland. Through gameplay mechanics like dam-building, water diversion, and plant growth, the game teaches low-tech ecological solutions that beavers provide naturally. By completing challenges, players discover how reintroducing beavers into environments can foster resilience against the adverse impacts of human expansion and environmental degradation."
    const P3 = "With young players in mind, Beaver World aims to foster responsibility towards nature through experiential learning, introducing sustainability, climate resilience, and environmental restoration concepts through Indigenous teachings on harmonious relationships between humans, animals, and water. The game’s plant library, developed through years of participatory design and action research, features accurate 3D textures and botanical information gathered from Indigenous Knowledge Keepers, elders, scientists, and students. This resource serves not only Beaver World but also future ecological education projects."
    const P4 = "Beaver World is an ongoing, multidisciplinary collaborative project involving a research team with Aleksandra Dulic, Patricia Lasserre, Miles Thorogood, Yuzi Chu, Obi Nwosisi, Amir Rahsaz, Cadence Myroniuk, Abdullah Munir, Tanhab Hossain Sarker, and many other talented contributors. I initiated this project alongside Aleksandra Dulic and worked in it for one year three months, during which we expanded the team and advanced development across diverse creative and technical areas. As of November 2024, this project remains active and in development, though I am no longer directly involved."
    const P5 = "My role in this initiative involved implementing the interaction development and character controls for the main character, a beaver. I created custom material shaders, wrote C# scripts, and provided key support in selecting Unity assets tailored to our goals. Additionally, I mentored interns, offering resources, recorded tutorials, and project navigation guidance to help them integrate tools into their workflows. I also oversaw the environment and UI design, providing guidance and feedback to designers."
    const imageArray = [
        {
            src: "/BVR/p2.jpg", // Image resource
            start: -50,                // First number (e.g., width)
            end: 225, isVideo: false               // Second number (e.g., height)
        },
        {
            src: "/BVR/p0.jpg",
            start: 355,                // First number (e.g., width)
            end: -150, isVideo: false
        },
        {
            src: "/BVR/p3.webp",
            start: -20,                // First number (e.g., width)
            end: 125, isVideo: false
        },
        {
            src: "/BVR/p4.jpg", // Image resource
            start: 350,                // First number (e.g., width)
            end: -150, isVideo: false                 // Second number (e.g., height)
        },
        {
            src: "/BVR/p5.jpg",
            start: -5,                // First number (e.g., width)
            end: 350, isVideo: false
        },
        {
            src: "/BVR/p6.webp",
            start: 100,                // First number (e.g., width)
            end: -125, isVideo: false
        }
    ];





    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"BEAVER WORLD"} />
                

                <HeadImg imageSrc={"/BVR/swim2.jpg"} alt={"Beaver Swimming"} />

                <div className="container m-auto px-6 py-6 xl:px-12">


                    <ProjectDetails
                        tools={tools}
                        desc={"Place-based 3D Environmental Education Game, Created with UBC's Centre for Culture and Technology to Promote Ecological Awareness "}
                        year={"2023 - Ongoing"}
                        duration={"1+ Years"} />
                    <Divider />
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1 p-8 ">
                            <MovingImg imageSrc={'/BVR/walk.webp'} alt={"Beaver Walking"} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1  p-8  ">
                            <Video fallbackSrc={"/BVR/dam.mp4"}
                            src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/Beaver/dam-PPP2OkjXIzBabUyJEAzbcAksmgBa42.mp4"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8 ">
                            <Text text={P2} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1  p-8  ">

                            <Text text={P3} />
                        </div>

                        <div className="flex items-center col-span-1 px-8 ">
                            <MovingImg imageSrc={'/BVR/swim.jpg'} alt={"Beaver Swimming"} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-8 ">
                        <div className="flex items-center col-span-1 lg:col-span-2 p-8 md:p-0 ">
                            <MovingImg imageSrc={"/BVR/envr0.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <STitle title={"Contributors"} />
                            <Text text={P4} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <MovingImg imageSrc={'/BVR/walk2.jpg'} alt={"Beaver Walking"} />
                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <STitle title={"My Role"} />
                            <Text text={P5} />
                        </div>

                        <div className="flex items-center col-span-1 lg:col-span-2 p-0 md:p-20 ">
                            <MovingImg imageSrc={"/BVR/prog.jpg"} alt={"Screenshot of Beaver interactions"} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <MovingImg imageSrc={'/BVR/lvl2.webp'} alt={"Beaver Walking"} />
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 md:py-8 ">
                        <div className="flex items-center col-span-1  lg:col-span-2 p-8 ">
                            <Video fallbackSrc={"/BVR/swim.mp4"}
                            src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/Beaver/swim-YW11OytHXCrvkMhhsjC9JUqOcsTbq5.mp4"}  />
                        </div>
                        <div className=" flex flex-col items-center justify-center col-span-1 p-8 ">
                            <Title title={"Dev Tools and Techniques"} />
                            <Text text={"The development process employed several key tools to build and refine the environment, interactions, and overall gameplay experience."} />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 md:py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <STitle title={"Unity 3D - HDRP"} />
                            <Text text={"High Definition Render Pipeline was used for visually rich, high-quality graphics, particularly in recreating natural landscapes and water features."} />
                            <STitle title={"Vegetation Engine"} />
                            <Text text={"Enabled realistic vegetation rendering, making plant growth and interactions feel dynamic and lifelike. Allowed the implementation of forest fires and seasonal changes."} />
                            <STitle title={"KWS Water System"} />
                            <Text text={"Provided realistic and interactive water, crucial for gameplay elements centered on water management and ecosystem restoration."} />
                            <STitle title={"Figma"} />
                            <Text text={"Utilized for designing and prototyping the UI elements, ensuring an intuitive user experience that complements the educational gameplay."} />
                        </div>

                        <div className="flex items-center col-span-1 lg:col-span-2 p-0 ">
                            <ParallaxGallery paralImgs={imageArray} />
                        </div>
                    </div>

                    <div className="md:py-8" />



                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 p-8 order-2 ">

                            <STitle title={"Malbers Animal Controller"} />
                            <Text text={"Used to implement and control realistic animal behaviors, allowing smooth and natural movement for the beaver character."} />

                            <STitle title={"Unity Version Control"} />
                            <Text text={"Ensured seamless collaboration and version management among team members."} />


                            <STitle title={"Unity Terrain Tools"} />
                            <Text text={"Paired with the real-GIS data of the Okanagan, facilitated the creation of complex terrains, ensuring accurate landscape design reflective of the Okanagan Valley."} />

                        </div>

                        <div className="flex items-center col-span-1 lg:col-span-2 p-0 order-1">
                            <MovingImg imageSrc={"/BVR/envr.webp"} alt={"environment"}/>
                        </div>
                    </div>

                    <div className="md:py-8" />
                    <div className=" flex justify-center">
                        <Title title={"Game Play"} />
                    </div>

                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src= "https://www.youtube.com/embed/nBwQdYzMGq4?si=0Ci9inAvMcgWKuh8"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Beaver World"
                        ></iframe>
                    </div>
                    <div className="p-8" />
                    <MovingImg imageSrc={"/BVR/walk1.jpg"} alt={"A game screenshot"} />
                    <div className="md:py-8" />
                    <div className="p-8" />
                    <MovingImg imageSrc={"/BVR/swim3.webp"} alt={"A game screenshot"} />
                    <div className="md:py-8" />

                    





                </div>
                <Footer />

            </main>
        </ReactLenis>
    );
}

// <MovingImg imageSrc="/Landscape.png" alt="jos" />

/*
 <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 order-2">
                        <div className=" flex items-center col-span-1  p-8 ">

                        </div>

                        <div className="flex items-center col-span-1  p-8 order-1">

                        </div>
</div>
                    
<div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
            <div className="col-span-1 p-4">
              
            </div>

            <div className="col-span-1 p-4">

            </div>

</div>
*/
