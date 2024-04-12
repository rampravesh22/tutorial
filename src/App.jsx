import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div color="red" className="flex flex-col h-screen">
			<Header />
			<main className="flex-grow mt-16">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
