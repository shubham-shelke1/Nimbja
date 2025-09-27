import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import SoftwarePage from "./pages/SoftwarePage";
import TestingPage from "./pages/TestingPage";
import MobilePage from "./pages/MobilePage";
import CarrerPage from "./pages/CarrerPage";
import Applyform from "./component/career/Applyform";
import Ushealth from "./pages/Ushealth";

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
      <Route path="/carrer" element={<CarrerPage />} />
            <Route path="/testing" element={<TestingPage />} />
      <Route path="/ushealth" element={<Ushealth />} />

            {/* <Route path="/applyform" element={<Applyform />} /> */}

      
      
  
    </Routes>
    // {/* </BrowserRouter> */}
  );
}

export default App;
