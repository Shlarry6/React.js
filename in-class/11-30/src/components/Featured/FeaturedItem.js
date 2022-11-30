
const FeaturedItem = (props) => {

    return (
        <li>
            <div className="frame1">
                <div className="box">
                    <img src={require(`../../Assets/images/${props.image}`)} alt="Img" height="130" width="197" />
                </div>
            </div>
            <p>
                <b>{props.title}</b> {props.text}
            </p>
            <a href={props.link} className="more">Read More</a>
        </li>
    );
}

export default FeaturedItem;