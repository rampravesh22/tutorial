import React from "react";
import { Button } from "@nextui-org/react";
import { LuTrash2 } from "react-icons/lu";

const ReviewItem = ({ review, onDelete }) => {
	return (
		<div className="border items-center group overflow-hidden flex justify-between my-2 px-2 rounded-lg">
			<div className="text-white text-sm first-letter:uppercase">
				{review.review.text}
			</div>{" "}
			{/* Make sure 'text' exists in the review object */}
			<Button
				className="translate-x-[150%] group-hover:translate-x-0 transition-all duration-300"
				color="danger"
				size="sm"
				onClick={() => onDelete(review.id)}
			>
				Delete
				<LuTrash2 />
			</Button>
		</div>
	);
};

export default ReviewItem;
