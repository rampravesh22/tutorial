import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Gesture = () => {
	return (
		<div className="h-screen gap-4 flex justify-center items-center">
			<MotionConfig
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95, rotate: "2.5deg" }}
					className="bg-zinc-900 text-white px-5 py-2 rounded"
				>
					Click me!
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95, rotate: "2.5deg" }}
					className="bg-red-600 text-white px-5 py-2 rounded"
				>
					Click me!
				</motion.button>
			</MotionConfig>
		</div>
	);
};

export default Gesture;
