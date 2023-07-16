import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import NoteDetails from "./pages/NoteDetails";
import NoteEdit from "./pages/NoteEdit";
function App() {
	return (
		<>
			<BrowserRouter>
				<Nav></Nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="addnote" element={<AddNote />} />
					<Route path="notedetail/:id" element={<NoteDetails />} />
					<Route path="noteedit/:id" element={<NoteEdit />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
