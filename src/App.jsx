import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";

function App() {
	const [show, setShow] = useState(false);

	const handleBtn = () => {
		setShow(true);

		gsap.fromTo(
			"#chetan",
			{ x: -600, opacity: 0 },
			{ opacity: 1, x: 0, duration: 1 }
		);
	};
	const hideSideBar = (e) => {
		e.stopPropagation();
		gsap.fromTo("#chetan", { x: 0 }, { x: -600 });
		setTimeout(() => {
			setShow(false);
		}, 200);
	};
	useEffect(() => {
		document.body.style.overflow = show ? "hidden" : "auto";
	}, [show]);

	return (
		<>
			<div className="h-screen flex justify-center items-center">
				<button
					onClick={handleBtn}
					className="bg-gray-900 text-white px-8 py-2 rounded hover:bg-gray-800 transition-all focus:ring-2 focus:ring-blue-700 focus:outline-none"
				>
					Click Here
				</button>
			</div>
			<div
				onClick={(e) => {
					if (e.target == document.querySelector("#container")) {
						hideSideBar(e);
					}
				}}
				className={`fixed ${
					show ? "flex" : "hidden"
				} inset-0   bg-[rgb(0,0,0,0.8)]`}
				id="container"
			>
				<div
					id="chetan"
					className="bg-white relative h-full text-2xl flex justify-center items-center  w-[300px]"
				>
					<div className="flex flex-col gap-20">
						<div className="flex flex-col gap-10">
							<a href="" className="hover:underline">
								Home
							</a>
							<a href="" className="hover:underline">
								Contact
							</a>
							<a href="" className="hover:underline">
								About
							</a>
							<a href="" className="hover:underline">
								More
							</a>
						</div>
						<div>
							<button className="bg-black text-white px-9 py-1 text-base rounded">
								Register
							</button>
						</div>
					</div>
					<button
						onClick={hideSideBar}
						className="absolute right-4 top-4 text-sm capitalize transition-all bg-black text-white px-5 py-1 rounded"
					>
						close
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
