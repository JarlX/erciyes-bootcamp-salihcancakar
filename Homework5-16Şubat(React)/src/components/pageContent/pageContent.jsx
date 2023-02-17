import React from "react";
import About from "./about";
import Project from "./project";
import Contact from "./contact";
import Map from "./mapImage";

function pageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <Project />
      <About />
      <Contact />
      <Map />
    </div>
  );
}

export default pageContent;
