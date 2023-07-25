import ACTIONS from "./actions";

const newNote = ({ title, desc }) => {
	return { id: Date.now(), title: title, desc: desc, complete: false };
};

const reducer = (notes, action) => {
	switch (action.type) {
		case ACTIONS.ADD_NOTE:
			return [...notes, newNote(action.payload)];

		case ACTIONS.DELETE_NOTE:
			return notes.filter((note) => {
				return note.id !== action.payload.id;
			});

		case ACTIONS.UPDATE_NOTE:
			return notes.map((note) => {
				if (note.id === action.payload.id) {
					return {
						...note,
						title: action.payload.title,
						desc: action.payload.desc,
					};
				}
				return note;
			});

		case ACTIONS.TOGGLE_COMPLETE:
			return notes.map((note) => {
				if (note.id === action.payload.id) {
					return { ...note, complete: !note.complete };
				}
				return note;
			});
		default:
			return notes;
	}
};

export default reducer;
