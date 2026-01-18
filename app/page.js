// This is the main page component for the home page
'use client'; // Ensures that this component is treated as a client-side component
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
    </>    
  );
}
