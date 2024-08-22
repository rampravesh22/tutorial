import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NextUIProvider>
			<ContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ContextProvider>
		</NextUIProvider>
	</React.StrictMode>
);
