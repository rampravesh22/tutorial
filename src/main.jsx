import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CartContextProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartContextProvider>
	</React.StrictMode>
);
