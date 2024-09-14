import { Toaster } from "react-hot-toast";
import AddStudent from "./components/add-student/AddStudent";
import ShowStudents from "./components/show-students/ShowStudents";

function App() {
	return (
		<div className="w-[95%] mx-auto max-w-3xl border mt-3">
			<AddStudent />
			<ShowStudents />
		</div>
	);
}

export default App;
