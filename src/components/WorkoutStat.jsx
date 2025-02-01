import React from "react";

const WorkoutStat = ({ wStat }) => {
    return (
        <div>
            <div className="dashboardUserStat">
                <div className="dashboardUserStatTitle">{wStat.stat}</div>
                <div className="dashboardUserStatValue">{wStat.value}</div>
            </div>
        </div>
    );
};

export default WorkoutStat;
