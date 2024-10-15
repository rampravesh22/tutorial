import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import IncidentContextProvider from "./context/IncidentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<IncidentContextProvider>
				<App />
			</IncidentContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
