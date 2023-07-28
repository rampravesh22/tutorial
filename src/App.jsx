// main.js or App.js
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import AnimatedBox from "./components/AnimatedBox";

function App() {
	useEffect(() => {
		Aos.init({
			duration: 800,
			offset: 100,
			easing: "ease-in-out",
		});
	}, []);

	// Your other React components and code go here

	return <AnimatedBox />;
}

export default App;
