import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CrearCV from "./pages/CrearCV";
import StateContextForm from "./context/StateContextForm";

import "./App.css";

export default function App() {
  return (
    <StateContextForm>
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
