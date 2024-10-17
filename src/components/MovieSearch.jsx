import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../actions/searchMovieActions";
import { addToWatchlist } from "../actions/watchlistActions";

const MovieSearch = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const { searchedMovies, loading, error } = useSelector(
		(state) => state.searchMovie
	);

	const handleSearch = () => {};

	return (
		<div className="flex m-4 mx-10 border rounded-full border-slate-400 py-1 pl-6 pr-2">
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search movies..."
				className="w-full outline-none "
			/>
			<Button auto onClick={handleSearch} className="rounded-full">
				Search
			</Button>

			<div className="grid grid-cols-3">
				{searchedMovies.map((movie) => (
					<div key={movie.id}>
						<MovieCard
							movie={movie}
							onSelect={() =>
								dispatch({ type: "SELECT_MOVIE", payload: movie })
							}
							onAddToWatchlist={() => dispatch(addToWatchlist(movie))}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieSearch;
