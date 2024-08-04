import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const ScrollBasedAnimation = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);
	console.log(scrollYProgress);

	const background = useTransform(
		scrollYProgress,
		[0, 1],
		["rgb(86,1,245)", "rgb(1,245,13)"]
	);
	return (
		<div className="">
			<motion.div
				style={{
					// scaleX: scrollYProgress,
					scaleX: scaleX,
					transformOrigin: "left",
					position: "sticky",
					top: 0,
					background: background,
					width: "100%",
					height: "10px",
				}}
			></motion.div>
			<div className="space-y-10 p-5">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					exercitationem assumenda illo pariatur at. Illo repellendus ipsa
					magnam numquam illum quod distinctio minus facere! Exercitationem,
					neque. Nobis, quis? Ad nisi veritatis non qui sit quam recusandae
					dolor velit vero! Dolores voluptatem hic libero nam modi vero ullam
					asperiores molestiae eos?
				</p>
			</div>
			<motion.div></motion.div>
		</div>
	);
};

export default ScrollBasedAnimation;
