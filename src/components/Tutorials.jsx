import React, { useState } from "react";
import "../styles/Tutorials.css";
import meditationImage from "../assets/meditation.png";

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
            <div className="flex-container">
              <p>Steps</p>
              <p>Experience</p>
            </div>
            <div className="card card--1">
              <div>
                <p className="step-no">Step 1</p>
                <img src={meditationImage} alt="Meditation" />
              </div>
              <div>
                <p className="step-name">Relaxation</p>
                <p>
                  Relaxation is about letting go of tension and stress and
                  bringing the mind and body into a state of calm and peace ...
                </p>
              </div>
              <div>
                <p>Relaxation in the forest</p>
                <p>Relaxation of the muscles</p>
                <p>Relaxation with the breath</p>
                <p>Relaxation connection</p>
              </div>
            </div>
            <div className="card card--2">
              <div>
                <p className="step-no">Step 2</p>
                <img src={meditationImage} alt="Meditation" />
              </div>
              <div>
                <p className="step-name">Concentration</p>
                <p>
                  Concentration allows me to use my time productively, once I
                  have relaxed: I focus on the thoughts I choose to have ...
                </p>
              </div>
              <div>
                <p>Concentration flow of breath</p>
                <p>Concentration on a point</p>
                <p>Concentration on the word shanti</p>
                <p>Concentration counting backwards</p>
              </div>
            </div>
            <div className="card card--1">
              <div>
                <p className="step-no">Step 3</p>
                <img src={meditationImage} alt="Meditation" />
              </div>
              <div>
                <p className="step-name">Contemplation</p>
                <p>
                  Contemplation is reflecting deeply on myself, my inner world
                  and my values…
                </p>
              </div>
              <div>
                <p>Contemplation eternity</p>
                <p>Contemplation on the true self</p>
                <p>Contemplation being of light</p>
                <p>Contemplation your core quality</p>
              </div>
            </div>
            <div className="card card--1">
              <div>
                <p className="step-no">Step 4</p>
                <img src={meditationImage} alt="Meditation" />
              </div>
              <div>
                <p className="step-name">Realisation</p>
                <p>
                  Realisation is when my understanding and feelings combine and
                  I experience a more profound, more meaningful reality within…
                </p>
              </div>
              <div>
                <p>Realisation love</p>
                <p>Realisation pure light</p>
                <p>Realisation eternity</p>
                <p>Realisation soul shift</p>
              </div>
            </div>
            <div className="card card--1">
              <div>
                <p className="step-no">Step 5</p>
                <img src={meditationImage} alt="Meditation" />
              </div>
              <div>
                <p className="step-name">Meditation</p>
                <p>
                  Meditation is focusing on a thought and remembering my eternal
                  identity, and re-awakening a wonderful state of well-being …
                </p>
              </div>
              <div>
                <p>Meditation Beyond</p>
                <p>Meditation to the Source</p>
                <p>Meditation the simple shift</p>
                <p>Meditation beyond the story.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="videos-section">
          <h2>Guided Meditation Videos</h2>
          <div className="videos">
            {/* Video 1 */}
            <div className="video-card">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/PCLhTlVTO3c"
                title="Guided Meditation"
                allowFullScreen
              ></iframe>
              <p>10-Minute Guided Meditation</p>
            </div>

            {/* Video 2 */}
            <div className="video-card">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/inpok4MKVLM"
                title="Mindfulness Meditation"
                allowFullScreen
              ></iframe>
              <p>5-Minute Mindfulness Meditation</p>
            </div>

            {/* Video 3 */}
            <div className="video-card">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/ZToicYcHIOU"
                title="Deep Breathing"
                allowFullScreen
              ></iframe>
              <p>Relaxing Deep Breathing Meditation</p>
            </div>
            <div className="video-card">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/PCLhTlVTO3c"
                title="Deep Breathing"
                allowFullScreen
              ></iframe>
              <p>Powerdul Realisation</p>
            </div>
            <div className="video-card">
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/ZToicYcHIOU"
                title="Deep Breathing"
                allowFullScreen
              ></iframe>
              <p>Relaxing Deep Breathing Meditation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tutorials;
