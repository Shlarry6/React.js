import './FeaturedItem.css';

const FeaturedItem = (props) => {
    return (
        <li>
            <div className="frame1">
                <div className="box">
                    <img src={require(`../../../Assets/${props.value.img}`)} alt="Img" height="130" width="197"/>
                </div>
            </div>
            <p>
                <b>{props.value.title}</b> {props.value.description}
            </p>
            <a href={props.value.link} className="more">Read More</a>
        </li>
    );
};

export default FeaturedItem;