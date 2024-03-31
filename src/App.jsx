import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex-grow">
				<HomeScreen />
			</main>
			<Footer />
		</div>
	);
}

export default App;
