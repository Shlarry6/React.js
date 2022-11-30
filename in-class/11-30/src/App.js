import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PracticesPage from './pages/PracticesPage';
import LawyersPage from './pages/LawyersPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ContactRequestsPage from './pages/ContactRequestsPage';
import PracticesDetailPage from './pages/PracticesDetailPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactConfirmPage from './pages/ContactConfirmPage';
import AuthPage from './pages/AuthPage';
import AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {
	const authCtx = useContext(AuthContext);
	
	return (
		<AuthContextProvider>
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/practices" element={<PracticesPage />} />
				<Route path="/practices/:practiceid" element={<PracticesDetailPage />} />
				<Route path="/lawyers" element={<LawyersPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/news/:newsid" element={<NewsDetailPage />} />
				<Route path="/contact" element={<ContactPage />} />
				{authCtx.isLoggedIn && <Route path="/contacts" element={<ContactRequestsPage />} />}
				{authCtx.isLoggedIn && <Route path="/contactconfirm" element={<ContactConfirmPage />} />}
				{!authCtx.isLoggedIn && <Route path="/authenticate" element={<AuthPage />} />}
				<Route path='*' element={<Navigate to="/"/>} /> 

			</Routes>
		</Layout>
		</AuthContextProvider>
	);
}

export default App;
