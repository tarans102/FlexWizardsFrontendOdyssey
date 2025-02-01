import React from "react";

const DashboardUserStat = ({ stat }) => {
    return (
        <div className="dashboardUserStat">
            <div className="dashboardUserStatTitle">{stat.stat}</div>
            <div className="dashboardUserStatIconVal">
                <div className="dashboardUserStatIcon">{stat.icon}</div>
                <div className="dashboardUserStatValue">{stat.value}</div>
            </div>
        </div>
    );
};

export default DashboardUserStat;
