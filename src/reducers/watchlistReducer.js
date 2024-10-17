const initialState = {
	watchlist: [],
};

const watchlistReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_WATCHLIST":
			return { ...state, watchlist: [...state.watchlist, action.payload] };
		case "REMOVE_FROM_WATCHLIST":
			return {
				...state,
				watchlist: state.watchlist.filter(
					(movie) => movie.id !== action.payload
				),
			};

		case "SET_WATCHLIST":
			return {
				...state,
				watchlist: action.payload,
			};
		default:
			return state;
	}
};

export default watchlistReducer;
