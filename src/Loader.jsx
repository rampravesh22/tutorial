import React, { useContext } from "react";
import { GlobalContext } from "./ContextProvider";

const Loader = () => {
	const { loading } = useContext(GlobalContext);
	return (
		<div className="flex justify-center ">
			{loading && (
				<span className="w-20 mt-16 h-20 animate-spin  rounded-full border border-e-black"></span>
			)}
		</div>
	);
};

export default Loader;
