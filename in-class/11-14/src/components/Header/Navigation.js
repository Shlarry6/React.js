import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="navigation">
				<li className="active">
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/practices">Practices</a>
				</li>
				<li>
					<a href="/lawyers">Our Lawyers</a>
				</li>
				<li>
					<a href="/news">News</a>
					
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/contacts">Contact Requests</a>
				</li>
			</ul>
    );
}

export default Navigation;