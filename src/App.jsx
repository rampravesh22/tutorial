import React, { useState, useEffect } from "react";

const App = () => {
	const [showCards, setShowCards] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowCards(true);
		}, 1000);
	}, []);

	return (
		<div className="flex flex-col items-center mt-10 gap-5">
			<div
				className={`bg-red-500 card w-[90%] transition-all rounded delay-[1000ms]   h-40  ${
					showCards ? "opacity-100 translate-x-0" : "translate-x-10 opacity-0"
				}`}
			></div>
			<div
				className={`card bg-green-500 card h-40 w-[90%] delay-[1500ms] transition-all rounded  ${
					showCards ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
				}`}
			></div>
			<div
				className={`card  bg-blue-500 card h-40 w-[90%] transition-all rounded delay-[2000ms]  ${
					showCards ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
				}`}
			></div>
		</div>
	);
};

export default App;
