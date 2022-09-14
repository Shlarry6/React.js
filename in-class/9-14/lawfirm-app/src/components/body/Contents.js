import Adbox from './Adbox';
import Highlight from './Highlight';
import Featured from './Featured';

import './Contents.css';

const Contents = () => {
    return (
        <div id="contents">
            <Adbox />
            <Highlight />
            <Featured />
        </div>
    );
};

export default Contents;