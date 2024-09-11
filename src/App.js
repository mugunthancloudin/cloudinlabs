import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules//bootstrap/dist/css/bootstrap.css";
import LandingPage from "./pages/landingPage";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage";
import ServicePage from "./pages/servicePage";
import Whatsapp from "./components/landingPage/whatsapp/whatsapp";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the global duration for animations
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      {" "}
      <BrowserRouter>
      <Whatsapp/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about_us" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact_us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
