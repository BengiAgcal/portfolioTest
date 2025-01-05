
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Divider from "./components/Divider";
import ProjectsAlt from "./components/ProjectsAlt";
import Publics from "./components/Publics";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

import { ReactLenis } from "./utils/Lenis";

export default function Home() {


  return (
    <ReactLenis root>
      <link rel="icon" href="/favicon.png" />
      <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">
        <div className="container m-auto px-6 md:px-12 py-0 lg:px-24">

          <HeroSection />
          <div className="py-6 sm:py-10 lg:py-0" />
          <Nav />
          <ProjectsAlt />
          <Divider />
          <Publics />
          <Divider />
          <About />
          <div className="py-8 md:py-10" />
          <Divider />
          <Contact />



        </div>
        <Footer />

      </main>
    </ReactLenis>
  );
}
