import React, { useContext } from "react";
import GlobalContext from "../contenxt/context";

const Success = ({ bg, message }) => {
	const { success, deleteNote } = useContext(GlobalContext);
	return (
		<div
			className={`transition-all  text-center text-white ${bg} py-2  ${
				success || deleteNote ? "h-auto" : "h-0"
			}`}
		>
			{message}
		</div>
	);
};

export default Success;
