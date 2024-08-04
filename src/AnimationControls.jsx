import React from "react";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
const AnimationControls = () => {
	const controls = useAnimation();
	const handleClick = () => {
		controls.start("flip");
	};
	return (
		<div className="h-screen bg-zinc-500 grid place-content-center gap-5">
			<button onClick={handleClick} className="bg-white px-6 py-2 rounded">
				Flip it!
			</button>
			<motion.div
				variants={{
					initial: {
						rotate: "0deg",
					},
					flip: {
						rotate: "360deg",
					},
				}}
				initial="initial"
				animate={controls}
				className="size-[300px] bg-blue-600"
			></motion.div>
		</div>
	);
};

export default AnimationControls;
