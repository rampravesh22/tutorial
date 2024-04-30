import { TypeAnimation } from "react-type-animation";
function App() {
	return (
		<div className="h-[100svh] flex justify-center items-center font-nunito">
			<TypeAnimation
				sequence={[
					"Chetan", // Types 'One'
					1000, // Waits 1s
					"Chetan Patel", // Deletes 'One' and types 'Two'
					3000,
					"Chetan Raj Patel",
					2000, // Waits 2s
					"Sorry", // Types 'Three' without deleting 'Two'
					3000,
					"Chetan Gandu",
				]}
				wrapper="span"
				cursor={true}
				repeat={0}
				className="bg-teal-700 border-black border block text-white rounded-md px-7"
				style={{ fontSize: "2em", display: "inline-block" }}
			/>
		</div>
	);
}

export default App;
