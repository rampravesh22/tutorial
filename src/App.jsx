import Header from "./Header";
import React from "react";
import { Pagination } from "@nextui-org/react";

function App() {
	return (
		<>
			<Header />
			<Pagination total={10} initialPage={1} />
		</>
	);
}

export default App;
