import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalCart, setTotalCart] = useState(0);

	const values = { cart, setCart, totalCart, setTotalCart };
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
