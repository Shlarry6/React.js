

const GoalItem = (props) => {
    console.log(props.value);
    return (
        <div>
            <h2>
                <li>{props.value.title}</li>
            </h2>
            <p>{props.value.description}</p>
        </div>
    )
};

export default GoalItem;