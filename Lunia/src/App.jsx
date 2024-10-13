import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import SobreNosotros from "./pages/SobreNosotros";
import Servicios from "./pages/Servicios";
import Registro from "./pages/Registro";
import { AnimatePresence } from "framer-motion";
import "./App.css";



const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
