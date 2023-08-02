import React, { useEffect, useState } from "react";

const Clock = () => {
	const [update, setUpdate] = useState("6deg");

	useEffect(() => {
		const id = setInterval(() => {
			console.log(`${update}`);
			const rod = document.getElementById("rod");
			rod.style.rotate = update;
			setUpdate("6deg");

			rod;
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, [update]);

	return (
		<div className="h-screen flex justify-center items-center flex-col">
			<div className="h-80 w-80 rounded-full border-2 relative">
				<div
					style={{ rotate: update }}
					id="rod"
					className={`after:content-[''] after:w-2 after:h-2 after:bg-red-700 after:rounded-full after:absolute after:right-0 h-2 bg-black z-10 w-1/2 left-0 top-1/2 absolute  origin-right   duration-[10s] transition-all`}
				></div>
			</div>
			<span>{update}</span>
		</div>
	);
};

export default Clock;
