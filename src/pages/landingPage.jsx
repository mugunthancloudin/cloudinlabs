import React from "react";
import Home from "../components/landingPage/home/home";
import About from "../components/landingPage/about/about";
import Service from "../components/landingPage/services/service";
import Chooseus from "../components/landingPage/chooseus/chooseus";
import Faq from "../components/landingPage/faq/faq";
import Footer from "../components/header&footer/footer/footer";
import Nav_bar from "../components/header&footer/header/header";
import Breadcrumbs from "../components/landingPage/breadcrumb/breadcrumb";
import Breadcurmbpage from "../components/landingPage/breadcrumb/breadcurmbpage";

export default function LandingPage() {
  return (
    <>
      <Nav_bar />
      <Home />
      <About />
      <Service />
      <Chooseus />
      <Faq />
      <Breadcurmbpage/>
      <Footer />
    </>
  );
}
