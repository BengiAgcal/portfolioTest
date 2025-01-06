

import Footer from "../components/Footer";
import { ReactLenis } from "../utils/Lenis";
import PNav from "../components/ProjectComponents/PNav";
import Banner from "../components/ProjectComponents/Banner";
import Text from "../components/ProjectComponents/Text";
import BText from "../components/ProjectComponents/BText";
import ProjectDetails from "../components/ProjectComponents/ProjectDetails";
import MovingImg from "../components/ProjectComponents/MovingImg";
import Title from "../components/ProjectComponents/Title";
import Video from "../components/ProjectComponents/Video";
import Divider from "../components/Divider";
import HeadImg from "../components/ProjectComponents/HeadImg";
import STitle from "../components/ProjectComponents/STitle";
import LTitle from "../components/ProjectComponents/LTitle";
import SectDiv from "../components/ProjectComponents/SectDiv";
import UOList from "../components/ProjectComponents/UOList";



export default function project() {
    const tools = ["Unity",
        "Blender",
        'Audacity',
        'HTML/CSS/JS',
        "PHP",
        'Dall-E',
        'Materialize'];
    const P1 = "The 8th Continent is an immersive video game installation that addresses plastic pollution. Players explore a virtual environment inspired by the Great Pacific Garbage Patch, rescuing animals trapped by waste. Each freed animal reveals voice-recorded insights from past participants. \n\nGuided by research, iterative design, and user feedback, this work showcases the journey of designing an interactive, impactful tool for environmental advocacy."
    const P15 = "Every year, millions of tons of plastic pollute our oceans, yet for many in developed countries, the issue feels distant. Microplastics are invisible, urban spaces are pristine, and waste is exported far from sight. This detachment causes psychological distances, leading to inaction."
    const P2 = "After all creatures are saved, the environment transforms: colors brighten, a soft piano melody fades in, and players experience a brief, utopian scene. Soon after, trash comes back up, slightly re-polluting the landscape. The message “We still have a lot to clean up!” appears, urging continued action as the game restarts."
    const P3 = "At the end of the game, the players have the option to share their thoughts through a voice recording to be included in the game via a website (server currently inactive)."
    const P4 = "The installation was designed for The Visualization and Emerging Media Studio at UBC Okanagan which is a large, curved extended reality (XR) display, offering a 3D viewing experience with 3D glasses."
    const P5 = "Spanning over 36,501 square inches across 40 screens, the setup allowed multiple viewers to engage with the work simultaneously, immersing them in an expansive digital landscape. "
    const P6 = "The initial version of The 8th Continent featured a snowy forest inspired by British Columbia, but it was later redesigned to represent the Great Pacific Garbage Patch as a frozen “8th Continent.” "
    const P7 = "This arctic island, composed of trash embedded in glaciers, was crafted using 3D and AI-based techniques. The terrain was sculpted in Blender, with a scattered water bottle texture generated by DALL-E and layered with ice effects to create the look of plastic trapped under ice."
    const P75 = "Using Blender, the final texture was baked into a high-resolution diffuse image, and normal and roughness maps were created with Materialize software to enhance realism."
    const P8 = "At the island’s center, a large billboard serves as an in-game interface, displaying instructions and participant quotes, providing a platform for public voices within the immersive environment. By providing spatiality and material permanence to the voice recordings through text, this work offers the public an opportunity to reclaim commercial screens and amplify their voices."


    return (
        <ReactLenis root>
            <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">

                <PNav />
                <Banner Title={"THE 8TH CONTINENT"} />


                <HeadImg imageSrc={"/T8C/header.webp"} alt={"People interacting with a large screen"} />

                <div className="container m-0 sm:m-auto px-6 lg:px-12 py-0 ">


                    <ProjectDetails
                        tools={tools}
                        desc={"A video game installation on plastic pollution with participant-created voice recordings. Developed for Canada’s highest-resolution 3D, VR-ready wall"}
                        year={"2023"}
                        duration={"3-4 months"} />
                    <Divider />
                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <LTitle title={"PROJECT SUMMARY"} />
                            <Text text={P1} />
                        </div>

                        <div className="flex items-center col-span-1 ">
                            <Video fallbackSrc={"/T8C/Doe.mp4"}
                                src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/T8C/Doe-HwPRxjPkNcUPOT95kzETMwaBPQNUFU.mp4"} />
                        </div>
                    </div>

                    <SectDiv />

                    <hr className="h-px my-3 border-1 border-zinc-500" />

                    <div className=" ">
                        <LTitle title={"PROBLEM"} />
                        <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> How might we bring individuals closer to the issue of environmental pollution and empower them to share their voice?  </h1>
                        <Text text={P15} />
                    </div>

                    <SectDiv />

                    <hr className="h-px my-3 border-1 border-zinc-500" />

                    <div className=" ">
                        <LTitle title={"RESEARCH & INSIGHTS"} />
                        <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Sentiments from Environmental Clean Ups  </h1>
                        <Text text={"To better understand the people's perceptions of plastic pollution, I conducted interviews with people who participated in environmental activities. Which allowed me to be closer to people who actively try to take part in being the solution to environmental pollution."} />
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2  ">
                        <div className="flex items-center col-span-1 pb-4 md:w-5/6">
                            <MovingImg imageSrc={"/T8C/LanEn0.jpg"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 pb-4">
                            <STitle title={"An Environmental Intervention"} />
                            <Text text={"In 2021, I collaborated on Land Enough, a participatory intervention where 29 individuals were invited to a beach devastated by plastic waste. Participants collected trash and transformed it into objects. As an event organiser, I got the opportunity to have semi-structured interviews with the participants. "} />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2  md:pt-6">
                        <div className=" flex flex-col justify-center items-start col-span-1 pb-4">
                            <Text text={"The interviews revealed:"} />
                            <ul className="px-5 pt-2">
                                <UOList bold={"Proximity matters:"} text={"Many participants were unaware of the severity of plastic pollution until they experienced it firsthand."} />
                                <UOList bold={'Mixed emotions:'} text={"Act of creating fostered empowerment and optimism, but also feelings of helplessness and anger about systemic issues. "} />
                                <UOList bold={"The power of sharing:"} text={"Many felt relief sharing frustrations, with some discussing environmental concerns for the first time."} />

                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 md:w-5/6 ">
                            <MovingImg imageSrc={"/T8C/LanEn1.jpg"} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-3 ">
                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/beachClean.jpg"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 md:col-span-2 md:pl-9 pb-4">
                            <STitle title={"Environmental Clean-Ups"} />
                            <Text text={"Joining beach clean-ups and having conversations with the other participants also deepened my understanding of recurring public sentiments:"} />
                            <ul className="px-5 pt-2">
                                <UOList bold={"Frustration with systemic issues:"} text={'Comments like "The problem is not our consumption, it’s the production" highlighted how individuals felt powerless in the face of larger forces.'} />
                                <UOList bold={"Despair:"} text={'Comments such as "Sometimes I think the world would be better if humans didn’t exist" revealed the emotional toll of environmental degradation.'} />
                                <UOList bold={"The value of community:"} text={' Many participants expressed that the collective action of clean-ups gave them hope, even in the face of overwhelming challenges.'} />
                            </ul>
                        </div>

                    </div>

                    <SectDiv />
                    <h1 className=" md:pt-6 big-text2  italic text-xl md:text-4xl font-light text-center"> &quot;I wish everyone could experience this. Once you see the pollution yourself, you will not forget because you have an attachment to this place and this Earth&quot; </h1>
                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-3  md:pt-6">
                        <div className=" flex flex-col justify-center items-start col-span-1 md:col-span-2  pb-4">
                            <STitle title={"Emerging Themes"} />
                            <Text text={"The qualitative coding of these interviews revealed the emergence of certain themes:"} />
                            <ul className="px-5 pt-2">
                                <UOList bold={"Proximity with the Problem:"} text={"Experiencing pollution firsthand raises awareness and concern."} />
                                <UOList bold={"Taking Action:"} text={"Participating in clean-ups fosters a sense of impact and empowerment."} />
                                <UOList bold={"Sharing Emotions:"} text={"Discussing environmental frustrations brings relief and validation. "} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <Video fallbackSrc={"/T8C/Owl.mp4"}
                                src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/T8C/Owl-pKBPrxcApAKoLbEvbbb1whm8W6H0dT.mp4"} />
                        </div>
                    </div>

                    <SectDiv />
                    <hr className="h-px my-3 border-1 border-zinc-500" />

                    <div className="grid grid-cols-1 md:grid-cols-2  md:pt-6">
                        <div className=" flex flex-col justify-center items-start col-span-1 pb-4 md:pr-9">
                            <LTitle title={"Project Goals"} />
                            <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Digital Space for Particiation  </h1>
                            <Text text={"Building on these insights, I set the following goals for the immersive game:"} />
                            <ul className="px-5 pt-2">
                                <UOList bold={"Foster proximity:"} text={"Help users experience the impact of plastic pollution in an emotionally engaging way."} />
                                <UOList bold={"Encourage participatory action:"} text={"Merge digital interactivity with user-generated content."} />
                                <UOList bold={"Simulate positive impact:"} text={"Replicate the rewarding effects of environmental clean-ups to inspire real-world action."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 md:w-5/6 ">
                            <MovingImg imageSrc={"/T8C/end0.webp"} />
                        </div>
                    </div>

                    <SectDiv />
                    <hr className="h-px my-3 border-1 border-zinc-500" />

                    <LTitle title={"Design Frameworks & Competitor Analysis"} />
                    <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Gamification and Immersion </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2  md:pt-6">
                        <div className=" flex flex-col justify-center items-start col-span-1 pb-4">

                            <Text text={"Key principles from persuasive game design literature have informed this project:"} />
                            <BText text={"Malone's Elements of Motivation (1980):"} />
                            <ul className="px-5 p-2">
                                <UOList bold={""} text={"Achievable challenges to boost self-efficacy"} />
                                <UOList bold={""} text={"Clear goals and feedback"} />
                                <UOList bold={""} text={"Immersive narratives in fantasy settings"} />
                            </ul>
                            <BText text={"Persuasive Design Strategies:"} />
                            <ul className="px-5 p-2">
                                <UOList bold={""} text={"Convey hope and optimism to counter feelings of helplessness"} />
                                <UOList bold={""} text={"Ensure autonomy and freedom of choice"} />
                                <UOList bold={""} text={"Keep gameplay concise and intuitive"} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 md:w-5/6 ">
                            <MovingImg imageSrc={"/T8C/screen.webp"} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/CompAnalysis.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 md:pl-9 pb-4">
                            <STitle title={"Competitor Analysis"} />
                            <Text text={"I analyzed popular immersive experiences on sustainability to identify strengths and gaps, discovering that few, if any, had incorporated participatory content creation as a form of interaction."} />
                        </div>
                    </div>
                    <SectDiv />
                    <hr className="h-px my-3 border-1 border-zinc-500" />

                    <LTitle title={"Design & User Testing"} />
                    <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Iterative Design Process </h1>
                    <Text text={"The design process followed an iterative approach informed by feedback of 10+ users. Each iteration addressed specific challenges and integrated new solutions to refine the immersive experience."} />
                    <div className="p-2" />
                    <MovingImg imageSrc={"/T8C/screen2.webp"} />
                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <STitle title={"1. A New Landscape"} />
                            <Text text={"The first prototype featured a polluted forest inspired by the natural landscapes of British Columbia."} />
                            <div className="p-3" />
                            <BText text={"User Feedback:"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Unrealistic:"} text={"Many users reported that forests in their surroundings were not visibly polluted."} />
                                <UOList bold={"Not relatable:"} text={"International users felt disconnected due to differences in climate and geography."} />
                                <UOList bold={"Disturbing:"} text={"The realistic 3D rendering created an 'uncanny valley' effect, making the environment feel unnatural and unsettling."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1  md:w-full">
                            <MovingImg imageSrc={"/T8C/old.webp"} />
                        </div>
                    </div>
                    <SectDiv />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">

                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/ter2.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1  md:pl-9">
                            <STitle title={"Solution"} />
                            <Text text={"Shifted to an abstract representation inspired by the Great Pacific Garbage Patch. The new landscape featured a fictional 8th continent, a glacier-like island made of frozen trash embedded in ice. This approach allowed for a universal, imaginative connection to the issue."} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <STitle title={"2. Participatory Content Creation"} />
                            <Text text={"Initially user-generated content was incorporated as text quotes displayed within the game."} />
                            <div className="p-3" />
                            <BText text={"User Feedback:"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Text lacked emotional impact:"} text={"Participants felt that quotes alone failed to convey the personal connection of real voices."} />
                                <UOList bold={"Audio recordings were impactful but fleeting:"} text={"While audio recordings conveyed individual personalities through tone and accents, they were not memorable due to their one-time playback."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1  md:w-full">
                            <MovingImg imageSrc={"/T8C/Screenshot.webp"} />

                        </div>
                    </div>
                    <SectDiv />
                    <div className="grid grid-cols-1 md:grid-cols-4 ">

                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/record.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 md:col-span-3  md:pl-9">
                            <STitle title={"Solution"} />
                            <Text text={"Combined audio recordings with accompanying text displayed on an in-game billboard. This approach maximized emotional engagement while ensuring accessibility and permanence. To gather content, a complementary website was developed where participants could easily record and upload their input, expanding the scope of user participation."} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <STitle title={"3. Abandoning 2D UI"} />
                            <Text text={"Text subtitles of the recordings were displayed in the screen, floating in the player's field of vision."} />
                            <div className="p-3" />
                            <BText text={"User Feedback:"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Overwhelming visuals:"} text={"Subtitles got distorted in the stereoscopic display, disrupting vision."} />
                                <UOList bold={"Breaking the illusion:"} text={"Floating text reminded users of conventional screens, detracting from the immersive experience."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 md:w-full">
                            <MovingImg imageSrc={"/T8C/sign.webp"} />
                        </div>
                    </div>
                    <SectDiv />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">

                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <Video fallbackSrc={"/T8C/bunny.mp4"}
                                src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/T8C/bunny-IhEqOPdd3urH6wOxFcOGth524KKHQy.mp4"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1  md:pl-9">
                            <STitle title={"Solution"} />
                            <Text text={"Replaced subtitles with a large, in-game billboard. This spatially integrated interface displayed participant quotes and instructions, reclaiming the visual space for environmental messaging. The billboard served as a metaphor for amplifying public voices in urban and natural settings."} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <STitle title={"4. Reward Systems and Emotional Payoff"} />
                            <Text text={"Players cleaned the environment and rescued animals, but the emotional impact felt incomplete."} />
                            <div className="p-3" />
                            <BText text={"User Feedback:"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Lack of closure:"} text={"Testers wanted a more fulfilling sense of accomplishment at the end of the game."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1  md:w-full">
                            <MovingImg imageSrc={"/T8C/end1.webp"} />
                        </div>
                    </div>
                    <SectDiv />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">

                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/End.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1  md:pl-9">
                            <STitle title={"Solution"} />
                            <Text text={'Introduced a transformation sequence where the polluted world turned into a utopian landscape. Players experienced a brief moment of peace and beauty before the game loop restarted with a motivational message ("We still have a lot to clean up!").'} />
                        </div>
                    </div>
                    <SectDiv />
                    <MovingImg imageSrc={"/T8C/end2.webp"} />
                    <SectDiv />

                    <hr className="h-px my-3 border-1 border-zinc-500" />


                    <LTitle title={"Final Product"} />
                    <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> The Experience </h1>
                    <div className="p-2" />
                    <MovingImg imageSrc={"/T8C/UserFlow.webp"} />
                    <SectDiv />
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://www.youtube.com/embed/4sPqCH1SCuM?si=4g-r07STP-brs0vL"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="The Eighth Continent"
                        ></iframe>
                    </div>
                    <SectDiv />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">

                            <ul className="px-5 p-2">
                                <UOList bold={"Narrative Progression:"} text={"Players start in a dark, polluted environment that visually evolves as they clean and rescue animals. This transformation highlights the tangible impact of individual actions"} />
                                <UOList bold={"Participatory Integration:"} text={"Audio recordings are paired with billboard displays, showcasing diverse voices. These recordings are curated to reflect a variety of emotional and cultural perspectives, ensuring inclusivity"} />
                                <UOList bold={"Emotional Payoff:"} text={"The utopian sequence provides an emotional resolution while leaving players with a sense of urgency to continue efforts beyond the game."} />
                                <UOList bold={"Public Interaction:"} text={"The game is designed for public spaces, encouraging spectators to engage as passive participants. The complementary website allows broader community involvement, enabling anyone to contribute voice recordings."} />
                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/ani0.webp"} />
                        </div>
                    </div>

                    <SectDiv />

                    <hr className="h-px my-3 border-1 border-zinc-500" />


                    <LTitle title={"Reflections & Future Work"} />
                    <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Lessons Learned </h1>
                    <Text text={"This project demonstrated the power of participatory design and immersive technology to foster emotional connections and inspire pro-environmental behaviors. It highlighted the importance of iterative feedback and user-centered design in creating impactful experiences."} />
                    <div className="p-2 md:p-4" />
                    <MovingImg imageSrc={"/T8C/island2.webp"} />
                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" flex flex-col justify-center items-start col-span-1  pb-4">
                            <STitle title={"Challenges"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Participant Content Moderation:"} text={"As the database of voice recordings grew, an automated system will be needed to filter inappropriate submissions. ( The voice recording website is currently inactive.)"} />
                                <UOList bold={"Balancing Accessibility and Immersion:"} text={"Ensuring the experience remains accessible for casual players while retaining its immersive quality."} />

                            </ul>
                        </div>
                        <div className="flex items-center col-span-1 pb-4 md:w-full">
                            <MovingImg imageSrc={"/T8C/Test.webp"} />
                        </div>
                    </div>

                    <SectDiv />

                    <div className="grid grid-cols-1 md:grid-cols-2 ">

                        <div className="flex items-center col-span-1 pb-4 ">
                            <MovingImg imageSrc={"/T8C/ani2.webp"} />
                        </div>
                        <div className=" flex flex-col justify-center items-start col-span-1 pb-4 md:pl-9">
                            <STitle title={"Future Directions"} />
                            <ul className="px-5 p-2">
                                <UOList bold={"Scaling the Experience:"} text={"Expanding to more accessible platforms like mobile and VR to reach broader audiences."} />
                                <UOList bold={"Community Engagement:"} text={"Partnering with local environmental organizations to collect more diverse user input."} />
                                <UOList bold={"Extended Applications:"} text={"Exploring how this participatory model could be adapted for other environmental or social issues."} />
                            </ul>
                        </div>
                    </div>

                    <SectDiv />
                    <hr className="h-px my-3 border-1 border-zinc-500" />
                    <LTitle title={"Success and Impact"} />
                    <h1 className="small-text text-xl md:text-5xl font-semibold pb-3 md:pb-4 "> Share Your Voice</h1>

                    <Text text={"This work was presented at GOODIT'23 and ISEA2024 conferences, where it received recognition for its innovative approach to participatory and immersive design. It was also exhibited at the International Living Things Art Festival, engaging diverse audiences in discussions around environmental advocacy."} />
                    <div className="p-1" />
                    <Text text={"Furthermore, the project has become a permanent installation at the Visual Emerging Media Studio, home to Canada’s largest curved 3D screen. The project currently holds over 50 participant voice recordings, reflecting the thoughts and perspectives of individuals from 10+ nations, amplifying a rich diversity of voices."} />
                    <div className="p-2" />
                    <Video fallbackSrc={"/T8C/Deer.mp4"}
                        src={"https://tksoio8smstmaj9d.public.blob.vercel-storage.com/T8C/Deer-3dbSke1TBNatblACreW8jsPb2AlA8x.mp4"} />

                    <SectDiv />
                    <SectDiv />

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
