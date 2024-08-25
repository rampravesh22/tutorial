import React, { useContext, useEffect, useState } from "react";
import Resume from "./Resume";
import { GlobalContext } from "../context/ContextProvider";

const ResumeContainer = () => {
	const { data } = useContext(GlobalContext);
	return (
		<div>
			{data ? (
				<Resume data={data} />
			) : (
				<p className="text-center mt-5 text-4xl">Loading...</p>
			)}
		</div>
	);
};

export default ResumeContainer;
