import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header"
import Info from "./components/Info"
import Services from "./components/Services"

function App() {
  return (
    <div className="App" style={{ height: "200%" }}>
      <Header />
      <div style={{ paddingTop: "75px" }}>
        <Info />
        <Services />
      </div>
    </div>
  );
}

export default App;
