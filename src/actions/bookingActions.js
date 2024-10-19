import toast from "react-hot-toast";
import api from "../utils/api";
// export const bookMovie = (movieId) => async (dispatch, getState) => {
// 	const { auth, bookings, moviesData } = getState();

// 	const isMovieBooked = bookings.bookings.some(
// 		(booking) => booking.movieId === movieId
// 	);

// 	if (isMovieBooked) {
// 		console.log("Movie already booked");
// 		return;
// 	}

// 	const toastId = toast.loading("Movie booking...");

// 	try {
// 		const response = await api.post("/bookings", {
// 			userId: auth.user.id,
// 			movieId,
// 		});
// 		// Get the booking ID from the response
// 		const bookingData = response.data;

// 		setTimeout(() => {
// 			toast.success("Booking successful.", { id: toastId });
// 			dispatch({
// 				type: "BOOK_MOVIE",
// 				payload: {
// 					id: bookingData.id, // Include the booking ID
// 					movieId,
// 					userId: auth.user.id,
// 				},
// 			});
// 		}, 400);
// 	} catch (error) {
// 		console.error("Failed to book movie:", error);
// 		toast.error("Failed to book movie");
// 	}
// };
export const bookMovie =
	(movieId, movieDetails, showDateTime) => async (dispatch, getState) => {
		const { auth, bookings } = getState();

		const isMovieBooked = bookings.bookings.some(
			(booking) =>
				booking.movieId === movieId && booking.showDateTime === showDateTime
		);

		if (isMovieBooked) {
			toast.error("You've already booked this showing");
			return;
		}

		const toastId = toast.loading("Processing your booking...");
		try {
			const formattedDateTime = showDateTime.includes("T")
				? showDateTime
				: `${showDateTime.split(" ")[0]}T${showDateTime.split(" ")[1]}`;

			const response = await api.post("/bookings", {
				userId: auth.user.id,
				movieId,
				showDateTime: formattedDateTime,
				movieDetails: {
					title: movieDetails.title,
					poster_path: movieDetails.poster,
					release_date: movieDetails.releaseDate,
					overview: movieDetails.description,
				},
			});

			const bookingData = response.data;

			setTimeout(() => {
				toast.success("Booking successful!", { id: toastId });
				dispatch({
					type: "BOOK_MOVIE",
					payload: {
						id: bookingData.id || Date.now(),
						movieId,
						userId: auth.user.id,
						movieDetails: bookingData.movieDetails,
						showDateTime: formattedDateTime,
					},
				});
			}, 400);
		} catch (error) {
			toast.error("Booking failed. Please try again.", { id: toastId });
			console.error("Failed to book movie:", error);
		}
	};

export const cancelBooking =
	(movieId, showDateTime) => async (dispatch, getState) => {
		const { bookings } = getState();

		const booking = bookings.bookings.find(
			(booking) =>
				booking.movieId === movieId && booking.showDateTime === showDateTime
		);

		if (!booking || !booking.id) {
			toast.error("Booking not found");
			return;
		}

		const toastId = toast.loading("Canceling booking...");

		try {
			await api.delete(`/bookings/${booking.id}`);

			setTimeout(() => {
				toast.success("Booking canceled successfully", { id: toastId });
				dispatch({
					type: "CANCEL_BOOKING",
					payload: {
						movieId: booking.movieId,
						showDateTime: booking.showDateTime,
					},
				});
			}, 400);
		} catch (error) {
			console.error("Failed to cancel booking:", error);
			toast.error("Failed to cancel booking", { id: toastId });
		}
	};
export const fetchBookings = () => async (dispatch, getState) => {
	const { auth } = getState();

	if (!auth.user) return;

	dispatch({ type: "FETCH_BOOKINGS_START" });

	try {
		const response = await api.get(`/bookings?userId=${auth.user.id}`);
		dispatch({
			type: "FETCH_BOOKINGS_SUCCESS",
			payload: response.data,
		});
	} catch (error) {
		console.error("Failed to fetch bookings:", error);
		dispatch({
			type: "FETCH_BOOKINGS_ERROR",
			payload: error.message,
		});
	}
};
