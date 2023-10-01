import React from "react";
import { useSelector } from "react-redux";
import Bug from "./Bug";

const ShowBugs = () => {
	const bugs = useSelector((state) => state.bugReducer.bugs);
	console.table(bugs);
	return (
		<div className="flex justify-center gap-2 p mt-3 flex-col w-[80%]  m-auto">
			{bugs.map((bug) => {
				return <Bug key={bug.id} bug={bug} />;
			})}
		</div>
	);
};

export default ShowBugs;
