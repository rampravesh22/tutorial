import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "@nextui-org/react";
import { fetchBookings, cancelBooking } from "../actions/bookingActions";
import { LuCalendar, LuClock, LuX, LuTicket, LuLoader } from "react-icons/lu";
import { format } from "date-fns";
import { motion } from "framer-motion";

const LoadingSkeleton = () => (
	<div className="rounded-xl overflow-hidden bg-white shadow-md">
		<div className="h-[300px] bg-gray-200 animate-pulse" />
		<div className="p-4 space-y-3">
			<div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
			<div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
			<div className="h-10 bg-gray-200 rounded animate-pulse mt-4" />
		</div>
	</div>
);

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
		return (
			<div className="p-10 bg-gray-50">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="flex items-center gap-3 mb-8"
				>
					<h2 className="text-3xl font-bold text-gray-800">My Bookings</h2>
					<LuLoader className="animate-spin text-purple-500" />
				</motion.div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{[...Array(8)].map((_, i) => (
						<LoadingSkeleton key={i} />
					))}
				</div>
			</div>
		);
	}

	if (!bookings || bookings.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="min-h-screen bg-gray-50 p-10 flex items-center justify-center"
			>
				<div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", bounce: 0.5 }}
					>
						<LuTicket className="w-20 h-20 mx-auto text-purple-500 mb-6" />
					</motion.div>
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						No Bookings Found
					</h2>
					<p className="text-gray-600 mb-8">
						Ready to watch something amazing? Browse our collection and book
						your next movie experience!
					</p>
					<Button
						size="lg"
						className="bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 font-semibold"
						onClick={() => (window.location.href = "/")}
					>
						Explore Movies
					</Button>
				</div>
			</motion.div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 p-10">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex items-center justify-between mb-8"
			>
				<div className="flex items-center gap-4">
					<h2 className="text-3xl font-bold text-gray-800">My Bookings</h2>
					<span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
						{bookings.length} {bookings.length === 1 ? "Movie" : "Movies"}
					</span>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
			>
				{bookings.map((booking, index) => {
					const { date, time } = formatDateTime(booking.showDateTime);
					return (
						<motion.div
							key={`${booking.movieId}-${booking.showDateTime}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="h-full"
						>
							<Card className="bg-white overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300">
								<div className="relative h-[300px] group overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
									<img
										src={booking.movieDetails?.poster_path}
										alt={booking.movieDetails?.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										onError={(e) => {
											e.target.src = "/default-movie-poster.jpg";
										}}
									/>
								</div>

								<div className="p-5 space-y-4">
									<h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
										{booking.movieDetails?.title}
									</h3>

									<div className="space-y-3">
										<div className="flex items-center gap-2 text-gray-600">
											<LuCalendar className="text-purple-500" />
											<span>{date}</span>
										</div>
										<div className="flex items-center gap-2 text-gray-600">
											<LuClock className="text-purple-500" />
											<span>{time}</span>
										</div>
									</div>

									<Button
										onClick={() =>
											handleCancelBooking(booking.movieId, booking.showDateTime)
										}
										className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 group"
									>
										<span className="flex items-center justify-center gap-2">
											Cancel Booking
											<LuX className="transition-transform group-hover:rotate-90" />
										</span>
									</Button>
								</div>
							</Card>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default BookedMovies;
