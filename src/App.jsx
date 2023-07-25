import Home from "./components/Home";
import ContextAPI from "./components/contextAPI";
function App() {
	return (
		<ContextAPI>
			<Home />
		</ContextAPI>
	);
}

export default App;
