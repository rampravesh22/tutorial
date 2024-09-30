import React, { createContext, useEffect, useReducer, useState } from "react";
import cartReducer, { loadCartItems } from "../reducer/cartReducer";

export const CartContext = createContext();

const initialState = [];

const CartContextProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, initialState);
	useEffect(() => {
		dispatch(loadCartItems());
	}, []);

	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
