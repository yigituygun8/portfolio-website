// This is the main page component for the home page
'use client'; // Ensures that this component is treated as a client-side component
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Services/>
    </>    
  );
}
