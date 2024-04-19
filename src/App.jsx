import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
	return (
		<>
			<div className="h-screen flex flex-col">
				<div>
					<Navbar />
				</div>
				<div className="flex-grow mt-16">
					<Home />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
