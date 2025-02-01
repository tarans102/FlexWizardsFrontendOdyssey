import React from 'react';
import Navbar from './Navbar';
import "./community.css";

const Community = () => {
  return (
    <>
      <div className="wrapper3">
        <h2 className="sectionTitle">UPCOMING CHALLENGES</h2>
        <div className="events">
          <div className="e1">
            <img className="challengeImg" src="https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/8/nmsz1ztuovsvbxypjtni.jpeg" alt="5KM Challenge" />
            <p>RUN YOUR FIRST 5KM</p>
          </div>
          <div className="e1">
            <img className="challengeImg" src="https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/8/w6nvrdijxj4qsbvsfklx.jpeg" alt="10KM Challenge" />
            <p>RUN 10KM</p>
          </div>
          <div className="e1">
            <img className="challengeImg" src="https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/8/pnmsofxtovr21drskgao.jpeg" alt="20KM Monthly Challenge" />
            <p>MONTHLY 20KM</p>
          </div>
        </div>

        {/* Discover People Section */}
        <h2 className="sectionTitle">DISCOVER PEOPLE</h2>
        <div className="discoverPeople">
          <div className="personCard">
            <img className="profileImg" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
            <p>Riya Sharma</p>
            <button className="connectBtn">Connect</button>
          </div>
          <div className="personCard">
            <img className="profileImg" src="https://randomuser.me/api/portraits/men/33.jpg" alt="User 2" />
            <p>Aryan Mehta</p>
            <button className="connectBtn">Connect</button>
          </div>
          <div className="personCard">
            <img className="profileImg" src="https://randomuser.me/api/portraits/women/29.jpg" alt="User 3" />
            <p>Sneha Verma</p>
            <button className="connectBtn">Connect</button>
          </div>
        </div>

        {/* Personal Reviews Section */}
        <h2 className="sectionTitle">PERSONAL REVIEWS</h2>
        <div className="reviews">
          <div className="reviewCard">
            <p><strong>Varun</strong>: "Loved the 5KM challenge! Felt so motivated!"</p>
          </div>
          <div className="reviewCard">
            <p><strong>Palash</strong>: "Great community! Found an amazing running partner!"</p>
          </div>
          <div className="reviewCard">
            <p><strong>Rishi</strong>: "The challenges push me to be my best self."</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
