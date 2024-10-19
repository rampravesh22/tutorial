import toast from "react-hot-toast";
import api from "../utils/api";
export const bookMovie = (movieId) => async (dispatch, getState) => {
	const { auth, bookings, moviesData } = getState();

	const isMovieBooked = bookings.bookings.some(
		(booking) => booking.movieId === movieId
	);

	if (isMovieBooked) {
		console.log("Movie already booked");
		return;
	}

	const toastId = toast.loading("Movie booking...");

	try {
		const response = await api.post("/bookings", {
			userId: auth.user.id,
			movieId,
		});
		// Get the booking ID from the response
		const bookingData = response.data;

		setTimeout(() => {
			toast.success("Booking successful.", { id: toastId });
			dispatch({
				type: "BOOK_MOVIE",
				payload: {
					id: bookingData.id, // Include the booking ID
					movieId,
					userId: auth.user.id,
				},
			});
		}, 400);
	} catch (error) {
		console.error("Failed to book movie:", error);
		toast.error("Failed to book movie");
	}
};
export const cancelBooking = (movieId) => async (dispatch, getState) => {
	const { bookings } = getState();

	const booking = bookings.bookings.find(
		(booking) => booking.movieId === movieId
	);

	if (!booking || !booking.id) {
		toast.error("Booking not found or invalid booking ID");
		return;
	}

	const toastId = toast.loading("Canceling booking...");

	try {
		await api.delete(`/bookings/${booking.id}`);

		setTimeout(() => {
			toast.success("Booking canceled.", { id: toastId });
			dispatch({ type: "CANCEL_BOOKING", payload: booking.movieId });
		}, 400);
	} catch (error) {
		console.error("Failed to cancel booking:", error);
		toast.error(error.response?.data?.message || "Failed to cancel booking");
	}
};
export const fetchBookings = () => async (dispatch, getState) => {
	const { auth } = getState();

	if (!auth.user) return;

	try {
		const response = await api.get(`/bookings?userId=${auth.user.id}`);
		const bookings = response.data;
		dispatch({ type: "SET_BOOKINGS", payload: bookings });
	} catch (error) {
		console.error("Failed to fetch bookings:", error);
	}
};
