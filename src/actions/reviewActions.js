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
export const editReview = (movieId, reviewId, newText) => async (dispatch) => {
	try {
		// Fetch the review by movieId
		const response = await api.get(`/reviews?movieId=${movieId}`);

		// Assuming movieId is unique and returns only one review
		const [reviewToEdit] = response.data;

		if (!reviewToEdit) {
			throw new Error(`Review with movieId ${movieId} not found.`);
		}

		// Update the text inside the nested review object
		const updatedReview = {
			...reviewToEdit,
			review: {
				...reviewToEdit.review,
				text: newText, // Update the review's text
			},
		};

		// Send PUT request to update the review by its id
		await api.put(`/reviews/${reviewToEdit.id}`, updatedReview);

		// Dispatch the updated review to Redux store
		dispatch({
			type: "EDIT_REVIEW",
			payload: {
				movieId,
				reviewId: reviewToEdit.id, // Use the actual review id
				updatedReview: updatedReview,
			},
		});
	} catch (error) {
		console.error("Failed to update review:", error);
		dispatch({
			type: "EDIT_REVIEW_ERROR",
			payload: error.message,
		});
	}
};
