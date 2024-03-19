import React from "react";
import Child from "./Child";

const Parent = () => {
	const getData = (data) => {
		console.log(data);
	};
	return <Child getData={getData}>{}</Child>;
};

export default Parent;
