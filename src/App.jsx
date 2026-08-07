import Header from "./pages/Header";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div className="app-shell">

            {/* Automatically scroll to top on route change */}
            <ScrollToTop />

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