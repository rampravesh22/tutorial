import { useState } from "react";

function App() {
	const [toggle, setToggle] = useState(false);
	const [name, setNmae] = useState("");
	return (
		<>
			<div className={`bg-blue-700 px-2 sm:px-6 ${} text-white p-4 flex justify-between`}>
				<button
					onClick={() => setToggle(!toggle)}
					className={`w-8 h-8 bg-pink-800 sm:hidden rounded-md ${
						toggle ? "ring" : ""
					}`}
				></button>
			</div>
		</>
	);
}

export default App;
