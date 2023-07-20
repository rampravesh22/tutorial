import Home from "./Home";

function App() {
	return (
		<>
			<Home>
				<div style={{ color: "red", textTransform: "uppercase" }}>
					This is props children
				</div>
			</Home>
		</>
	);
}

export default App;
