import React from 'react';
import { useState, useCallback } from 'react';
import './App.css';
import Adbox from './components/Adbox/Adbox';
import Highlight from './components/Highlight/Highlight';
import Featured from './components/Featured/Featured';
import StatePlayground from './components/StatePlayground/StatePlayground';
import Sidebar from './components/UI/Sidebar/Sidebar';
import Layout from './components/UI/Layout/Layout';
import ContactSidebar from './components/Contact/ContactSidebar';
import Main from './components/UI/Main/Main';
import ContactForm from './components/Contact/ContactForm_state';
import ContactRequestList from './components/Contact/ContactRequestList';
import ContactContext from './store/contact-context';
import { ContactContextProvider } from './store/contact-context';
import NewsSidebar from "./components/News/NewsSidebar";
import NewsList from "./components/News/NewsList";
import NewsDetail from "./components/News/NewsDetail";
import PracticesSidebar from './components/Practices/PracticesSidebar';
import Practices from './components/Practices/Practices';

function App() {

	const [showPromise, setShowPromise] = useState(false);

	const showPromiseHandler = useCallback((event) => {
		setShowPromise(true);
	}, []);

	const hidePromiseHandler = useCallback((event) => {
		setShowPromise(false);
	}, []);

	console.log(window.location);

	let content;

	switch (window.location.pathname) {
		case "/":
			content =
				<>
					<Adbox
						//showPromise={showPromise} 
						onShow={showPromiseHandler}
						onHide={hidePromiseHandler} />
					{/* <StatePlayground /> */}
					<Highlight showPromise={showPromise} />
					<Featured />
				</>;
			break;
		case "/contact":
			content =
				<ContactContextProvider>
					<Sidebar>
						<ContactSidebar />
					</Sidebar>
					<Main>
						<ContactForm />
					</Main>
				</ContactContextProvider>;
			break;
		case "/contacts":
			content =
				<ContactContextProvider>
					<ContactRequestList />
				</ContactContextProvider>
			break;

		case "/news":
			content = (
				<>
					<NewsSidebar />
					<NewsList />
				</>
			);
			break;

		case window.location.pathname.match(/\/news\/[0-9]*/)?.input:
			content = (
				<>
					<NewsSidebar />
					<NewsDetail id={window.location.pathname.split("/").pop()} />
				</>
			);

			break;

		case "/practices":
			content = (
				<>
					<PracticesSidebar />
					<Practices />
				</>);
			break;
		default:
			content = <p>The page you requested could not be found.</p>;
	}

	return (
		<Layout>
			{content}
		</Layout>

	);
}

export default App;
