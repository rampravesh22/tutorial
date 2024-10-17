import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import ReviewList from "./ReviewList";

const MovieDetails = () => {
	const selectedMovie = useSelector((state) => state.movies.selectedMovie);

	if (!selectedMovie) return <div>No movie selected</div>;

	return (
		<div>
			<div>{selectedMovie.title}</div>
			<div>Genre: {selectedMovie.genre}</div>
			<div>Release Date: {selectedMovie.releaseDate}</div>
			<div>Director: {selectedMovie.director}</div>
			<div>{selectedMovie.description}</div>

			<Button>Add to Watchlist</Button>
			<ReviewList movieId={selectedMovie.id} />
		</div>
	);
};

export default MovieDetails;
