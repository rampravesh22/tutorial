import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiPlus } from "react-icons/bi";
import { supabase } from "../../supabaseClient";

const AddData = () => {
	const [heading, setHeading] = useState("");
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);
	const [allValues, setAllValues] = useState([
		"JavaScript",
		"Python",
		"Java",
		"C++",
		"C#",
		"Ruby",
		"Go",
		"Swift",
		"Kotlin",
		"PHP",
		"TypeScript",
		"Rust",
		"Dart",
		"Scala",
		"Perl",
		"Haskell",
		"Objective-C",
		"R",
		"MATLAB",
		"Shell",
	]);

	const addValue = () => {
		if (value) {
			allValues.unshift(value);
			setValue("");
		} else {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
	};
	const removeValue = (value) => {
		setAllValues((preState) => preState.filter((val) => val !== value));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const { data } = await supabase.from("resume");
	};
	return (
		<div>
			<form
				onSubmit={handleFormSubmit}
				action=""
				className="mt-10 mx-auto w-[90%] gap-4 flex flex-col max-w-3xl "
			>
				<input
					type="text"
					value={heading}
					required
					name="heading"
					onChange={(e) => setHeading(e.target.value)}
					placeholder="Enter  heading ex. Language, Tools"
					className="border rounded-lg border-slate-600 h-9 px-2"
				/>
				<div className=" border  flex h-9 rounded-lg border-slate-600">
					<input
						type="text"
						value={value}
						name="values"
						required={allValues.length < 0}
						onChange={(e) => setValue(e.target.value)}
						placeholder="Enter value Python, Javascript, Java"
						className=" rounded-md h-full outline-none  px-2 w-full"
					/>
					<button
						onClick={addValue}
						type="button"
						className=" flex justify-center items-center bg-indigo-600 text-white  px-4 py-.5  rounded-md"
					>
						Add <BiPlus />
					</button>
				</div>
				{error && (
					<span className="text-xs  -mt-4 pl-1 text-red-600">
						Please enter value.
					</span>
				)}
				<div className="flex justify-between gap-2">
					<div className="flex items-start gap-1 flex-wrap">
						<AnimatePresence>
							{allValues.map((value, index) => {
								return (
									<motion.span
										key={index}
										initial={{ scale: 0, y: -14 }}
										animate={{ scale: 1, y: 0 }}
										exit={{ scale: 0 }}
										transition={{ duration: 0.2 }}
										className="bg-gray-200 group justify-end flex relative lowercase text-xs items-center rounded-xl px-2 py-1"
									>
										{value}
										<button
											onClick={() => removeValue(value)}
											type="button"
											className="absolute  shadow-lg p-.5 bg-red-600 shadow-white rounded-full  group-hover:block hidden"
										>
											<CgClose className="text-white" />
										</button>
									</motion.span>
								);
							})}
						</AnimatePresence>
					</div>
					<button
						type="submit"
						className="self-start px-6 py-2 bg-zinc-950 text-white rounded-md"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddData;
