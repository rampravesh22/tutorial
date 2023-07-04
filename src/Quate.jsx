import React from "react";

const Quate = ({ author, content }) => {
	console.log(author);
	console.log(content);

	return (
		<div className="bg-white w-[40%] min-h-[400px] rounded-lg p-4 relative border-pink-300 border-2  shadow-black shadow">
			<div className="flex bg-green-500 overflow-scroll rounded-lg h-[300px] justify-center items-center p-20 font-mono text-xl">
				<div className="pt-4">
					<p>{content}</p>
				</div>
			</div>
			<div className="absolute bottom-5 text-white bg-gray-500 p-3 rounded-lg">
				~{author}
			</div>
			<div className="absolute right-4 bottom-5 bg-blue-700 text-white rounded-lg hover:bg-blue-600 cursor-pointer ">
				<button
					className=" px-6 py-2"
					onClick={() => window.location.reload()}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Quate;
