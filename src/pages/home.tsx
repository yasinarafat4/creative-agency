import Hero from "../components/Home/Hero";
import Work from "../components/Home/Work";

const Home = () => {
  return (
    <div>
      <Hero backgroundImage="/src/assets/hero-bg.webp" />
      <Work />
    </div>
  );
};

export default Home;
