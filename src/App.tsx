import Header from "./components/Header/Header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header
        logo="/src/assets/logo.svg"
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
    </>
  );
}

export default App;
