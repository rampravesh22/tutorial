import { ADD_TODO, FETCH_ALL_TODO } from "../action-types/todoActionTypes";

const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_TODO:
			return { ...state, todos: action.payload.todos };
		case ADD_TODO:
			return { ...state, todos: [...state.todos] };

		default:
			return state;
	}
};

export default todoReducer;
