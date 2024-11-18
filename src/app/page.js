
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Publics from "./components/Publics";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

import {ReactLenis} from "./utils/Lenis";

export default function Home() {

  
  return (
    <ReactLenis root>
    <main className=" bg-grain flex min-h-screen flex-col bg-[#fff] ">
      <div className="container m-auto px-12 py-0 lg:px-24">
        
        <HeroSection />
        <div className="py-8 md:py-20"/>
        <Nav />
        <About />
        <div className="py-8 md:py-20"/>
        <Divider />
        <Projects />
        <Publics />
        <div className="py-8 md:py-20"/>
        <Contact />

        

      </div>
      <Footer/>
     
    </main>
    </ReactLenis>
  );
}
