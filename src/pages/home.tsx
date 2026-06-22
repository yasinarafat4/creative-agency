import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Work from "../components/Home/Work";

const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
