import Home from "./Home";

function App() {
	const findValue = (test) => {
		console.log(test);
	};
	return <Home findValue={(test) => findValue(test)}>App</Home>;
}

export default App;
