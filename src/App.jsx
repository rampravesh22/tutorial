import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.to("#box", {
			x: 600,
			delay: 3,
			rotate: 360,
			duration: 5,
			scrollTrigger: true,
		});
	}, []);
	return (
		<>
			<div
				id="box"
				className="h-40 mt-10 w-40 rounded-full bg-red-600 after:w-full after:block after:rounded-t-full after:h-20 after:bg-black after:z-10 "
			></div>
		</>
	);
}

export default App;
