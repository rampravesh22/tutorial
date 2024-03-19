import React, { useEffect, useState } from "react";

const Child = ({ getData }) => {
	const [test, setTest] = useState(false);
	console.log("rendered", Date.now());
	useEffect(() => {
		getData({ name: "ram", age: 20 });
	}, [test]);
	return (
		<button
			onClick={() => setTest(true)}
			className="bg-blue-600 px-8 py-1 active:bg-blue-700 transition-all active:ring-2 hover:bg-blue-700 active:ring-red-500  m-4 rounded-full text-white"
		>
			Child
		</button>
	);
};

export default Child;
