import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.to("#box", {
			delay: 1,
			scale: 1,
			duration: 1,
			backgroundColor: "blue",
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300 flex  items-center">
			<div id="box" className="size-20"></div>
		</div>
	);
}

export default App;
