import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Hero />
        <About />
      </Router>
    </div>
  );
}

export default App;
