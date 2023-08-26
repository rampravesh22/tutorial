import { useState } from "react";
import "./app.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
function App() {
	const [show, setShow] = useState(false);

	const handleHamburgerMenu = () => {
		setShow(!show);
	};

	const hideSidebar = (e) => {
		if (show) {
			if (e.target !== document.querySelector("#sidebar")) {
				setShow(false);
			}
		}
	};

	return (
		<div className="flex flex-col min-h-screen justify-center">
			<header className="flex bg-emerald-800 sticky top-0 w-full justify-between px-3 md:px-6 text-white py-4">
				<div className="logo text-2xl">Doso</div>
				<nav className="hidden sm:block">
					<Navbar />
				</nav>
				{!show ? (
					<button className="sm:hidden" onClick={handleHamburgerMenu}>
						<RxHamburgerMenu className="text-2xl" />
					</button>
				) : null}
				{show ? (
					<button onClick={handleHamburgerMenu}>
						<RxCross2 className="text-2xl sm:hidden" />
					</button>
				) : null}
			</header>
			<main
				className="flex-grow"
				id="sidebar"
				onClick={(e) => hideSidebar(e)}
			>
				<Content />
			</main>
			<footer>
				<Footer />
			</footer>

			<Sidebar show={show} setShow={setShow} />
		</div>
	);
}
export default App;
