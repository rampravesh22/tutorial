// MovieBooking Component
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { format, addDays } from "date-fns";
import toast from "react-hot-toast";
import { bookMovie, cancelBooking } from "../actions/bookingActions";

const MovieBooking = ({ movieId, movieDetails }) => {
	const dispatch = useDispatch();
	const { bookings } = useSelector((state) => state.bookings);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");

	// Generate next 7 days for date selection
	const dateOptions = Array.from({ length: 7 }, (_, index) => {
		const date = addDays(new Date(), index);
		const formattedDate = format(date, "yyyy-MM-dd");
		const displayDate = format(date, "EEEE, MMMM d, yyyy");
		return {
			value: formattedDate,
			label: displayDate,
		};
	});

	// Sample show times
	const timeOptions = [
		{ value: "10:00", label: "10:00 AM" },
		{ value: "13:00", label: "1:00 PM" },
		{ value: "16:00", label: "4:00 PM" },
		{ value: "19:00", label: "7:00 PM" },
		{ value: "22:00", label: "10:00 PM" },
	];

	const isBooked = (dateTime) => {
		return bookings.some(
			(booking) =>
				booking.movieId === movieId && booking.showDateTime === dateTime
		);
	};

	const handleBooking = () => {
		if (!selectedDate || !selectedTime) {
			toast.error("Please select both date and time");
			return;
		}

		const showDateTime = `${selectedDate}T${selectedTime}`;

		if (isBooked(showDateTime)) {
			dispatch(cancelBooking(movieId, showDateTime));
		} else {
			dispatch(bookMovie(movieId, movieDetails, showDateTime));
		}
	};

	return (
		<div className="space-y-4 p-4 border rounded-lg bg-white shadow-sm">
			<h3 className="text-lg font-semibold mb-4">Book Show Time</h3>

			<div className="grid gap-4">
				<Select
					label="Select Date"
					placeholder="Choose a date"
					value={selectedDate}
					onChange={(e) => setSelectedDate(e.target.value)}
					className="w-full"
				>
					{dateOptions.map((date) => (
						<SelectItem key={date.value} value={date.value}>
							{date.label}
						</SelectItem>
					))}
				</Select>

				<Select
					label="Select Time"
					placeholder="Choose a time"
					value={selectedTime}
					onChange={(e) => setSelectedTime(e.target.value)}
					className="w-full"
				>
					{timeOptions.map((time) => (
						<SelectItem key={time.value} value={time.value}>
							{time.label}
						</SelectItem>
					))}
				</Select>

				<Button
					auto
					color={
						isBooked(`${selectedDate}T${selectedTime}`) ? "danger" : "primary"
					}
					onClick={handleBooking}
					size="lg"
					className="w-full"
					disabled={!selectedDate || !selectedTime}
				>
					{isBooked(`${selectedDate}T${selectedTime}`)
						? "Cancel Booking"
						: "Book Now"}
				</Button>
			</div>
		</div>
	);
};

export default MovieBooking;
