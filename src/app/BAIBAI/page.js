

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
import Project from "../components/Project";


export default function project() {
    const tools = ["Unreal Engine 5", "Blender", "Substance Painter", "Touch Designer", "p5.js", "Unity 3D", "Davinci Resolve"];
    const P1 = "Bai Bai is a 3D-animated multimedia video installation that traces the migration journey of a mystical tiger adapting to a 21st-century industrialized society. As the tiger builds a life of comfort and stability, echoes of its past remain—a reminder of enduring ties to home and the bittersweet nature of transformation. Through digital connections and memories, the tiger balances between embracing the present and longing for the familiar, reflecting the migrant experience in the digital age. This project was developed as a part of my MFA thesis exhibition. "
    const tTexture = "The tiger’s character was designed to embody an ethereal yet grounded presence, blending magical qualities with realistic features. To achieve a unique, recognizable aesthetic, I used p5.js to create a custom fur pattern based on a Perlin noise algorithm, mapping this texture onto a pre-rigged 3D asset with built-in animations. Additional, custom animations were created in Blender and then imported into Unreal Engine 5 for rendering."
    const tEnv1 = "The tiger’s original home is inspired by the architecture and ambiance of Turkish/Ottoman baths, or hamams. The inclusion of the hamam serves as a symbolic gesture, capturing shared memories and the warmth of “home” experienced across diaspora communities."
    const tEnv2 = "The new landscape is characterized by expansive parking lots —an industrial wasteland reflecting society’s prioritization of convenience over community and environmental wellness. This environment also includes familiar, everyday settings like an office, an underground train station, and a bathroom, each evoking the rhythm and structure of contemporary life."
    const tMap1 = "Projection mapping was chosen to dissolve boundaries between screen and physical space. Through the use of Touch Designer, each surface in the gallery became a potential canvas, allowing the digital environment to envelop viewers. By enveloping viewers in the digital environment, this technique enabled creative manipulations of perspective, creating immersive depth and an augmented reality."
    const tMap2 = "For an open-space installation, a sculpture was 3D-printed to serve as a tangible piece of the digital narrative. Building a custom Unity 3D application, I matched the projector’s focal length and perspective with a virtual camera, ensuring precise texture mapping onto the sculpture surface."
    const imageArray = [
        {
            src: "/BAI/Hmm0.jpg", // Image resource
            start: -80,                // First number (e.g., width)
            end: 225, isVideo: false               // Second number (e.g., height)
        },
        {
            src: "/BAI/Hmm00.jpg",
            start: 255,                // First number (e.g., width)
            end: -150, isVideo: false
        },
        {
            src: "/BAI/Hmm1.jpg",
            start: -20,                // First number (e.g., width)
            end: 125, isVideo: false
        },
        {
            src: "/BAI/Hmm2.jpg", // Image resource
            start: 250,                // First number (e.g., width)
            end: -150, isVideo: false                 // Second number (e.g., height)
        },
        {
            src: "/BAI/home0.jpg",
            start: -175,                // First number (e.g., width)
            end: 50, isVideo: false
        },
        {
            src: "/BAI/home1.jpg",
            start: 100,                // First number (e.g., width)
            end: -125, isVideo: false
        }
    ];

    const imageArray2 = [
        {
            src: "/BAI/ProjectorRound.mp4",  // Image resource
            start: -280,                // First number (e.g., width)
            end: 225, isVideo: true                  // Second number (e.g., height)
        },
        {
            src: "/BAI/ProjectorExhibit.jpg",
            start: 255,                // First number (e.g., width)
            end: -150, isVideo: false
        },
        {
            src: "/BAI/ProjectorTable2.jpg",
            start: -20,                // First number (e.g., width)
            end: 125, isVideo: false
        },
        {
            src: "/BAI/ProjectorMAin.jpg",// Image resource
            start: 250,                // First number (e.g., width)
            end: -150, isVideo: false                // Second number (e.g., height)
        },
        {
            src: "/BAI/ProjectorTable.mp4",
            start: -175,                // First number (e.g., width)
            end: 50, isVideo: true
        },
        {
            src: "/BAI/ProjectorT.mp4",
            start: 100,                // First number (e.g., width)
            end: -125, isVideo: true
        }
    ];

    const imageArray3 = [
        {
            src: "/BAI/sculpt0.mp4",  // Image resource
            start: -280,                // First number (e.g., width)
            end: 225, isVideo: true                  // Second number (e.g., height)
        },
        {
            src: "/BAI/sculpt.mp4",
            start: 255,                // First number (e.g., width)
            end: -150, isVideo: true
        },
        {
            src: "/BAI/sculpt1.jpg",
            start: -20,                // First number (e.g., width)
            end: 125, isVideo: false
        },
        {
            src: "/BAI/sculpt2.jpg",// Image resource
            start: 250,                // First number (e.g., width)
            end: -150, isVideo: false                // Second number (e.g., height)
        },
        {
            src: "/BAI/sculpt3.jpg",
            start: -175,                // First number (e.g., width)
            end: 50, isVideo: false
        },
        {
            src: "/BAI/sculpt4.mp4",
            start: 100,                // First number (e.g., width)
            end: -125, isVideo: true
        }
    ];




    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"BAI BAI"} />
                
                
 <HeadImg imageSrc={"/BAI/HeaderImg.jpg"} alt={"Tiger inside the office"} />

                <div className="container m-auto px-6 py-6 xl:px-12">


                    <ProjectDetails
                        tools={tools}
                        desc={"Immersive 3D Animation with Projection Mapping"}
                        year={"2023-2024"}
                        duration={"4 months"} />
                    <Divider />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
                        <div className=" flex items-center col-span-1  p-8 order-2 md:order-1 ">
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1  p-8 order-1">
                            <Video src={"/BAI/round.mp4"} />
                        </div>
                    </div>

                    <div className="md:py-8" />
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1028573038?badge=0&autopause=0&player_id=0&app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="BAIBAI"
                        ></iframe>
                    </div>

                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
                        <div className=" flex items-center col-span-1  p-8 ">
                            <Title title={"Character Design and Animation"} />
                        </div>

                        <div className="flex items-center col-span-1   p-8 ">
                            <MovingImg imageSrc={"/BAI/PatternProcess.jpg"} alt={'a Tiger'} />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 px-0 py-16">
                        <div className=" flex items-center col-span-1  p-4 ">
                            <Video src="/BAI/Pattern.mp4" />
                        </div>

                        <div className=" flex items-center justify-center col-span-1  p-4 ">
                            <Text text={tTexture} />
                        </div>

                        <div className="flex items-center col-span-1  p-4 ">
                            <Video src="/BAI/TextureE.mp4" />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
                        <div className=" flex items-center col-span-1  p-8 order-2 ">
                            <Title title={"Environment Design"} />
                        </div>

                        <div className="flex items-center col-span-1  p-8  order-1">
                            <Video src={"/BAI/CarRunning.mp4"} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 pt-16 ">
                        <div className=" flex flex-col items-start justify-center col-span-1  p-8 ">
                            <STitle title={"Homeland"} />
                            <Text text={tEnv1} />
                            <div className=" visible md:hidden py-24" />
                        </div>

                        <div className="col-span-1 lg:col-span-2  p-0 ">
                            <ParallaxGallery paralImgs={imageArray} />
                        </div>
                    </div>

                    <MovingImg imageSrc={"/BAI/EnvCarPark.jpg"} alt={'a Tiger'} />
                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
                        <div className="flex flex-col items-start justify-center col-span-1  p-8  ">
                            <STitle title={"New Industrial Landscape"} />
                            <Text text={tEnv2} />
                        </div>

                        <div className="flex items-center col-span-1  p-8 ">
                            <MovingImg imageSrc={"/BAI/EnvBath.jpg"} alt={'Tiger in a bath'} />
                        </div>
                    </div>

                    <div className="md:py-8" />
                    <MovingImg imageSrc={"/BAI/Metro.jpg"} alt={'a Tiger in a Metro'} />
                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-16 ">
                        <div className=" flex items-center col-span-1 p-8 order-2 ">
                            <Title title={"Projection Mapping"} />
                        </div>

                        <div className="flex items-center col-span-1 lg:col-span-2 p-8  order-1">
                            <Video src={"/BAI/ProjectorFloor.mp4"} />

                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 pt-16 ">
                        <div className="flex flex-col items-start justify-center col-span-1  p-8  ">
                            <STitle title={"Gallery Installation"} />
                            <Text text={tMap1} />
                            <div className=" visible md:hidden py-24" />
                        </div>

                        <div className="col-span-1 lg:col-span-2  p-0 ">
                            <ParallaxGallery paralImgs={imageArray2} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 pt-16 ">
                        <div className="flex flex-col items-start justify-center col-span-1  p-8 md:order-2 ">
                            <STitle title={"Projection Mapping on 3D Printed Sculpture"} />
                            <Text text={tMap2} />
                            <div className=" visible md:hidden py-24" />
                        </div>

                        <div className="col-span-1 lg:col-span-2  p-0  md:order-1">
                            <ParallaxGallery paralImgs={imageArray3} />
                        </div>
                    </div>

                    <MovingImg imageSrc={"/BAI/GalleryView.jpg"} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 pt-16 ">
                        <div className="flex items-center justify-center col-span-1  p-8  ">
                            <Title title={"Exhibitions"} />
                        </div>
                        <div className="col-span-1  p-8  ">
                            <Project imageSrc="/BAI/Artsco.jpg" title="Arts Council of the Central Okanagan" subtitle="" link="https://www.artsco.ca/baibai" isVideo={false} />
                        </div>
                        <div className="col-span-1   p-8  ">
                            <Project imageSrc="/BAI/Fina.jpg" title="University of British Columbia FINA Gallery" subtitle="" link="https://blogs.ubc.ca/fccsartwork/2024/03/25/bai-bai-bengi-agcal/" isVideo={false} />
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 order-2">
                        <div className=" flex items-center col-span-1  p-8 ">
                            <MovingImg imageSrc={"/BAI/still5.jpg"} alt={'two Tigers'} />
                        </div>

                        <div className="flex items-center col-span-1  p-8 ">
                            <MovingImg imageSrc={"/BAI/Pretty.jpg"} alt={'artwork image'} />

                        </div>
                    </div>
                    

                    <div className=" py-8 md:py-16" />
                    <MovingImg imageSrc={"/BAI/OfficeSeq.jpg"} alt={'a Tiger in an Office'} />
                    <div className=" py-8 md:py-16" />
                    <MovingImg imageSrc={"/BAI/Round.jpg"} alt={'a Tiger'} />
                    <div className=" py-8 md:py-16" />
                    <MovingImg imageSrc={"/BAI/denoise6.jpg"} alt={'Tiger Sleeping'} />









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
