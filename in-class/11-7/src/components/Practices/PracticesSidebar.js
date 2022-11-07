import Sidebar from "../UI/Sidebar/Sidebar";

const PracticesSidebar = () => {
    return (
        <Sidebar>
            <div>
                <h2>Practices</h2>
                <ul>
                    <li>
                        <a href="post.html">Prenuptial Agreement</a>
                    </li>
                    <li>
                        <a href="post.html">Marriage</a>
                    </li>
                    <li>
                        <a href="post.html">Divorce</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Client Testimonials</h2>
                <p>
                    &ldquo;The best family lawyers in the city so far. Me and my ex-wife didn’t have any<br /> problems settling the terms and agreement. Everything went so smoothly. We’re both very happy.&rdquo; <span>- Jared Greene</span>
                </p>
            </div>
        </Sidebar>
    );
}

export default PracticesSidebar;