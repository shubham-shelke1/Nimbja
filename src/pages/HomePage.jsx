import React from "react";
import Navbar from "../component/navbar/Navbar";
import Home from "../component/home/Home";
import Course from "../component/home/Course";
import Creative from "../component/home/Creative";
import Form from "../component/home/Form";
import Footer from "../component/footer/Footer";
import Year from "../component/home/Year";
import Services from "../component/home/Services";
import Testimonial from "../component/home/Testimonial";
import Blog from "../component/home/Blog";
import Study from "../component/home/Study";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Course />
      <Year />
      <Creative />
      <Services />
      <Study />
      <Testimonial />
      <Blog />
      <Form />

      <Footer />
    </>
  );
};

export default HomePage;
