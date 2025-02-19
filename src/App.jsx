import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Component/Home";
import Services from "./assets/Component/Services";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


