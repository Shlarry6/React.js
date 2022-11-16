import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="navigation">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/practices">Practices</NavLink>
            </li>
            <li>
                <NavLink to="/lawyers">Our Lawyers</NavLink>
            </li>
            <li>
                <NavLink to="/news">News</NavLink>
                
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contact Requests</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;