import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="navigation">
            <li className="active">
                <a href="/">Home</a>
            </li>
            <li>
                <a href="about.html">About</a>
            </li>
            <li>
                <a href="practices.html">Practices</a>
            </li>
            <li>
                <a href="lawyers.html">Our Lawyers</a>
            </li>
            <li>
                <a href="news.html">News</a>
                <div>
                    <a href="singlepost.html">News Single Post</a>
                </div>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/requests">Requests</a>
            </li>
        </ul>
    )
};

export default Navigation;