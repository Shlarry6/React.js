import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/UI/Layout/Layout';

import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import ContactRequests from './pages/ContactRequests';
import AboutPage from './pages/AboutPage';
import LawyersPage from './pages/LawyersPage';
import NewsItem from './pages/NewsItem';
import PracticesPage from './pages/PracticesPage';
import PracticesItem from './pages/PracticesItem';

function App() {

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/contacts" element={<ContactRequests />} />
				<Route path="/lawyers" element={<LawyersPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/*" element={<NewsItem />} />
				<Route path="/practices" element={<PracticesPage />} />
				<Route path="/practices/*" element={<PracticesItem />} />
			</Routes>
		</Layout>

	);
}

export default App;
