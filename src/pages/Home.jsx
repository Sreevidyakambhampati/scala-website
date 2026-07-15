import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Innovation from "../components/Innovation";
import MissionVision from "../components/MissionVision";
import Statistics from "../components/Statistics";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Innovation />
      <MissionVision />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;