import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
const ViewBasedAnimation = () => {
	const divRef = useRef(null);
	const isInView = useInView(divRef, { once: true });

	useEffect(() => {
		console.log("is in view", isInView);
	}, [isInView]);
	return (
		<>
			<div className="h-[150vh]"></div>
			<motion.div
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
				whileInView={{ opacity: 1 }}
				className="h-screen bg-black"
			></motion.div>
			<div
				ref={divRef}
				className={`h-screen ${
					isInView ? "bg-green-700" : ""
				} bg-red-700 transition duration-1000 `}
			></div>
		</>
	);
};

export default ViewBasedAnimation;
