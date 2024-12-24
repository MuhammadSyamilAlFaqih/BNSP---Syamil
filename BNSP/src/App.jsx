import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";




function App () {
return (
<Router>
  <div>
    <Navbar/>
    <div>    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/services" element ={<Services/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
  </Router>
)

  


}

export default App;