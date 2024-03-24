import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function App() {
	const [expand, setExpand] = useState(false);
	return (
		<div className="flex  mt-2 justify-center items-center">
			<div
				className={`border flex px-2 justify-between border-black  rounded-full origin-left relative focus-within:ring-blue-600 focus-within:ring-1 transition-all m-auto   ${
					expand ? "block" : "hidden"
				}`}
			>
				<button
					className={`flex absolute top-1 -left-9 items-center  ${
						expand ? "scale-100" : "scale-0"
					}`}
					onClick={() => {
						setExpand(!expand);
						console.log("expand", expand);
					}}
				>
					<BiArrowBack className="text-2xl" />
				</button>
				<input
					type="text"
					id="search"
					className={`${
						expand ? "scale-x-100 " : "scale-x-0"
					} outline-none ml-2   border-e border-black  flex-grow `}
				/>
				<button>
					<AiOutlineSearch className="text-4xl pl-2 pe-2" />
				</button>
			</div>
			<button
				className={`flex items-center ${!expand ? "scale-100" : "scale-0"}`}
				onClick={() => {
					setExpand(!expand);
					console.log("expand", expand);
				}}
			>
				<AiOutlineSearch className="text-4xl pr-2" />
			</button>
		</div>
	);
}

export default App;
