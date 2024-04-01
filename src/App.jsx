import { useEffect, useState } from "react";
import gsap from "gsap";
function App() {
	useEffect(() => {
		gsap.to("#box", {
			delay: 2,
			scale: 5,
			duration: 5,
			x: 200,
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300  flex items-center">
			<div id="box" className="mt-12 size-10  bg-red-600"></div>
		</div>
	);
}
export default App;
