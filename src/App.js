import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
