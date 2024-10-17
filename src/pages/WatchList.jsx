import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWatchlist } from "../actions/watchlistActions";
import WatchlistCard from "../components/WatchlistCard";

const Watchlist = () => {
	const watchlist = useSelector((state) => state.watchlist.watchlist);
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.user.id);

	useEffect(() => {
		dispatch(fetchWatchlist());
	}, []);

	return (
		<div>
			<div className="text-center my-4 text-3xl">My Watchlist</div>
			<div className="p-6 grid-cols-1 sm:grid-cols-2 justify-items-center gap-2 md:grid-cols-4 lg:grid-cols-7 grid">
				{Array.from(new Set(watchlist)).map((movie, index) => {
					return (
						<div key={index}>
							<WatchlistCard movie={movie.movie} id={movie.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Watchlist;
