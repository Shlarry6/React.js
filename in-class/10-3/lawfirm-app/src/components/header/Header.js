import './Header.css';
import logoImage from '../../Assets/logo.png'
import Navigation from './navigation/Navigation';

const Header = () => {
    return (
        <div id="header">
		<div className="clearfix">
			<div className="logo">
				<a href="index.html"><img src={logoImage} alt="LOGO" height="52" width="362"/></a>
			</div>
			<Navigation />
		</div>
	</div>
    )
};

export default Header;