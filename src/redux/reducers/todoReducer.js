import { ADD_TODO } from "../action-types/todoActionTypes";

const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todos: [...state.todos] };

		default:
			return state;
	}
};

export default todoReducer;
