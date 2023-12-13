import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="aboutus" element={<AboutUs />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="services" element={<Services />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
