import logoImage from '../../Assets/images/logo.png';
import './Header.css';
import Navigation from '../../pages/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
		<div className="clearfix">
			<div className="logo">
				<Link to="/"><img src={logoImage} alt="LOGO" height="52" width="362" /></Link>
			</div>
			<Navigation />
		</div>
	</div>
    );
}

export default Header;