import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Singnup from "./pages/Singnup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Home />}></Route>
					<Route path="signup" element={<Singnup />}></Route>
					<Route path="login" element={<Login />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="contact" element={<Contact />}></Route>
					<Route path="*" element={<Error />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
