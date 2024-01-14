import { useState } from "react";
const count = 0;
function App() {
	const [randomNumber, setRandomNumber] = useState(
		Math.floor(Math.random() * 10)
	);
	const [value, setValue] = useState(0);

	const handleClick = () => {
		if (value === randomNumber) {
			setSuccess(true);
		}
	};
	const [success, setSuccess] = useState(false);

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="h-1/3 flex-col rounded w-1/2 flex justify-center gap-4 items-center shadow border">
					<label htmlFor="number">Guess the number</label>
					<input
						type="number"
						id="number"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="border text-center w-32 text-3xl rounded-md "
					/>
					<button
						onClick={handleClick}
						className="bg-green-700 rounded text-white px-6 py-1"
					>
						Check
					</button>
					{success && (
						<div className="bg-pink-600 text-white px-4 py-1">
							Successfully guessed
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
