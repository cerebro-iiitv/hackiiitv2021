import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Faqs from "./Components/Faqs/Faqs";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Faqs />
      </Router>
    </div>
  );
}

export default App;
