import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Home/Header/Header'
import OurMenu from '../../components/Home/OurMenu/OurMenu'
import Welcome from '../../components/Home/Welcome/Welcome'
import Testimonials from '../../components/Home/Testimonials/Testimonials'
import OurServices from '../../components/Home/OurServices/OurServices'
import ContactUs from '../../components/Home/ContactUS/ContactUs'

const Home = () => {
  return (
<>
<NavBar/>
<Header/>
<Welcome/>
<Testimonials/>
<OurServices/>
<OurMenu/>
<ContactUs/>

</>
  )
}

export default Home