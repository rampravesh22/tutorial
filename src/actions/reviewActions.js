import api from "../utils/api";

export const addReview = (movieId, review) => async (dispatch, getState) => {
	const { auth } = getState();
	try {
		const response = await api.post("/reviews", {
			userId: auth.user.id,
			movieId,
			review,
		});
		dispatch({
			type: "ADD_REVIEW",
			payload: { movieId, review: response.data },
		});
	} catch (error) {
		console.error("Failed to add review:", error);
	}
};

export const removeReview = (movieId, reviewId) => async (dispatch) => {
	try {
		await api.delete(`/reviews/${reviewId}`);
		dispatch({ type: "REMOVE_REVIEW", payload: { movieId, reviewId } });
	} catch (error) {
		console.error("Failed to remove review:", error);
	}
};
