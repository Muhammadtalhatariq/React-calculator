import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <>
    <div className="bg-white">
    <Hero />
      <Calculator/>
      <Card />
      <Footer />
    </div>
    
    </>
  );
};

export default App;
