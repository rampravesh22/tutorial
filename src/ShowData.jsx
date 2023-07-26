import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ShowData = ({ data }) => {
	console.log(data);
	return (
		<div className="w-[80%] border-2 self-center h-[90%] overflow-scroll border-green-600 p-4 text-3xl bg-black text-white">
			<ReactMarkdown remarkPlugins={[remarkGfm]} children={data}>
				{data}
			</ReactMarkdown>
		</div>
	);
};

export default ShowData;
