import React from "react";
import AddNotes from "./AddNotes";
import ShowNotes from "./ShowNotes";
const Home = () => {
	return (
		<div className="bg-slate-200 min-h-screen w-[80%] m-auto ">
			<AddNotes />
			<ShowNotes />
		</div>
	);
};

export default Home;
