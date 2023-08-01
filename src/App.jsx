import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Header from "./components/Header";
import Product from "./pages/Product";
import Footer from "./components/Footer";
function App() {
	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen">
				<div>
					<Header />
				</div>

				<div className="flex-grow">
					<div className="h-full">
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/about" element={<About />}></Route>
							<Route path="/contact" element={<Contact />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/products" element={<Products />}>
								<Route
									path="product/:category"
									element={<Product />}
								></Route>
							</Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="*" element={<Error />}></Route>
						</Routes>
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
