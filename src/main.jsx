import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContenxtProvider from "./ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContenxtProvider>
			<App />
		</ContenxtProvider>
	</React.StrictMode>
);
