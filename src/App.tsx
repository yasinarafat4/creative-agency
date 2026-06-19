import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header
        logo=""
        logoText="Creative"
        navLinks={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaButtonText="Get Started"
        ctaButtonHref="#contact"
      />

      {/* Your page content goes here */}
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
