import Hero from "./Hero";
import MyPortfolio from "./MyPortfolio";
import About from "./About";
import FAQ from './FAQ'
import Contact from "./Contact";
import MyServices from "./MyServices";

export default function Home() {
  return (
    <>
        <Hero />
        <MyPortfolio />
        <About />
        <MyServices />
        <FAQ />
        <Contact />
    </>
  );
}
