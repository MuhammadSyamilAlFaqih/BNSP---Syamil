import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";




function App () {
return (
<Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/services" element ={<Services/>} />
    </Routes>
  </Router>
)

  


}

export default App;