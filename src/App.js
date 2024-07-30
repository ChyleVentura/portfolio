import About from "./Components/About";
import Banner from "./Components/Banner";
import Circle from "./Components/Circle";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Works from "./Components/Works";

function App() {
  return (
    <div className="App">
      <Circle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
