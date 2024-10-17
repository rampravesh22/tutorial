import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";
import { addReview, removeReview } from "../actions/reviewActions";

const ReviewList = ({ movieId }) => {
	// const reviews = useSelector((state) => state.reviews.reviews[movieId] || []);
	const dispatch = useDispatch();

	const handleAddReview = (text) => {
		dispatch(addReview(movieId, { text }));
	};

	const handleDeleteReview = (reviewId) => {
		dispatch(removeReview(movieId, reviewId));
	};

	return (
		<div>
			<div className="text-3xl">Reviews</div>
			<ReviewForm onSubmit={handleAddReview} />
			<div />
			{/* {reviews.map((review) => (
				<ReviewItem
					key={review.id}
					review={review}
					onDelete={() => handleDeleteReview(review.id)}
				/>
			))} */}
		</div>
	);
};

export default ReviewList;
