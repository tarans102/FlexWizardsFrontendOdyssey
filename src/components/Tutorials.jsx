import React, { useState } from "react";
import "../styles/Tutorials.css";
// import Navbar from "./Navbar";

const Tutorials = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="box">
        <div className="meditation-box">
          <h1>How to Meditate</h1>
          <p className="about-meditation">
            Meditating is easy. Raja Yoga even has the name ‘Easy Raja Yoga'.
            But sometimes getting started needs a little explanation. Here is a
            simple five-step process to follow. Soon you'll arrive at the quiet
            still place with just a single stride - a single thought - and you
            won't even need to take five steps.
          </p>
          <div className="steps-experience">
            <div className="steps">
              <p>Steps</p>
            </div>
            <div className="experience">
              <p>Experience</p>
            </div>
          </div>
        </div>
        <div className="videos"></div>
      </div>
    </>
  );
};

export default Tutorials;
