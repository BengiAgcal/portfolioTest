

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
    const tools = ['Nomad Sculpt',
        'Cinema 4D',
        'WebAR'];

    const P1 = "This augmented reality installation explores the symbolic clash between the bull and buffalo, which represent the contrasting forces of financial markets and human nature. Drawing from the bullish and bearish investment strategies, the bull embodies market-driven greed, aggression, and the relentless pursuit of growth. It ascends along financial charts, hoarding resources and displaying peak power. The buffalo, in contrast, represents a more grounded, pastoral energy—symbolizing the potential for balance and stability. "
    const P12 = "Though both are domesticated bovines, the buffalo is less aggressive, less captivated by the drive for excess. It embodies a quiet resilience, a natural counterpart to the bull’s unyielding push for dominance and expansion."
    const P2 = "As the market crashes, however, the bull loses its grandeur, transforming into a sacred, vulnerable form—Apis, the Egyptian bull that once symbolized abundance. In this moment of downfall, the bull is reduced to sustenance, echoing the phrase, 'Let them eat the bull,' which underscores the vulnerability of even the most powerful forces in the face of market instability."
    const P3 = "In this work, augmented reality (AR) technology creates an interactive, dual perspective: a 2D print portrays the bull in its moment of triumph, while an AR rendering of the same bull, accessed through a QR code placed on a physical plate, reveals its fall. This layered approach invites viewers to confront the volatility of the financial market by literally “lifting the curtain” to reveal a different view. The physical piece, with its digital counterpart, emphasizes the duality of financial cycles—the rise and inevitable fall—while encouraging deeper reflection on the emotional and existential toll these fluctuations take on individuals."
    const P4 = "By installing a QR code as the gateway to the AR experience, the piece alludes to the fragile and often illusory nature of digital wealth, echoing the volatility of crypto assets. In presenting the bull's story through physical and virtual elements, the work highlights themes of greed, vulnerability, and the evolving dynamics of the financial world."


    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"BULLISH"} />


                <HeadImg imageSrc={"/Bull/exhibit.jpg"} alt={"Galleryview of the artwork"} />

                <div className="container m-auto px-6 py-6 xl:px-12">


                    <ProjectDetails
                        tools={tools}
                        desc={"Mixed Media Interactive Installation: Print, AR, and Found Object"}
                        year={"2022"}
                        duration={"1 Week"} />
                    <Divider />

                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1 p-8 ">
                            <MovingImg imageSrc={'/Bull/gal0.webp'} alt={"Gallery image of the artwork"} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <MovingImg imageSrc={'/Bull/bull.webp'} alt={"Bull"} />
                        </div>
                        <div className="flex flex-col justify-center items-center col-span-1  p-8 ">
                            <Text text={P12} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <MovingImg imageSrc={'/Bull/buf.webp'} alt={"Buffalo"} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1 p-8  order-2 lg:w-4/5">
                            <MovingImg imageSrc={"/Bull/moo.webp"} alt={"artwork image"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8 order-1 ">
                            <Text text={P2} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1 lg:w-4/5 p-8 ">
                            <Video src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/gallery-jeRXz6DSQo71NR4CJWCpa3yTiO62sN.mp4"} />

                        </div>

                        <div className="flex items-center col-span-1 px-8  ">
                            <Title title={"AR Installation"} />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8  ">
                        <div className=" flex items-center col-span-1  p-8 order-2">
                        <Video src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/AR-UBBgyNmszZxnQJCUxPbW7Ua6cdCnVI.mp4"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8  order-1">
                            <Text text={P3} />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 px-0 py-8 ">
                        <div className=" flex items-center col-span-1  p-8 ">
                            <MovingImg imageSrc={"/Bull/QR.webp"} alt={"QR code to the experience"} />
                        </div>

                        <div className="flex items-center col-span-1 md:col-span-2 px-8  ">
                            <Text text={P4} />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 pt-16 ">
                        <div className="flex items-center justify-center col-span-1  p-8  ">
                            <Title title={"Exhibitions"} />
                        </div>
                        <div className="col-span-1  p-8  ">
                            <Project imageSrc="/Bull/gal0.webp" title="Assemblage: MFA Group Show" subtitle="" link="https://blogs.ubc.ca/fccsartwork/2022/11/24/assemblage/" isVideo={false} />
                        </div>

                    </div>
                    <div className=" py-8 md:py-16" />

                    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex justify-start items-start col-span-1 px-8 ">
                            <MovingImg imageSrc={"/Bull/tgt.webp"} alt={"Bull and buffalo"} />
                        </div>
                        <div className=" flex justify-end items-end col-span-1 px-8  md:w-4/5">
                            <MovingImg imageSrc={"/Bull/Arss1.webp"} alt={"Bull and buffalo"} />
                        </div>

                    </div>









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
