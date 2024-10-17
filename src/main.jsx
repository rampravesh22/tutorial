import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import "./index.css";
import store from "./store/configureStore.js";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<NextUIProvider>
				<App />
			</NextUIProvider>
		</Provider>
	</React.StrictMode>
);
