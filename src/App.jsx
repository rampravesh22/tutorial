import { useEffect } from "react";
import gsap from "gsap";

function App() {
	useEffect(() => {
		gsap.to("#box", {
			delay: 1,
			scale: 3,
			duration: 1,
			backgroundColor: "blue",
		});
	}, []);
	return (
		<div className="h-screen bg-gray-300 flex justify-center items-center">
			<div
				id="box"
				className="h-40 mt-10 w-40 rounded-full bg-red-600 after:w-full after:block after:rounded-t-full after:h-20 after:bg-black after:z-10 "
			></div>
		</div>
	);
}

export default App;
