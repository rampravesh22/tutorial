import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.to("#box", {
			delay: 4,
			scale: 5,
			duration: 5,
			x: 200,
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300  flex justify-center items-center">
			<div id="box" className="box w-20 mt-12 size-5  bg-red-600"></div>
		</div>
	);
}

export default App;
