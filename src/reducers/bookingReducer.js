const initialState = {
	bookings: [],
};

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
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
					},
				],
			};

		case "CANCEL_BOOKING":
			return {
				...state,
				bookings: state.bookings.filter(
					(booking) => booking.movieId !== action.payload
				),
			};
		case "SET_BOOKINGS":
			return {
				...state,
				bookings: action.payload,
			};
		default:
			return state;
	}
};

export default bookingReducer;
