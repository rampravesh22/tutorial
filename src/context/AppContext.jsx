import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer/reducer";
import axios from "axios";
export const GlobalContext = createContext();
import APIurl from "./api";
import ACTIONS from "../reducer/action";
const AppContext = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, []);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(`${APIurl}/product/`, {
					headers: { "Content-Type": "aplication/json" },
				});
				dispatch({
					type: ACTIONS.SET_ALL_PRODUCT,
					payload: { data: res.data },
				});
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	return (
		<>
			<GlobalContext.Provider value={{ products, dispatch }}>
				{children}
			</GlobalContext.Provider>
		</>
	);
};
export default AppContext;
