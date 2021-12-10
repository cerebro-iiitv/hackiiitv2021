import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Faqs from "./Components/Faqs/Faqs";
import Rules from "./Components/Rules/Rules";
import Themes from "./Components/Themes/Themes";
import Prizes from "./Components/Prizes/Prizes";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Rules />
      {/* <Themes /> */}
      <Schedule />
      <Prizes />
      <Sponsors />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
