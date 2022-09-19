import Adbox from './Adbox';
import Highlight from './Highlight';
import Featured from './Featured';
import './Contents.css';
import StatePlayground from '../StatePlayground/StatePlayground';
import Sidebar from '../UI/Sidebar/Sidebar';

const Contents = () => {
    return (
        <div id="contents">
            <div id="clearfix">
                <Sidebar>
                <div>
					<h2>Contact Info</h2>
					<ul className="contact">
						<li>
							<p>
								<span className="home"></span> <em>Manes Winchester<br/> Family Law Firm</em> the address city, state 1111
							</p>
						</li>
						<li>
							<p className="phone">
								Phone: (+20) 000 222 999
							</p>
						</li>
						<li>
							<p className="fax">
								Fax: (+20) 000 222 988
							</p>
						</li>
						<li>
							<p className="mail">
								Email: info@freewebsitetemplates.com
							</p>
						</li>
					</ul>
				</div>
                </Sidebar>
            {/* <Adbox />
            <StatePlayground />
            <Highlight />
            <Featured /> */}
            </div>
        </div>
    );
};

export default Contents;