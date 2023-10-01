import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increament,
	incrementByNumber,
} from "../redux/counter/actions";

const Counter = () => {
	const count = useSelector((state) => state.counterReducer.count);

	const [input, setInput] = useState(0);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch(increament()); // Dispatch the increament action
		}, 1000);

		return () => {
			clearInterval(intervalId); // Cleanup the interval on component unmount
		};
	}, []);
	return (
		<div className="h-screen flex justify-center items-center flex-col gap-4 bg-slate-300">
			<div className="value text-4xl">{count}</div>
			<button
				className="bg-green-600 text-3xl px-5 py-2 text-white rounded-md"
				onClick={() => dispatch(increament())}
			>
				Increment
			</button>
			<button
				className="bg-red-600 text-3xl px-5 py-2 text-white rounded-md"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
			<div className="flex gap-3 flex-col">
				<input
					type="number"
					className="min-w-20 h-14 px-4 text-2xl"
					onChange={handleChange}
				/>
				<button
					className="bg-blue-600  text-3xl px-5 py-2 text-white rounded-md"
					onClick={() => dispatch(incrementByNumber(input))}
				>
					Increment By {input}
				</button>
			</div>
		</div>
	);
};

export default Counter;
