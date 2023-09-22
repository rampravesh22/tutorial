import AddStudents from "./components/AddStudents";
import ContextProvider from "./context/ContextProvider";
import ShowStudent from "./components/ShowStudent";
function App() {
	return (
		<>
			<ContextProvider>
				<div className="w-[70%] bg-gray-200 h-screen m-auto">
					<AddStudents />
					<ShowStudent />
				</div>
			</ContextProvider>
		</>
	);
}

export default App;
