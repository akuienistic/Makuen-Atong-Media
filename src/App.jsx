import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ContactUs from "./ContactUs.jsx";
import Booking from "./Booking.jsx";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/what-we-do" element={<WhatWeDo />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
