import Header from "./Header";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="w-[80%] m-auto">
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/login" element={<Login />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
