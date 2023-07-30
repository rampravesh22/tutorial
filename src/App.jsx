import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="contact" element={<Contact />}></Route>
						<Route path="home" element={<Home />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="about" element={<About />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
