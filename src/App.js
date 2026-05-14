import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Popular from "./pages/Popular";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<Recipes />} />

        <Route path="/popular" element={<Popular />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;