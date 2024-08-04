import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const BasicMotion = () => {
	const ref = useRef();
	useInView(ref, { once: true });
	return (
		<div className="grid grid-cols-3 gap-10 p-5">
			<div className="h-screen"></div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-md size-[180px] bg-zinc-800"
			></motion.div>
		</div>
	);
};

export default BasicMotion;
