import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import {
	addReview,
	editReview,
	fetchReviews,
	removeReview,
} from "../actions/reviewActions";

// Create a memoized selector
const selectReviewsForMovie = createSelector(
	[(state) => state.reviews.reviews, (_, movieId) => movieId],
	(reviews, movieId) => reviews[movieId] || []
);

const ReviewList = ({ movieId }) => {
	const dispatch = useDispatch();

	// Use the memoized selector
	const reviews = useSelector((state) => selectReviewsForMovie(state, movieId));

	useEffect(() => {
		dispatch(fetchReviews(movieId));
	}, [dispatch, movieId]);

	const handleAddReview = (text) => {
		dispatch(addReview(movieId, { text }));
	};

	const handleDeleteReview = (reviewId) => {
		dispatch(removeReview(movieId, reviewId));
	};

	const handleEditReview = (reviewId, text) => {
		dispatch(editReview(movieId, reviewId, text));
	};

	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold">Reviews</h2>
			<ReviewForm onSubmit={handleAddReview} />
			<div className="space-y-2">
				{reviews?.map((review) => (
					<ReviewItem
						key={review.id}
						review={review}
						onDelete={handleDeleteReview}
						onEdit={handleEditReview}
					/>
				))}
			</div>
		</div>
	);
};

export default ReviewList;
