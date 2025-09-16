  import React from 'react';
  import {Routes,Route } from "react-router-dom";
  import './App.css';
  import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';





  function App() {

    return (
      // <BrowserRouter>
        <Routes>
        
          <Route path="/about" element={<AboutPage/>}/>
           <Route path="/" element={<HomePage/>}/>

          
        </Routes>
      
    );
  }

  export default App;
