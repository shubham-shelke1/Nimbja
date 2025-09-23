import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Home from '../component/home/Home'
import Course from '../component/home/Course'
import Creative from '../component/home/Creative'
import Services from '../component/home/Services'
import CaseStudy from '../component/home/Casestudy'
import Testimonial from '../component/home/Testinomial'
import Form from '../component/home/Form'
import Footer from '../component/footer/Footer'

const HomePage = () => {
  return (
<>
<Navbar/>
<Home/>
<Course/>
<Creative/>
<Services/>
<CaseStudy/>
<Testimonial/>
<Form/>
<Footer/>


</>  )
}

export default HomePage