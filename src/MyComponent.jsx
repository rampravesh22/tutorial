import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
const MyComponent = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	React.useEffect(() => {
		controls.start("visible");
	}, [controls]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				visible: { opacity: 1, x: 0 },
				hidden: { opacity: 0, x: -100 },
			}}
		>
			Content goes here
		</motion.div>
	);
};
export default MyComponent;
