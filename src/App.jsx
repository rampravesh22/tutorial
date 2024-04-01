import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.from("#box1", {
			delay: 1,
			scale: 3,
			duration: 2,
			x: 300,
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300  flex items-center">
			<div id="box1" className="size-10 ml-10 bg-pink-700"></div>
			<div id="box2" className="size-10 ml-10 bg-gray-700"></div>
		</div>
	);
}

export default App;
