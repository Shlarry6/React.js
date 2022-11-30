import './Navigation.css';
import {NavLink, Link} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Navigation = () => {
	const authCtx = useContext(AuthContext);

	const logoutHandler = () => {
		authCtx.logout();
	};

    return (
        <ul className="navigation">
				<li className="active">
					<NavLink className={(navData) => navData.isActive ? "active" : ""} to="/">Home</NavLink>
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
					{authCtx.isLoggedIn && <NavLink to="/contacts">Contact Requests</NavLink>}
				</li>
				<li>
					{authCtx.isLoggedIn ? <Link onClick={logoutHandler} to='/authenticate'>Logout</Link> : <NavLink to="/authenticate">Login</NavLink>}
				</li>
			</ul>
    );
}

export default Navigation;