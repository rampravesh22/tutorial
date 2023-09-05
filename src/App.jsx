import { useContext } from "react";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Success from "./components/Success";
import GlobalContext from "./contenxt/context";
function App() {
	const { success, deleteNote } = useContext(GlobalContext);
	return (
		<>
			<Home />
			{success ? (
				<Success
					bg={"bg-green-600"}
					message={"Notes added successfully"}
				/>
			) : null}
			{deleteNote ? (
				<Success bg="bg-red-600" message={"Note delete successfully"} />
			) : null}
			<Notes />
		</>
	);
}

export default App;
