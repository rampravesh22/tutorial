import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Home = () => {
	const [count, setCount] = useState(0);

	const setCookie = () => {
		Cookies.set("count", 10, { expires: 1 / 48 });
	};

	useEffect(() => {}, []);

	const updateCookie = () => {
		const value = Cookies.get("count");
		console.log(value);
	};
	return (
		<div className="text-[2rem] flex justify-center items-center h-screen flex-col gap-7">
			<button
				onClick={setCookie}
				className="border-2 bg-gray-200 px-5 py-2 rounded-md border-black hover:bg-gray-700 hover:text-white transition-all duration-200"
			>
				Set cookies
			</button>
			<button
				onClick={updateCookie}
				className="border-2 bg-gray-200 px-5 py-2 rounded-md border-black hover:bg-gray-700 hover:text-white transition-all duration-200"
			>
				Update cookies
			</button>
			<div className="flex gap-5">
				<button
					className="bg-fuchsia-800  px-20 rounded-md hover:bg-fuchsia-900 text-white"
					onClick={() => {
						setCount((preState) => preState - 1);
					}}
				>
					-
				</button>
				<span>{count}</span>
				<button
					className="bg-fuchsia-800 rounded-md hover:bg-fuchsia-900 text-white px-20"
					onClick={() => setCount((preState) => preState + 1)}
				>
					+
				</button>
			</div>
		</div>
	);
};
export default Home;
