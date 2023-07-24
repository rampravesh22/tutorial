import { useEffect, useState } from "react";
import useCounter from "./components/useCounter";

function App() {
	const {
		count,
		increament,
		decreament,
		reset,
		increamentBy_10,
		increamentByValue,
	} = useCounter(0);
	const [change, setChange] = useState(false);
	useEffect(() => {
		return () => {
			setChange(false);
		};
	});
	const [value, setValue] = useState("");
	return (
		<div className="h-screen flex items-center">
			<div className=" grid grid-flow-row group hover:shadow-2xl transition-all duration-300 place-items-center border-4 w-[50%] m-auto h-2/3 rounded-3xl hover  items-center justify-center">
				<button
					type="button"
					onClick={() => {
						decreament();
						setChange(true);
					}}
					className="text-3xl active:shadow-lg duration-500 active:outline-4 outline-black transition-all shadow-inner  text-center bg-emerald-700 border-2 group-hover:bg-blue-700  hover:bg-emerald-800 cursor-pointer  text-white rounded-md px-5 py-1"
				>
					-
				</button>
				<span
					className={`text-3xl text-center px-10 py-10  text-white min-w-16 min-h-16 flex justify-center items-center  box-border rounded-full duration-0 bg-red-700 ${
						change ? " shadow-inner shadow-white bg-red-950  " : ""
					}`}
				>
					{count}
				</span>
				<button
					type="button"
					onClick={() => {
						increament();
						setChange(true);
					}}
					className=" text-3xl text-center bg-emerald-700 border-2 group-hover:bg-blue-700  hover:bg-emerald-800 cursor-pointer  text-white rounded-md px-5 py-1"
				>
					+
				</button>
				<button
					type="button"
					onClick={() => {
						increamentBy_10();
						setChange(true);
					}}
					className=" text-3xl text-center bg-emerald-700 border-2 group-hover:bg-blue-700  hover:bg-emerald-800 cursor-pointer  text-white rounded-md px-5 py-1"
				>
					10+
				</button>
				<button
					type="button"
					onClick={() => {
						reset();
						setChange(true);
					}}
					className=" text-l text-center bg-emerald-700 border-2 group-hover:bg-blue-700  hover:bg-emerald-800 cursor-pointer  text-white rounded-md px-5 py-1"
				>
					Reset
				</button>
				<div>
					<input
						type="number"
						placeholder="Enter Value"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className="border-2 group-hover:focus:outline-blue-700 px-2 mr-3 py-2 focus:outline-emerald-700 outline-2"
					/>
					<button
						type="button"
						onClick={() => {
							increamentByValue(value);
							setChange(true);
							setValue("");
						}}
						className=" text-l text-center group-hover:bg-blue-700  bg-emerald-700 border-2 hover:bg-emerald-800 cursor-pointer  text-white rounded-md px-6 py-2 "
					>
						By Value
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
