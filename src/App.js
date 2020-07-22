import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from "./components/Header"
import Info from "./components/Info"
import Services from "./components/Services"
import Clients from "./components/Clients"
import BestSolution from "./components/BestSolution"
import Pricing from "./components/Pricing"

function App() {
  return (
    <div className="App" style={{ height: "200%" }}>
      <Header />
      <div style={{ paddingTop: "75px" }}>
        <Info />
        <Services />
        <Clients />
        <BestSolution />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
