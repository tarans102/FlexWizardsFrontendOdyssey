import React from "react";
import WorkoutStat from "./WorkoutStat";

const WorkoutDetail = ({ workout }) => {
    return (
        <div className="workoutCard">
            <div className="workoutType">
                <div className="workoutTypeIcon">{workout.icon}</div>
                <div className="workoutTypeTitle">{workout.type}</div>
                <div className="workoutDate">{workout.date}</div>
            </div>
            <div className="spacer" style={{ flexGrow: 1 }}></div>
            <div className="workoutStats">
                <div className="workoutStat">
                    {workout.stats.map((wStat) => (
                        <WorkoutStat key={wStat.stat} wStat={wStat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetail;
