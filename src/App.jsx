import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Header from "./components/Header";
import Product from "./pages/Product";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/products" element={<Products />}>
						<Route path="product/:category" element={<Product />}></Route>
					</Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
