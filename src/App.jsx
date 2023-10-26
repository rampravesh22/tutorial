import Home from "./pages/Home";
import Header from "./components/Header";
import { useContext, useState } from "react";
import { GlobalContext } from "./context/ContextProvider";

function App() {
	const { theme } = useContext(GlobalContext);
	return (
		<div
			className={`${
				theme === "dark" ? "bg-slate-800 text-white" : null
			} h-screen`}
		>
			<Header />
			<Home />
		</div>
	);
}

export default App;
