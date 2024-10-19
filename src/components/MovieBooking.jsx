import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	bookMovie,
	cancelBooking,
	fetchBookings,
} from "../actions/bookingActions";
import { Button } from "@nextui-org/react";
const MovieBooking = ({ movieId, movieDetails }) => {
	const dispatch = useDispatch();
	const { bookings } = useSelector((state) => state.bookings);

	useEffect(() => {
		dispatch(fetchBookings());
	}, [dispatch]);

	const isBooked = bookings.some((booking) => booking.movieId === movieId);

	const handleBooking = () => {
		if (isBooked) {
			dispatch(cancelBooking(movieId));
		} else {
			dispatch(bookMovie(movieId, movieDetails));
		}
	};

	return (
		<div>
			<Button
				auto
				color={isBooked ? "danger" : "primary"}
				onClick={handleBooking}
				size="lg"
				className="rounded-full"
			>
				{isBooked ? "Cancel Booking" : "Book Movie"}
			</Button>
		</div>
	);
};
export default MovieBooking;
