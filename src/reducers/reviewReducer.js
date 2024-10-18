const initialState = {
	reviews: {},
};

const reviewReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_REVIEW":
			return {
				...state,
				reviews: {
					...state.reviews,
					[action.payload.movieId]: [
						...(state.reviews[action.payload.movieId] || []),
						action.payload.review,
					],
				},
			};
		case "REMOVE_REVIEW":
			if (!state.reviews[action.payload.movieId]) {
				return state;
			}
			return {
				...state,
				reviews: {
					...state.reviews,
					[action.payload.movieId]: state.reviews[
						action.payload.movieId
					].filter((review) => review.id !== action.payload.reviewId),
				},
			};
		case "FETCH_REVIEWS":
			return {
				...state,
				reviews: {
					...state.reviews,
					[action.payload.movieId]: action.payload.reviews,
				},
			};
		default:
			return state;
	}
};

export default reviewReducer;
