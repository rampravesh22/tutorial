import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, cancelBooking } from "../actions/bookingActions";
import { Card, Button } from "@nextui-org/react";

const BookedMovies = () => {
	const dispatch = useDispatch();
	const { bookings } = useSelector((state) => state.bookings);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			dispatch(fetchBookings());
		}
	}, [dispatch, user]);

	const handleCancelBooking = (movieId) => {
		dispatch(cancelBooking(movieId));
	};

	if (!bookings.length) {
		return (
			<div className="flex justify-center items-center min-h-[60vh]">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-4">No Booked Movies</h2>
					<p className="text-gray-600">
						You haven&apos;t booked any movies yet.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Your Booked Movies</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{bookings.map((booking) => (
					<Card key={booking.id} className="overflow-hidden">
						<div className="relative">
							<img
								src={`https://image.tmdb.org/t/p/w500${booking.movieDetails.poster_path}`}
								alt={booking.movieDetails.title}
								className="w-full h-[400px] object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
								<h3 className="text-white text-xl font-bold">
									{booking.movieDetails.title}
								</h3>
								<p className="text-white text-sm">
									Release Date: {booking.movieDetails.release_date}
								</p>
							</div>
						</div>
						<div className="p-4">
							<p className="text-gray-600 line-clamp-3 mb-4">
								{booking.movieDetails.overview}
							</p>
							<Button
								color="danger"
								onClick={() => handleCancelBooking(booking.movieId)}
								className="w-full"
							>
								Cancel Booking
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default BookedMovies;
