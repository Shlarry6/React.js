import './Featured.css';
import FeaturedItem from './featured-item/FeaturedItem';

const featuredItems = [
    {
        img: "meeting.jpg",
        title: "Our lawyers",
        description: "Our website templates are created with inspiration, checked for quality and originality.",
        link: "index.html"
    },
    {
        img: "handshake.jpg",
        title: "get to know us more",
        description: "Just browse through all our Free Website Templates and ﬁnd what you’re looking for.",
        link: "index.html"
    },
    {
        img: "smile.jpg",
        title: "what we offer",
        description: "Join the discussion on our forum and meet other people in the community.",
        link: "index.html"
    },
    {
        img: "family-small.jpg",
        title: "get in touch with us",
        description: "And we love the challenge of doing something diferent and something special.",
        link: "index.html"
    },
]

const Featured = () => {
    return (
        <div className="featured">
            <h2>Why Choose Us?</h2>
            <ul className="clearfix">
                {featuredItems.map((item, index) => {
                    return <FeaturedItem key={index} value={item} />
                })}
            </ul>
        </div>
    );
};

export default Featured;