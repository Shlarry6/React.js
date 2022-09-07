import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";
import './GoalList.css';

const GoalList = () => {
    return (
        <div className="list">
            <FirstGoal />
            <SecondGoal />
            <ThirdGoal />
        </div>
    )
};

export default GoalList;