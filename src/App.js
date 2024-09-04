import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules//bootstrap/dist/css/bootstrap.css";
import LandingPage from "./pages/landingPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the global duration for animations
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
