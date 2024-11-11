import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {" "}
      {/* No need for basename with HashRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        {/* Optional: Handle 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
