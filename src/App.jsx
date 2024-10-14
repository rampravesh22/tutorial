import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => setSidebar(!sidebar);
	useEffect(() => {
		document.body.style.overflow = sidebar ? "hidden" : "auto";
	}, [sidebar]);
	return (
		<div className="h-screen">
			{/* sidebar */}

			<div
				id="side"
				onClick={(e) => {
					if (document.getElementById("side") === e.target) {
						toggleSidebar();
					}
				}}
				className={`fixed ${
					sidebar ? "translate-x-0" : "-translate-x-full"
				} inset-0 bg-[rgba(0,0,0,0.5)]`}
			>
				<div
					className={`w-[250px] duration-500 transition-all ${
						sidebar ? "translate-x-0" : "-translate-x-full"
					} p-6 text-white h-full bg-gray-800 fixed top-0 left-0`}
				>
					<div className="text-4xl flex justify-between">
						<div>Borter</div>
						<button
							onClick={toggleSidebar}
							className=" right-2 size-8 flex justify-center items-center hover:border   top-9 py-0.5 px-1 rounded"
						>
							<CgClose className="text-2xl" />
						</button>
					</div>
					<ul className="text-white mt-10 flex items-start gap-5 flex-col">
						<li className="cursor-pointer py-1 hover:bg-gray-700 px-2 rounded">
							Home
						</li>
						<li className="cursor-pointer py-1 hover:bg-gray-700 px-2 rounded">
							About
						</li>
						<li className="cursor-pointer py-1 hover:bg-gray-700 px-2 rounded">
							Contact
						</li>
						<li className="cursor-pointer py-1 hover:bg-gray-700 px-2 rounded">
							Login
						</li>
						<li className="cursor-pointer py-1 hover:bg-gray-700 px-2 rounded">
							Register
						</li>
					</ul>
				</div>
			</div>
			<button
				onClick={toggleSidebar}
				className="bg-blue-950 hover:bg-blue-900 text-white m-5 px-6 py-2 rounded-md"
			>
				Open sidebar
			</button>
		</div>
	);
};

export default App;
