import { useEffect } from "react";

function App() {
	useEffect(() => {});
	return (
		<div
			onClick={(e) => {
				console.log("gradparent");
				e.stopPropagation();
			}}
			onMouseOver={(e) => {
				e.stopPropagation();
			}}
			className="w-[90%] hover:bg-red-600 bg-slate-200  border flex justify-center items-center border-black h-[500px] m-auto mt-10"
		>
			<div
				onClick={(e) => {
					console.log("parent");
					e.stopPropagation();
				}}
				className="bg-blue-400 border flex justify-center items-center  border-black w-[70%] h-[70%] gap-6"
			>
				<div
					onClick={(e) => {
						console.log("child div");
					}}
					className="bg-zinc-400 border  border-gray-900 w-[50%] h-[50%]"
				></div>
				<button
					onClick={(e) => {
						e.stopPropagation();
						console.log(e.isPropagationStopped());
						console.log("child btn");
					}}
					className="bg-black text-white px-6 py-2 rounded-md"
				>
					Button
				</button>
			</div>
		</div>
	);
}
export default App;
