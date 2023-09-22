import React, { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

const ShowStudent = () => {
	const { students } = useContext(GlobalContext);
	return (
		<div className="mt-10 border-collapse flex justify-center">
			<table className="w-full p-4 max-w-[400px] border-2 rounded-md border-black">
				<thead className=" p-10 bg-gray-800 rounded-md text-white border-2 border-black">
					<tr className="p-4 border-2 border-black rounded-md">
						<th className="text-left p-2">No.</th>
						<th className="text-left p-2">Name</th>
					</tr>
				</thead>
				<tbody className="w-full border-2">
					{students.map((student, index) => {
						return (
							<tr
								key={index}
								className="even:bg-white odd:bg-emerald-400 border"
							>
								<td className="border p-2">{index + 1}</td>
								<td className="border p-2">{student.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ShowStudent;
