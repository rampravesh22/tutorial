import { useState } from "react";

function App() {
	const [bgColor, setBgColor] = useState("#0000FF");
	const [change, setChange] = useState(false);
	const [coppied, setCoppied] = useState(false);
	const handleInputChange = (e) => {
		setChange(true);
		setBgColor(e.target.value);
	};
	const handleClickBtn = () => {
		navigator.clipboard
			.writeText(bgColor)
			.then(() => {
				setCoppied(true);
				setTimeout(() => {
					setCoppied(false);
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className="flex items-center gap-10 justify-center mt-5">
				<label htmlFor="color">Select Color</label>
				<input
					className="w-20 h-10 rounded-md"
					value={bgColor}
					onChange={handleInputChange}
					type="color"
				/>
			</div>
			<div
				style={{ background: bgColor }}
				className={`h-[60vh] max-w-[500px]  border border-black origin-left transition-all mt-10 w-11/12 m-auto`}
			></div>
			<button
				onClick={handleClickBtn}
				className="m-auto w-32 mt-10 border px-5 py-2 flex justify-center text-lg items-center group border-black relative rounded-md"
			>
				<span className="group-hover:block hidden bg-slate-300 border rounded-md px-3 py-.5   absolute -top-9">
					{coppied ? "Coppied" : "Copy"}
				</span>
				{bgColor}
			</button>
		</>
	);
}

export default App;
