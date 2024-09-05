import ACTIONS from "./actions";

const addTodo = (value) => {
	return { type: ACTIONS.ADD_TODO, payload: { name: value } };
};

const loadTodo = () => {
	return { type: ACTIONS.LOAD_TODOS };
};

const deleteTodo = (id) => {
	return { type: ACTIONS.DELETE_TODO, payload: { id: id } };
};

const markComplete = (id) => {
	return { type: ACTIONS.MARK_COMPLETE, payload: { id: id } };
};

const toggleTodo = (id) => {
	return { type: ACTIONS.TOGGLE_TODO, payload: { id: id } };
};

export { addTodo, loadTodo, deleteTodo, markComplete, toggleTodo };
