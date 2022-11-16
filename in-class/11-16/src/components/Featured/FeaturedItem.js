import { Link } from 'react-router-dom';
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
            <Link to={props.link} className="more">Read More</Link>
        </li>
    );
}

export default FeaturedItem;