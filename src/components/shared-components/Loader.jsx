import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
	return (
		<div className="flex gap-5 flex-col justify-center items-center pt-4">
			Loading...
			<motion.div
				className="w-8 h-8 rounded-full bg-blue-500"
				animate={{
					y: [0, -20, 0], // Moves up and down
				}}
				transition={{
					duration: 0.6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
};

export default Loader;
