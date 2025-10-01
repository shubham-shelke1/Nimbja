// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SoftwarePage from "./pages/SoftwarePage";
// import TestingPage from "./pages/TestingPage";
import MobilePage from "./pages/MobilePage";
import Ushealth from "./pages/Ushealth";
import FormPage from "./pages/FormPage";
import BlogcasePage from "./pages/BlogcasePage";

import ScrollToTop from "./component/ScrollToTop";
import CareerPage from "./pages/CareerPage";
import EnrollformPage from "./pages/EnrollformPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        {/* <Route path="/testing" element={<TestingPage />} /> */}
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/carrer" element={<CareerPage />} />
        <Route path="/ushealth" element={<Ushealth />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/blogcase" element={<BlogcasePage />} />
           <Route path="/enrollform" element={<EnrollformPage />} />


        
      </Routes>
    </>
  );
}

export default App;
