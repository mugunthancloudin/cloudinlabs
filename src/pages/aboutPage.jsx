import React from 'react'
import Nav_bar from '../components/header&footer/header/header'
import Breadcurmbpage from '../components/landingPage/breadcrumb/breadcurmbpage'
import About from '../components/landingPage/about/about'
import Footer from '../components/header&footer/footer/footer'
import Chooseus from '../components/landingPage/chooseus/chooseus'
import Faq from '../components/landingPage/faq/faq'

export default function AboutPage() {
  return (
    <>
      <Nav_bar/>
      <Breadcurmbpage/>
      <About/>
      <Faq/>
      <Footer/>
    </>
  )
}
