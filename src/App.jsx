import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Contact from "./components/Contact";
import { decorativeIcons } from "./components/Decorativeicons";
import { Routes, Route } from "react-router-dom";
import useScrollReveal from "./hooks/useScrollReveal";
import "./App.css";

function App() {
  useScrollReveal();

  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;