import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StudentContext from "./context/StudentContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StudentContext>
			<Toaster />
			<App />
		</StudentContext>
	</React.StrictMode>
);
