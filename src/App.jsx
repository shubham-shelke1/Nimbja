import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import SoftwarePage from "./pages/SoftwarePage";
import TestingPage from "./pages/TestingPage";
import MobilePage from "./pages/MobilePage";
import UsPage from "./pages/UsPage";
import CarrerPage from "./pages/CarrerPage";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/software" element={<SoftwarePage />} />
      <Route path="/testing" element={<TestingPage />} />
      <Route path="/mobile" element={<MobilePage />} />
      <Route path="/us" element={<UsPage />} />
      <Route path="/carrer" element={<CarrerPage />} />
    </Routes>
    // {/* </BrowserRouter> */}
  );
}

export default App;
