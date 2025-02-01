import React, { useState } from "react";
import { FaFire, FaMoon } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { IoFootsteps } from "react-icons/io5";
import DashboardUserStat from "../components/dashboardUserStat";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import "../styles/Navbar.css";
const Dashboard = () => {
    const [userStats, setUserStats] = useState([
        {
            icon: <IoFootsteps size={24} />,
            stat: "Steps",
            value: 9000,
        },
        {
            icon: <FaFire size={24} />,
            stat: "Calories(kcal)",
            value: 200,
        },
        {
            icon: <GiMeditation size={32} />,
            stat: "Meditation Streak(days)",
            value: 145,
        },
        {
            icon: <IoMdHeart size={24} />,
            stat: "Avg. Heart Rate(bpm)",
            value: 118,
        },
        {
            icon: <FaMoon size={24} />,
            stat: "Sleep Duration",
            value: "7hrs 28mins",
        },
    ]);
    return (
        <>
            <Navbar />
            <div className="dashboardMainContainer">
                <div className="dashboardContainer">
                    <div className="dashboardCard">
                        <div className="dashboardUserDetails">
                            <img
                                className="dashboardUserImage"
                                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
                            />
                            <div className="dashboardUserName">
                                Prakash Patil
                            </div>
                        </div>
                        <div className="dashboardUserStatContainer">
                            {userStats.map((stat) => (
                                <DashboardUserStat
                                    stat={stat}
                                    key={stat.stat}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="dashboardCard">
                        <div className="dashboardWorkoutTitle">Workouts</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
