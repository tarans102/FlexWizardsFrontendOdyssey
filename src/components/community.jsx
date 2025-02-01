import React from "react";
import { AiOutlineCalendar, AiOutlineStar } from "react-icons/ai";
import { FaRunning, FaUserPlus } from "react-icons/fa";
import { MdEventNote, MdRateReview } from "react-icons/md";
import "./community.css";
import Navbar from "./Navbar.jsx";

const Community = () => {
    return (
        <>
            <Navbar activeElem={4} />
            <div className="wrapper3">
                <h1 className="mainTitle">Community & Challenges</h1>

                {/* Upcoming Challenges */}
                <h2 className="sectionTitle">
                    <FaRunning className="icon" /> Upcoming Challenges
                </h2>
                <div className="events">
                    <div className="e1">
                        <img
                            className="challengeImg"
                            src="https://res.cloudinary.com/adidas-app/image/upload/v1/page-assets/8/nmsz1ztuovsvbxypjtni.jpeg"
                            alt="Run 5KM"
                        />
                        <p>Run Your First 5KM</p>
                    </div>
                    <div className="e1">
                        <img
                            className="challengeImg"
                            src="https://res.cloudinary.com/adidas-app/image/upload/v1/page-assets/8/w6nvrdijxj4qsbvsfklx.jpeg"
                            alt="Run 10KM"
                        />
                        <p>Run 10KM</p>
                    </div>
                    <div className="e1">
                        <img
                            className="challengeImg"
                            src="https://res.cloudinary.com/adidas-app/image/upload/v1/page-assets/8/pnmsofxtovr21drskgao.jpeg"
                            alt="Run 20KM"
                        />
                        <p>Monthly 20KM Challenge</p>
                    </div>
                    <div className="e1">
                        <img
                            className="challengeImg"
                            src="https://res.cloudinary.com/adidas-app/image/upload/v1/page-assets/8/sample-image.jpeg"
                            alt="Cycling Challenge"
                        />
                        <p>Cycle 50KM Challenge</p>
                    </div>
                </div>

                {/* Nearby Events */}
                <h2 className="sectionTitle">
                    <MdEventNote className="icon" /> Nearby Events
                </h2>
                <div className="nearbyEvents">
                    <div className="eventCard">
                        <AiOutlineCalendar size={30} color="#4B0082" />
                        <h3>Zumba Workshop</h3>
                        <p>Join us for an energetic Zumba session!</p>
                    </div>
                    <div className="eventCard">
                        <AiOutlineCalendar size={30} color="#4B0082" />
                        <h3>Yoga Retreat</h3>
                        <p>Relax & rejuvenate with expert-led yoga.</p>
                    </div>
                    <div className="eventCard">
                        <AiOutlineCalendar size={30} color="#4B0082" />
                        <h3>Fitness Bootcamp</h3>
                        <p>Improve your endurance and strength!</p>
                    </div>
                </div>

                {/* Discover People */}
                <h2 className="sectionTitle">
                    <FaUserPlus className="icon" /> Discover People
                </h2>
                <div className="discoverPeople">
                    <div className="personCard">
                        <img
                            className="profileImg"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="User 1"
                        />
                        <h4>Rishi</h4>
                        <p>Running Enthusiast</p>
                        <button className="connectBtn">Connect</button>
                    </div>
                    <div className="personCard">
                        <img
                            className="profileImg"
                            src="https://randomuser.me/api/portraits/women/2.jpg"
                            alt="User 2"
                        />
                        <h4>Shaurya</h4>
                        <p>Yoga Master</p>
                        <button className="connectBtn">Connect</button>
                    </div>
                    <div className="personCard">
                        <img
                            className="profileImg"
                            src="https://randomuser.me/api/portraits/men/3.jpg"
                            alt="User 3"
                        />
                        <h4>Palash</h4>
                        <p>Calisthenics Coach</p>
                        <button className="connectBtn">Connect</button>
                    </div>
                    <div className="personCard">
                        <img
                            className="profileImg"
                            src="https://randomuser.me/api/portraits/women/4.jpg"
                            alt="User 4"
                        />
                        <h4>Varsha</h4>
                        <p>Nutrition Specialist</p>
                        <button className="connectBtn">Connect</button>
                    </div>
                </div>

                {/* Reviews Section */}
                <h2 className="sectionTitle">
                    <MdRateReview className="icon" /> Personal Reviews
                </h2>
                <div className="reviews">
                    <div className="reviewCard">
                        <AiOutlineStar size={30} color="#FFD700" />
                        <p>"The 10KM challenge pushed my limits! Loved it!"</p>
                        <h4>- Varun</h4>
                    </div>
                    <div className="reviewCard">
                        <AiOutlineStar size={30} color="#FFD700" />
                        <p>
                            "The yoga retreat helped me reconnect with myself!"
                        </p>
                        <h4>- Paawan</h4>
                    </div>
                    <div className="reviewCard">
                        <AiOutlineStar size={30} color="#FFD700" />
                        <p>"The bootcamp was tough but rewarding!"</p>
                        <h4>- Daksh</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Community;
