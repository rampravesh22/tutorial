import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoConextProvider from "./context/TodoConext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TodoConextProvider>
			<App />
		</TodoConextProvider>
	</React.StrictMode>
);
