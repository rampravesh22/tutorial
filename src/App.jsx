import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Registration from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="register" element={<Registration />} />
				<Route path="login" element={<Login />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
