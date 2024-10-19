const initialState = {
	bookings: [],
	isLoading: false,
	error: null,
};

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_BOOKINGS_START":
			return {
				...state,
				isLoading: true,
				error: null,
			};

		case "FETCH_BOOKINGS_SUCCESS":
			return {
				...state,
				isLoading: false,
				bookings: Array.isArray(action.payload) ? action.payload : [],
				error: null,
			};

		case "FETCH_BOOKINGS_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case "BOOK_MOVIE":
			return {
				...state,
				bookings: [
					...state.bookings,
					{
						id: action.payload.id,
						movieId: action.payload.movieId,
						userId: action.payload.userId,
						movieDetails: action.payload.movieDetails,
						showDateTime: action.payload.showDateTime,
					},
				],
			};

		case "CANCEL_BOOKING":
			return {
				...state,
				bookings: state.bookings.filter(
					(booking) =>
						!(
							booking.movieId === action.payload.movieId &&
							booking.showDateTime === action.payload.showDateTime
						)
				),
			};

		default:
			return state;
	}
};

export default bookingReducer;
