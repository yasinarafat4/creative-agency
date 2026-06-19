import Header from "./components/Header/Header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header
        logoText="Creative"
        navLinks={[
          { label: "About", href: "#about" },
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaButtonText="Get Started"
        ctaButtonHref="#contact"
      />

      {/* Your page content goes here */}
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
