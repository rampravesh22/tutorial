import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchFunctionallity = () => {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log("submitted");
				}}
				className="bg-slate-200 relative flex gap-5 p-3 my-6 mx-6 border"
			>
				<button
					type="submit"
					className="flex gap-2 top-[50%] translate-y-[-50%] left-5 absolute items-center "
				>
					<BiSearchAlt2 className="text-2xl " />
				</button>
				<input
					type="text"
					placeholder="search here"
					className="w-full outline-none  p-1 pl-[40px] rounded-md"
				/>
			</form>
		</div>
	);
};

export default SearchFunctionallity;
