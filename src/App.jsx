import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />}></Route>
				<Route path="menu" element={<Menu />}></Route>
				<Route path="contact" element={<Contact />}></Route>
				<Route path="about" element={<About />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
