import { useContext } from "react";
import { StudentGlobalContext } from "./StudentContext";

const useStudentGlobalContext = () => {
	return useContext(StudentGlobalContext);
};

export default useStudentGlobalContext;
