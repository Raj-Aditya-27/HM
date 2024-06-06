import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Services/>
    </>
  );
}

export default App;
