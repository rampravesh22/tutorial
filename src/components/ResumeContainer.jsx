import React, { useContext, useEffect, useState } from "react";
import Resume from "./Resume";
import { GlobalContext } from "../context/ContextProvider";
import Loader from "./shared-components/Loader";
import AddData from "./dashboard/AddData";

const ResumeContainer = () => {
	const { data } = useContext(GlobalContext);
	return (
		// <div>
		// 	<AddData />
		// </div>
		<div>{data ? <Resume data={data} /> : <Loader />}</div>
	);
};

export default ResumeContainer;
