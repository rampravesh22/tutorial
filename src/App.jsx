import ArrayOfNumber from "./components/ArrayOfNumber";
import Factorial from "./components/Factorial";
import ToggleButton from "./components/ToggleButton";

function App() {
	return (
		<>
			{/* <div><ToggleButton /></div>
			<Factorial number={6} /> */}
			<ArrayOfNumber numbers={[1,23,4,5,6,9,12]}/>
		</>
	);
}

export default App;
