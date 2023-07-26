import React, { useState } from "react";
import ShowData from "./ShowData";
const Editor = ({ getData }) => {
	const [data, setData] = useState("");

	return (
		<>
			<div className="w-[80%] border-2 h-[90%] self-center border-red-600">
				<form action="" className="h-full">
					<textarea
						name="data"
						id="data"
						cols=""
						value={data}
						rows="10"
						className="w-[100%] shadow-lg h-[100%] focus:outline-blue-500 p-4 text-3xl "
						onChange={(e) => setData(e.target.value)}
					></textarea>
				</form>
			</div>
			<ShowData data={data} />
		</>
	);
};

export default Editor;
