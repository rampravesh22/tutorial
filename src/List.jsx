import React, { useState } from "react";

const List = ({ type, filterProj }) => {
	const [active, setActive] = useState(false);
	const filterP = () => {
		filterProj(type);
		setActive(type);
	};
	return (
		<li
			onClick={filterP}
			className={`capitalize ${
				"" ? "bg-white" : ""
			} hover:bg-white px-12 box-border transition-all cursor-pointer hover:text-black py-2`}
		>
			{type}
		</li>
	);
};

export default List;
