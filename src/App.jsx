import { useState } from "react";
import { createContext } from "react";
import Home from "./Home";

export const Context = createContext();

function App() {
	const [data, setData] = useState(0);
	return (
		<Context.Provider value={{ data, setData }}>
			<Home></Home>
		</Context.Provider>
	);
}

export default App;
