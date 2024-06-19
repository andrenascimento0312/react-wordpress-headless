import logo from '../logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import SinglePost from './pages/SinglePost';
import NaoEncontrado from './pages/NaoEncontrado';
import Contact from './pages/Contact';

const App = () => {
	return (
		
		<BrowserRouter>

			<div className="max-w-7xl mx-auto px-3">

				<Header logo={logo} />

				<Routes>
					
					<Route path="/about" element={<About />} />

					<Route path="/contato" element={<Contact />} />

					<Route path="/blog/:slug" element={<SinglePost />} />

					<Route exact path="/" element={<Home />} />

					<Route path="*" element={<NaoEncontrado />} />

				</Routes>


				<Footer copy="© 2024" />

			</div>

		</BrowserRouter>
	);
}

export default App;