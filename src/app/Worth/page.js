

import Footer from "../components/Footer";
import { ReactLenis } from "../utils/Lenis";
import PNav from "../components/ProjectComponents/PNav";
import Banner from "../components/ProjectComponents/Banner";
import Text from "../components/ProjectComponents/Text";
import ProjectDetails from "../components/ProjectComponents/ProjectDetails";
import MovingImg from "../components/ProjectComponents/MovingImg";
import Title from "../components/ProjectComponents/Title";
import Divider from "../components/Divider";
import HeadImg from "../components/ProjectComponents/HeadImg";


export default function project() {
    const tools = ['Nomad Sculpt',
        'Cinema 4D', 'Audacity', 'Davinci Resolve', 'Blender'];

    const P1 = "Worth No More is a 3D animated video conceived as a modern apocalyptic myth exploring the slow, cyclical extinction of humanity through climate change. Developed during my time as a Student Research Assistant in Environmental Science, this work embodies the anxious reflections on climate-induced apocalypse and critiques the anticlimactic nature of such an end compared to traditional cataclysmic narratives. In place of dramatic battles between good and evil or divine retribution, this apocalypse unfolds as gradual environmental decay—a transformation perhaps unworthy of the term 'end of the world.'"
    const P2 = "Inspired by myths of creation and destruction, this work presents climate change not as an absolute end but as part of a cyclical annihilation and renewal, much like the Stoic concept of Ekpyrosis. This project references the five previous mass extinctions and views the Anthropocene as the current phase in this sequence of natural cycles, suggesting that while life on Earth will persist, humanity’s significance and permanence are ultimately fragile."
    const P3 = "Technically, the project involved 3D scultping, modeling, texturing, and animation to create an immersive environment. Emphasis was placed on rendering environmental elements that degrade over time, illustrating themes of decay and transience. Physical simulations were utilized to create a sense of slow, tranquil devastation. Using cyclic animations, the video visually communicates humanity’s self-perpetuating cycle of creation and destruction, inviting viewers to reflect on our role in an ecosystem that may one day thrive without us."
    const P4 = "Through an unglorified vision of extinction, Worth No More conveys a haunting reminder: as nature reclaims its course, humanity may find itself simply another chapter in Earth’s ongoing history. The digital medium allows viewers to confront both the rising waters and their own role in this slow apocalypse. As human ambition erodes the natural world, the piece reflects on the possibility that, in the face of cosmic cycles, humanity may ultimately be worth no more."


    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"WORTH NO MORE"} />


                <HeadImg imageSrc={"/WNM/turtle.jpg"} alt={"a Turtle"} />

                <div className="container m-auto px-6 py-6 xl:px-12">


                    <ProjectDetails
                        tools={tools}
                        desc={"3D Animated Video"}
                        year={"2021"}
                        duration={"2 Weeks"} />
                    <Divider />

                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1 p-8 ">
                            <MovingImg imageSrc={'/WNM/man.jpg'} alt={"a Man falling from the sky"} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <MovingImg imageSrc={'/WNM/4.jpg'} alt={"Screenshot from the video"} />
                        </div>
                        <div className="flex flex-col justify-center items-center col-span-1  p-8 ">
                            <Text text={P2} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <MovingImg imageSrc={'/WNM/cat.jpg'} alt={"a Cat"} />
                    <div className="md:py-8" />
                    <div className="py-8" />
                    <div className=" flex justify-center">
                        <Title title={"Environment Design"} />
                    </div>

                    <iframe frameBorder="0" width="100%" height="500"
                        src="https://momento360.com/e/u/575ecd3c4fc74cff8ee90557619f6253?utm_campaign=embed&utm_source=other&heading=-43.61&pitch=-0.41&field-of-view=75&size=medium">
                    </iframe>



                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1 p-8  order-2 lg:w-4/5">
                            <MovingImg imageSrc={"/WNM/5.jpg"} alt={"Screenshot from the video"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8 order-1 ">
                            <Text text={P3} />
                        </div>
                    </div>
                    <div className="md:py-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1 lg:w-4/5 p-8 ">
                            <MovingImg imageSrc={"/WNM/3.jpg"} alt={"Screenshot from the video"} />

                        </div>

                        <div className="flex items-center col-span-1 px-8  ">
                            <Text text={P4} />
                        </div>

                    </div>
                    <div className="md:py-8" />
                    <div className=" flex justify-center">
                        <Title title={"Animated Video"} />
                    </div>
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://www.youtube.com/embed/osINII8Shbw?si=VEFmlLsnwgLfKgGf"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Worth No More"
                        ></iframe>
                    </div>
                    <div className="py-8" />


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
