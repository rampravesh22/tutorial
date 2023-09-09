import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NextUIProvider themes={["modern"]} attribute="class">
			<App />
		</NextUIProvider>
	</React.StrictMode>
);
