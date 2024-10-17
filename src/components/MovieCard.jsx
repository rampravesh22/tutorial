import React from "react";
import { Card, Button } from "@nextui-org/react";

const MovieCard = ({ movie, onSelect, onAddToWatchlist }) => (
	<Card>
		<Card.Body>
			<Card.Image src={movie.poster} alt={movie.title} />
			<h4>{movie.title}</h4>
			<p>{movie.genre}</p>
			<div className="flex justify-center">
				<Button auto onClick={() => onSelect(movie)}>
					View Details
				</Button>
				<Button auto onClick={() => onAddToWatchlist(movie)}>
					Add to Watchlist
				</Button>
			</div>
		</Card.Body>
	</Card>
);

export default MovieCard;
