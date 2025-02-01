import React, { useState } from "react";
import { FaFire, FaMoon, FaRunning } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { IoFootsteps } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import DashboardUserStat from "../components/dashboardUserStat";
import WorkoutDetail from "../components/WorkoutDetail";
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
            icon: <TbRulerMeasure size={24} />,
            stat: "Distance",
            value: "2.47km",
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

    const [workouts, setworkouts] = useState([
        {
            icon: <FaRunning size={24} />,
            type: "Running",
            stats: [
                { stat: "Distance", value: "20km" },
                { stat: "Avg. Speed", value: "25km/hr" },
                { stat: "Calories", value: "210kcal" },
            ],
            date: "31st January 2025",
        },
        {
            icon: <FaPersonSwimming size={24} />,
            type: "Swimming",
            stats: [
                { stat: "Distance", value: "2km" },
                { stat: "Avg. Speed", value: "12.5km/hr" },
                { stat: "Calories", value: "532kcal" },
            ],
            date: "31st January 2025",
        },
    ]);
    return (
        <>
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
                        {workouts.map((workout) => (
                            <WorkoutDetail
                                workout={workout}
                                key={workout.type}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
