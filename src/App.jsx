import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CrearCV from "./pages/CrearCV";
import StateContextForm from "./context/StateContextForm";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {

  const [inicio, setInicio] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setInicio(false)}, 500)
  }, []);

  return (
      <StateContextForm>
        <div className={`inicio ${inicio ? '' : 'inicio-out'}`}>
          <h1>Bienvenido</h1>
        </div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/crearcv" element={<CrearCV />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StateContextForm>
  );
}
