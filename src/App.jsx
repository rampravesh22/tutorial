import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.from("#box", {
			delay: 1,
			scale: 3,
			duration: 1,
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300 flex items-center">
			<div id="box" className="size-10 ml-10 bg-pink-700"></div>
		</div>
	);
}

export default App;
