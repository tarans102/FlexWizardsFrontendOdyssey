import React from "react";
import meditationImage from "../assets/meditation.png";
import "../styles/Tutorials.css";
import Navbar from "./Navbar.jsx";

// import Navbar from "./Navbar";

const Tutorials = () => {
    return (
        <>
            <Navbar activeElem={3} />
            <div className="tutorials-container">
                {/* Header Section */}
                <div className="meditation-section">
                    <img
                        src={meditationImage}
                        alt="Meditation"
                        className="meditation-image"
                    />
                    <div className="meditation-content">
                        <h1>Master the Art of Meditation</h1>
                        <p>
                            Discover mindfulness and inner peace through guided
                            meditation. Follow our simple steps to achieve a
                            tranquil state of mind.
                        </p>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="steps-section">
                    <h2>5 Steps to Begin Meditation</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <h3>1. Find a Quiet Space</h3>
                            <p>
                                Choose a peaceful environment where you won’t be
                                disturbed.
                            </p>
                        </div>
                        <div className="step-card">
                            <h3>2. Get Comfortable</h3>
                            <p>
                                Sit in a relaxed position with your back
                                straight.
                            </p>
                        </div>
                        <div className="step-card">
                            <h3>3. Focus on Your Breath</h3>
                            <p>Take slow, deep breaths to calm your mind.</p>
                        </div>
                        <div className="step-card">
                            <h3>4. Observe Your Thoughts</h3>
                            <p>
                                Acknowledge thoughts without judgment and let
                                them go.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Videos Section */}
                <div className="videos-section">
                    <h2>Watch & Learn</h2>
                    <div className="videos-grid">
                        <div className="video-card">
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/d4S4twjeWTs"
                                    title="Meditation Guide"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">
                                Beginner’s Guide to Meditation
                            </p>
                        </div>
                        <div className="video-card">
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/6p_yaNFSYao"
                                    title="Deep Relaxation"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">
                                Deep Breathing Exercises
                            </p>
                        </div>
                        <div className="video-card">
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/PCLhTlVTO3c"
                                    title="Guided Meditation"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">
                                10-Minute Guided Meditation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tutorials;
