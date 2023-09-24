import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const initalizeContext = createContext();

const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useState(0);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			const cartCount = localStorage.getItem("cart");
			console.log(cartCount);
			setCart(parseInt(cartCount));
		} else {
			localStorage.setItem("cart", "0");
		}
		setLoading(true);
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<initalizeContext.Provider
			value={{ products, setProducts, cart, setCart, loading, setLoading }}
		>
			{children}
		</initalizeContext.Provider>
	);
};

export const useGlobalContext = () => useContext(initalizeContext);
export default ContextProvider;
