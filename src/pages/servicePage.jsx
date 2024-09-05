import React from 'react'
import Nav_bar from '../components/header&footer/header/header'
import Breadcurmbpage from '../components/landingPage/breadcrumb/breadcurmbpage'
import Footer from '../components/header&footer/footer/footer'
import Service from '../components/landingPage/services/service'

export default function ServicePage() {
  return (
    <>
      <Nav_bar/>
      <Breadcurmbpage/>
      <Service/>
      <Footer/>
    </>
  )
}
