import React from "react";
import useStudentGlobalContext from "../../context/useStudentGlobalContext";

const ShowStudents = () => {
	const { state } = useStudentGlobalContext();
	return (
		<div>
			{state.students.length &&
				state.map((student, index) => {
					return <div key={index}></div>;
				})}
		</div>
	);
};

export default ShowStudents;
