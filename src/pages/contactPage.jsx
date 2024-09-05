import React from 'react'
import Nav_bar from '../components/header&footer/header/header'
import Footer from '../components/header&footer/footer/footer'
import Breadcurmbpage from '../components/landingPage/breadcrumb/breadcurmbpage'
import ContactMap from '../components/landingPage/contact/contactmap'

export default function ContactPage() {
  return (
    <>
      <Nav_bar/>
      <Breadcurmbpage/>
      <ContactMap/>
      <Footer/>
    </>
  )
}
