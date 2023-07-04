import React from "react";
import { useState } from "react";
const Home = () => {
	const [value, setValue] = useState(0);
	const changeState = () => {
		setValue(0);
		const elem = document.getElementById("reset");
		console.log(elem);
		elem.classList.add("scale-75");
	};
	return (
		<>
			<div className="bg-slate-800 text-white py-3 text-center flex justify-center">
				Home
			</div>
			<div className="flex border-orange-500 border-2 w-[80%]  h-52 m-auto mt-56 items-center justify-center flex-col">
				<div className="flex flex-row w-[90%] justify-between items-center">
					<button
						className="text-[70px] hover:text-white ta border-red-200 bg-rose-600 rounded-lg px-10 border-2 focus:scale-75 focus:tran transition-all"
						onClick={() => {
							setValue((prev) => prev + 1);
						}}
					>
						+
					</button>
					<button
						className="text-[70px] hover:text-white ta border-red-200 rounded-xl  px-12 bg-rose-600  border-2 hover:animate-none "
						onClick={() => {
							setValue((prev) => prev - 1);
						}}
					>
						-
					</button>
					<button
						className="text-[70px] transition-all hover:bg-slate-400 hover:text-black border-red-200 px-5 rounded-xl bg-rose-600 border-2"
						onClick={changeState}
						id="reset"
					>
						Reset
					</button>
				</div>
				<div>
					<p>{value}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
