import {
	ADD_TODO,
	DELETE_TODO,
	FETCH_ALL_TODO,
	UPDATE_TODO,
} from "../action-types/todoActionTypes";

const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_TODO:
			return { ...state, todos: action.payload.todos };
		case ADD_TODO:
			return { ...state, todos: [action.payload.todo, ...state.todos] };
		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo._id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo._id !== action.payload.id),
			};
		default:
			return state;
	}
};

export default todoReducer;
