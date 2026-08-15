// This is the main page component for the home page
'use client'; // Ensures that this component is treated as a client-side component
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </>    
  );
}
