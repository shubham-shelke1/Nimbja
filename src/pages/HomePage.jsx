import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Home from '../component/home/Home'
import Course from '../component/home/Course'
import Creative from '../component/home/Creative'
import Services from '../component/home/Services'
import CaseStudy from '../component/home/CaseStudy'
import Testimonial from '../component/home/Testinomial'
import Form from '../component/home/Form'
import Footer from '../component/footer/Footer'
import Blog from '../component/home/Blog'
import Year from '../component/home/Year'


const HomePage = () => {
  return (
<>
<Navbar/>
<Home/>
<Course/>
<Year/>
<Creative/>
<Services/>
<CaseStudy/>
<Testimonial/>
<Blog/>
<Form/>

<Footer/>


</>  )
}

export default HomePage