import React from 'react'
import Home from '../components/landingPage/home/home'
import About from '../components/landingPage/about/about'
import Service from '../components/landingPage/services/service'
import Chooseus from '../components/landingPage/chooseus/chooseus'
import Faq from '../components/landingPage/faq/faq'
import Footer from '../components/header&footer/footer/footer'

export default function LandingPage() {
  return (
    <>
     <Home/> 
     <About/>
     <Service/>
     <Chooseus/>
     <Faq/>
     <Footer/>
    </>
  )
}
