"use client"; // This component needs to be a client component to use state and effects
import React, { useEffect, useState } from "react";

const SECTION_PATHS = {
  top: "",
  about: "about",
  projects: "projects",
  services: "services",
  contact: "contact",
  footer: "end"
};

// For dynamically updating the navbar path based on scroll position
export default function NavbarPath() {
  const [path, setPath] = useState("~/O.Y.U/");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "top";

      // If user scrolled to (or very near) the bottom, treat it as the footer (end)
      const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 5);
      if (atBottom) {
        current = "footer";
      } else {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect(); // Get the size of the element and its position relative to the viewport

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
          }
        });
      }

      // Update the displayed path (fall back to empty string when mapping is empty)
      const newPath = SECTION_PATHS[current] ?? "";
      setPath(newPath);

      // Update URL hash without adding a history entry
      const desiredHash = `#${current}`;
      if (window.location.hash !== desiredHash) {
        history.replaceState(null, "", desiredHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <span>{path}</span>;
}