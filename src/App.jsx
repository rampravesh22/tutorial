import { useEffect } from "react";
import { gsap } from "gsap";

function App() {
	useEffect(() => {
		gsap.to(".box", {
			delay: 2,
			scale: 4,
			duration: 2,
			x: 204,
			stagger: 4,
			repeat: 2,
		});
	}, []);
	return (
		<div className="h-screen  bg-gray-300 gap-32 flex-col flex justify-center">
			<div id="box1" className="box size-10 ml-20  bg-pink-700"></div>
			<div id="box2" className="box size-10 ml-20  bg-gray-700"></div>
		</div>
	);
}

export default App;
