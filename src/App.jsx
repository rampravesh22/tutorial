import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Products />}></Route>
					<Route path="product/:id" element={<ProductDetails />}></Route>
					<Route path="cart" element={<CartPage />}></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
