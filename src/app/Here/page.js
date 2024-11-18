

import Footer from "../components/Footer";
import { ReactLenis } from "../utils/Lenis";
import PNav from "../components/ProjectComponents/PNav";
import Banner from "../components/ProjectComponents/Banner";
import Text from "../components/ProjectComponents/Text";
import ProjectDetails from "../components/ProjectComponents/ProjectDetails";
import MovingImg from "../components/ProjectComponents/MovingImg";
import Title from "../components/ProjectComponents/Title";
import Video from "../components/ProjectComponents/Video";
import Divider from "../components/Divider";
import HeadImg from "../components/ProjectComponents/HeadImg";
import Project from "../components/Project";


export default function project() {
    const tools = ["Cinema 4D",
        "Touch Designer",
        "Daz 3D",
        "Davinci Resolve"];

    const P1 = "Here, They Can Not Touch Me explores the psychological distances that are constructed to protect individuals from uncomfortable realities, based on construal level theory. These distances—spatial, temporal, hypothetical, and social—are used to make certain issues seem distant or irrelevant. However, with the rise of digital spaces, a new form of virtual distance has been introduced, influencing how interactions with the world are mediated. As this new virtual distance suggests a false sense of empowerment within digital realms, the true safety of such environments is questioned. "
    const P2 = "To explore this idea, a digital simulation was designed, and a stress test was conducted on a humanoid figure modeled with silicone-like physics. The figure was chosen to reflect personal self-reflection and the questioning of one`&apos;`s own relationship to digital spaces. The figure was exposed to wind turbulence, which symbolized real-world truths that are typically avoided. As the turbulence intensified, the limitations of the protective shield were revealed. Though designed to safeguard the figure, the shield severely restricted movement and visibility, illustrating how digital spaces and filter bubbles create a false sense of security. As the simulation progressed, the constraints were tightened, cornering the figure and further emphasizing the restrictive nature of such shields."
    const P3 = "The work is projected onto a wooden plinth, enhancing the digital imagery with a physical dimension. This setup merges the digital and physical worlds, making the virtual form more tangible through projection mapping. The 2D digital simulation projected onto a 3D object encourages viewers to question their perceptions, bringing the abstract concept of psychological shielding into a shared physical space."




    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"HERE THEY CAN NOT TOUCH ME"} />


                <HeadImg imageSrc={"/HCT/main.jpg"} alt={"3D renders of the artwork"} />

                <div className="container m-auto px-6 py-6 xl:px-12">


                    <ProjectDetails
                        tools={tools}
                        desc={"3D Physics Simulation, Video Projection on Wooden Plinth"}
                        year={"2023"}
                        duration={"2 Weeks"} />
                    <Divider />

                    <div className="md:py-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1 p-8 ">
                            <MovingImg imageSrc={'/HCT/box.jpg'} alt={"A woman in a glass box"} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-start col-span-1 px-8  ">
                            <MovingImg imageSrc={'/HCT/back.jpg'} alt={"Gallery Installation"} />
                        </div>

                        <div className="flex flex-col justify-center items-center col-span-1 lg:col-span-2 p-8 ">
                            <h1 className="big-text2  italic text-3xl md:text-5xl font-light text-center"> `&quot;`In my 4x3 they can`&apos;`t get to me, free to roam all over my cyber fantasy`&quot;` </h1>
                            <h2 className="small-text text-xl md:text-2xl font-light pt-4 text-center">-Rina Sawayama </h2>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1  p-8  order-2">
                            <Video src={"/HCT/good.mp4"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8 order-1 ">
                            <Text text={P2} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex items-center col-span-1  p-8 ">
                            <Video src={"/HCT/turn.mp4"} />
                        </div>

                        <div className="flex items-center col-span-1 px-8  ">
                            <Text text={P3} />
                        </div>
                    </div>

                    <div className=" py-8 md:py-16" />
                    <div className=" flex justify-center">
                        <Title title={"Animated Video"} />
                    </div>

                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://www.youtube.com/embed/cqs5OKUgnB8?si=nfhhr_KxJkWgMmGv"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Here They Can Not Touch Me"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 pt-16 ">
                        <div className="flex items-center justify-center col-span-1  p-8  ">
                            <Title title={"Exhibitions"} />
                        </div>
                        <div className="col-span-1  p-8  ">
                            <Project imageSrc="/HCT/install.jpg" title="Assemblage II: MFA Group Show" subtitle="" link="https://blogs.ubc.ca/fccsartwork/2023/05/03/assemblage-ii-mfa/" isVideo={false} />
                        </div>

                    </div>
                    <div className=" py-8 md:py-16" />

                    <div className="grid grid-cols-1 justify-start items-start md:grid-cols-2 px-0 py-8 ">
                        <div className=" flex flex-col justify-center items-center col-span-1  px-8 ">
                            <MovingImg imageSrc={"/HCT/test.jpg"} alt={"Projection mapping testing"} />
                            <h2 className="small-text text-xl md:text-2xl font-light pt-4 text-center">Projection Mapping Test on Plastic Bag </h2>
                        </div>

                        <div className="flex justify-start items-start col-span-1 px-8  ">
                            <MovingImg imageSrc={"/HCT/box2.jpg"} alt={"Artwork image"} />
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
