import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";
import {
	addReview,
	fetchReviews,
	removeReview,
} from "../actions/reviewActions";

const ReviewList = ({ movieId }) => {
	const dispatch = useDispatch();

	const reviews = useSelector((state) => state.reviews.reviews[movieId]);

	const handleAddReview = (text) => {
		dispatch(addReview(movieId, { text }));
	};

	const handleDeleteReview = (reviewId) => {
		dispatch(removeReview(movieId, reviewId));
	};

	useEffect(() => {
		const fetchReviewsFunc = async () => {
			dispatch(fetchReviews(movieId));
		};
		fetchReviewsFunc();
	}, []);

	return (
		<div>
			<div className="text-3xl">Reviews</div>
			<ReviewForm onSubmit={handleAddReview} />
			<div>
				{reviews &&
					reviews.map((review) => (
						<ReviewItem
							key={review.id}
							review={review}
							onDelete={() => handleDeleteReview(review.id)}
						/>
					))}
			</div>
		</div>
	);
};

export default ReviewList;
