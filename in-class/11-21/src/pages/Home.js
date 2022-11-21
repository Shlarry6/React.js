import { useState, useCallback } from 'react';
import Adbox from "../components/Adbox/Adbox";
import Highlight from "../components/Highlight/Highlight";
import Featured from "../components/Featured/Featured";

const Home = () => {
    const [showPromise, setShowPromise] = useState(false);

	const showPromiseHandler = useCallback((event) => {
		setShowPromise(true);
	}, []);

	const hidePromiseHandler = useCallback((event) => {
		setShowPromise(false);
	}, []);

    return (
        <>
            <Adbox
                //showPromise={showPromise} 
                onShow={showPromiseHandler}
                onHide={hidePromiseHandler} />
            {/* <StatePlayground /> */}
            <Highlight showPromise={showPromise} />
            <Featured />
        </>
    );
};

export default Home;