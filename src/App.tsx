import BackToTop from "./components/Common/BackToTop";
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
        <BackToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;
