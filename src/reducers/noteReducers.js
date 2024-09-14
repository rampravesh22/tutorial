// actions
const ADD_STUDENT = "ADD_STUDENT";
const LOAD_STUDENT = "LOAD_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const GET_STUDENTS = "GET_STUDENTS";
const GET_STUDENT = "GET_STUDENT";
const SEARCH_STUDENT = "SEARCH_STUDENT";

// action creator
const loadStudent = (data) => {
	return { type: LOAD_STUDENT, payload: { students: data } };
};

const studentReducer = (state, action) => {
	switch (action.type) {
		case LOAD_STUDENT: {
			return state;
		}
		case ADD_STUDENT:
			break;
		case REMOVE_STUDENT:
			break;
		case GET_STUDENTS:
			break;
		case SEARCH_STUDENT:
			break;
		case GET_STUDENT:
			break;
		default:
			return state;
	}
};
export default studentReducer;
export { loadStudent };
