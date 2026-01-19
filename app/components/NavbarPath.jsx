"use client"; // This component needs to be a client component to use state and effects
import React, { useEffect, useState } from "react";

const SECTION_PATHS = {
  top: "",
  about: "about",
  projects: "projects",
  services: "services",
  contact: "contact",
};

// For dynamically updating the navbar path based on scroll position
export default function NavbarPath() {
  const [path, setPath] = useState("~/O.Y.U/");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "top";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect(); // Get the size of the element and its position relative to the viewport

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
        setPath(SECTION_PATHS[current]);
      
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <span>{path}</span>;
}