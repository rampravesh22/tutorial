import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalCart, setTotalCart] = useState(0);

	const removeItemFromCart = (id) => {
		setCart((prevState) => prevState.filter((item) => item.id !== id));
	};
	useEffect(() => {
		const sum = cart.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
		setTotalPrice(sum);
	}, [cart]);

	const values = {
		cart,
		setCart,
		totalCart,
		totalPrice,
		setTotalPrice,
		setTotalCart,
		removeItemFromCart,
	};
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
