import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex-grow mt-20">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
