import React, { useContext } from "react";
import AddNotes from "./AddNotes";
import ShowNotes from "./ShowNotes";
import { GlobalContext } from "./contextAPI";
const Home = () => {
	const { notes } = useContext(GlobalContext);
	return (
		<div className="bg-slate-200 min-h-screen w-[80%] m-auto ">
			<AddNotes />
			{notes ? <ShowNotes /> : null}
		</div>
	);
};

export default Home;
