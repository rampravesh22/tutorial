import React from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "./App";
import StudentTable from "./StudentTable";

const Home = () => {
	const { students } = useContext(GlobalContext);
	return (
		<>
			<div className="">
				<table className="table-auto bg-slate-600 w-3/4 m-auto text-white border-collapse border-spacing-2 border border-slate-500">
					<caption className="caption-top border-4 text-black py-1  uppercase font-bold">
						Students Data
					</caption>
					<thead className="bg-slate-700 ">
						<tr className="">
							<th className="border py-2 px-2 text-start border-slate-600 ...">
								Id
							</th>
							<th className="border border-slate-600 py-2 px-2 text-start ...">
								Name
							</th>
							<th className="border border-slate-600 py-2 px-2 text-start ...">
								Age
							</th>
							<th className="border border-slate-600 py-2 px-2 text-start ...">
								Roll Number
							</th>
							<th className="border border-slate-600 py-2 px-2 text-start ...">
								Edit
							</th>
							<th className="border border-slate-600 py-2 px-2 text-start ...">
								Delete
							</th>
						</tr>
					</thead>
					<tbody className="relative">
						{students.map((student, ind) => {
							return (
								<StudentTable
									student={student}
									key={ind}
									sid={ind + 1}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Home;
