import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";

import Signup from "./pages/Signup";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="menu" element={<Menu />} />
					<Route path="contact" element={<Contact />} />
					<Route path="about" element={<About />} />
					<Route path="login" element={<Login />} />
					<Route path="newproduct" element={<NewProduct />} />
					<Route path="signup" element={<Signup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
