import toast from "react-hot-toast";
import api from "../utils/api";

export const addReview = (movieId, review) => async (dispatch, getState) => {
	const { auth } = getState();
	const toastId = toast.loading("Adding review...");
	try {
		const response = await api.post("/reviews", {
			userId: auth.user.id,
			movieId,
			review,
		});

		setTimeout(() => {
			dispatch({
				type: "ADD_REVIEW",
				payload: { movieId, review: response.data },
			});
			toast.success("Review added successfully", { id: toastId });
		}, 400);
	} catch (error) {
		console.error("Failed to add review:", error);
	}
};

export const removeReview = (movieId, reviewId) => async (dispatch) => {
	const toastId = toast.loading("Deleting review...");
	try {
		await api.delete(`/reviews/${reviewId}`);
		setTimeout(() => {
			dispatch({ type: "REMOVE_REVIEW", payload: { movieId, reviewId } });
			toast.success("Review deleted successfully", { id: toastId });
		}, 400);
	} catch (error) {
		setTimeout(() => {
			toast.error("Failed to remove review", { id: toastId });
		}, 400);
		console.error("Failed to remove review:", error);
	}
};

export const fetchReviews = (movieId) => async (dispatch) => {
	try {
		const response = await api.get(`/reviews?movieId=${movieId}`);
		dispatch({
			type: "FETCH_REVIEWS",
			payload: { movieId, reviews: response.data },
		});
	} catch (error) {
		console.error("Failed to fetch reviews:", error);
	}
};
