import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "@nextui-org/react";
import { fetchBookings, cancelBooking } from "../actions/bookingActions";
import { LuCalendar, LuClock, LuX } from "react-icons/lu";
import { format } from "date-fns";

const BookedMovies = () => {
	const dispatch = useDispatch();
	const bookings = useSelector((state) => state.bookings.bookings);
	const isLoading = useSelector((state) => state.bookings.isLoading);

	useEffect(() => {
		dispatch(fetchBookings());
	}, [dispatch]);

	const handleCancelBooking = (movieId, showDateTime) => {
		dispatch(cancelBooking(movieId, showDateTime));
	};

	const formatDateTime = (dateTimeStr) => {
		try {
			const date = new Date(dateTimeStr);
			return {
				date: format(date, "dd MMM yyyy"),
				time: format(date, "hh:mm a"),
			};
		} catch (error) {
			console.error("Date parsing error:", error);
			return { date: "Invalid Date", time: "Invalid Time" };
		}
	};

	if (isLoading) {
		return <div className="p-10">Loading your bookings...</div>;
	}

	if (!bookings || bookings.length === 0) {
		return (
			<div className="p-10 text-center">
				<h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
				<p className="text-gray-600">You haven&apos;t booked any movies yet.</p>
			</div>
		);
	}

	return (
		<div className="p-10">
			<h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
				{bookings.map((booking) => {
					const { date, time } = formatDateTime(booking.showDateTime);
					return (
						<Card
							key={`${booking.movieId}-${booking.showDateTime}`}
							className="bg-white shadow-lg  rounded-lg overflow-hidden"
						>
							<div className="relative h-[300px]">
								<img
									src={booking.movieDetails?.poster_path}
									alt={booking.movieDetails?.title}
									className="w-full h-full object-cover"
									onError={(e) => {
										e.target.src = "/default-movie-poster.jpg";
										console.log(
											"Failed to load poster:",
											booking.movieDetails?.poster_path
										);
									}}
								/>
							</div>

							<div className="p-4">
								<h3 className="text-xl font-semibold mb-2">
									{booking.movieDetails?.title}
								</h3>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<div className="flex items-center gap-2 text-gray-600 ">
										<LuCalendar className="text-primary" />
										<span>{date}</span>
									</div>
									<div className="size-1 bg-gray-500 rounded-full"></div>
									<div className="flex items-center gap-2 text-gray-600">
										<LuClock className="text-primary" />
										<span>{time}</span>
									</div>
								</div>
							</div>
							<Button
								onClick={() =>
									handleCancelBooking(booking.movieId, booking.showDateTime)
								}
								color="danger"
							>
								Cancel <LuX />
							</Button>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default BookedMovies;
