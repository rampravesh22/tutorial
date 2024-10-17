import api from "../utils/api";

export const addToWatchlist = (movie) => async (dispatch, getState) => {
	const { auth, watchlist } = getState();

	// Check if the movie is already in the watchlist
	const isMovieInWatchlist = watchlist.watchlist.some(
		(item) => item.movie.id === movie.id
	);

	if (isMovieInWatchlist) {
		console.log("Movie already in watchlist");
		return; // Exit if movie is already in watchlist
	}
	try {
		await api.post("/watchlist", { userId: auth.user.id, movie });
		dispatch({
			type: "ADD_TO_WATCHLIST",
			payload: { userId: auth.user.id, movie },
		});
	} catch (error) {
		console.error("Failed to add to watchlist:", error);
	}
};

export const removeFromWatchlist = (movieId) => async (dispatch, getState) => {
	console.log(movieId);

	try {
		const res = await api.delete(`/watchlist/${movieId}`);
		dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movieId });
	} catch (error) {
		console.error("Failed to remove from watchlist:", error);
	}
};

export const fetchWatchlist = () => async (dispatch, getState) => {
	const { auth } = getState();

	if (!auth.user) return; // Check if the user is authenticated

	try {
		const response = await api.get(`/watchlist`);
		const watchlist = response.data;

		if (watchlist.length) {
			dispatch({ type: "SET_WATCHLIST", payload: watchlist });
		} else {
			// Handle case where there is no watchlist yet
			dispatch({ type: "SET_WATCHLIST", payload: [] });
		}
	} catch (error) {
		console.error("Failed to fetch watchlist:", error);
	}
};
