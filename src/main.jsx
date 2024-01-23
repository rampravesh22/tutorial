import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Toaster
			position="top-right"
			toastOptions={{
				className: "shadow-md border-2 drop-shadow-md",
			}}
		/>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
