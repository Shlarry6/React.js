import adboxImage from '../../Assets/family-large.jpg';
import './Adbox.css';

const Adbox = () => {
    return (
        <div id="adbox">
            <div className="clearfix">
                <img src={adboxImage} alt="Img" height="382" width="594"/>
                <div className="detail">
                    <h1>It’s never easy...<br/> When it comes to family.</h1>
                    <p>
                        But we can set<br/> everything straight.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Adbox;