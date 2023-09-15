import React from "react";
import Home from "./components/Home";
import ContextProvider from "./contextapi/context";
const App = () => {
	return (
		<ContextProvider>
			<Home />
		</ContextProvider>
	);
};

export default App;
