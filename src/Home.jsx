import React from "react";

const Home = ({ findValue }) => {
	return (
		<button
			onClick={() => findValue("hi how are you".toUpperCase())}
			className="bg-zinc-900 rounded-md px-6 py-2 text-white"
		>
			click
		</button>
	);
};

export default Home;
