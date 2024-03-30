import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex-grow"></main>
			<Footer />
		</div>
	);
}

export default App;
