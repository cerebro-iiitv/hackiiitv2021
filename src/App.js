import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Faqs from "./Components/Faqs/Faqs";
import Rules from "./Components/Rules/Rules";
import Themes from "./Components/Themes/Themes";
import Prizes from "./Components/Prizes/Prizes";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Rules />
        <Themes />
        <Prizes />
        <Faqs />
      </Router>
    </div>
  );
}

export default App;
