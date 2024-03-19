import { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
	const [sidebar, setSideBar] = useState(false);
	return (
		<div className="flex flex-col h-screen">
			<div className="bg-pink-600 items-center flex gap-4 text-white py-2 px-2">
				<button
					onClick={() => setSideBar(!sidebar)}
					className="flex md:hidden focus:ring-1 rounded ring-white transition-all   w-10 h-10 p-2 flex-col gap-1.5"
				>
					<span className="w-full h-1 bg-black"></span>
					<span className="w-full h-1 bg-black"></span>
					<span className="w-full h-1 bg-black"></span>
				</button>
				Nav
			</div>
			<Sidebar sidebar={sidebar} setSideBar={setSideBar} />
		</div>
	);
}

export default App;
