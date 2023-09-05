import { createContext, useEffect, useState } from "react";
import { getStorage, setStorage } from "../localstorage/storage";

const GlobalContext = createContext();
export const ContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [deleteNote, setDeleteNote] = useState(false);
	const [disable, setDisable] = useState(false);
	useEffect(() => {
		if (!getStorage("notes")) {
			setStorage([]);
			return;
		} else {
			const getNotes = getStorage("notes");
			setNotes(getNotes);
		}
	}, []);
	const contextValue = {
		notes,
		setNotes,
		loading,
		setLoading,
		success,
		setSuccess,
		deleteNote,
		setDeleteNote,
		disable,
		setDisable,
	};
	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
