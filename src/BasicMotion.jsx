import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function BasicMotion() {
	const [isVisible, setIsVisible] = useState(true);
	const [modal, setModal] = useState(false);
	useEffect(() => {
		document.body.style.overflow = modal ? "hidden" : "";
	}, [modal]);
	return (
		<div>
			{/* <motion.button
				// layout
				onClick={() => setIsVisible(!isVisible)}
				className="bg-zinc-700 px-8 py-2 m-4 text-white rounded"
			>
				Click
			</motion.button> */}
			{/* <AnimatePresence mode="popLayout">
				{isVisible && (
					<motion.div
						//this is for initial style
						initial={{
							rotate: "0deg",
							scale: 0,
							y: 0,
						}}
						//this is like what will be animate state
						animate={{
							rotate: "180deg",
							scale: 1,
							y: [0, 150, -150, -150, 0],
						}}
						exit={{ rotate: "0deg", scale: 0, y: 0 }}
						transition={{ duration: 2, type: "spring", ease: "backInOut" }}
						className="size-[100px] bg-teal-950 m-10"
					></motion.div>
				)}
			</AnimatePresence> */}
			<motion.button
				// layout
				onClick={() => setModal(true)}
				className="bg-zinc-700 px-8 py-2 m-4 text-white rounded"
			>
				Open
			</motion.button>
			<AnimatePresence>
				{modal && (
					<motion.div
						initial={{ y: "-100px" }}
						animate={{ y: "0px" }}
						exit={{ y: "-100px" }}
						transition={{ duration: 0.2 }}
						className="fixed rounded-md flex justify-center items-center inset-[60px] bg-[rgba(0,0,0,.6)]"
					>
						<motion.button
							// layout
							onClick={() => setModal(false)}
							className="bg-zinc-700 px-8 py-2 m-4 text-white rounded"
						>
							close
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default BasicMotion;
