import React from "react";
import { Button } from "@nextui-org/react";

const ReviewItem = ({ review, onDelete }) => (
	<div>
		<div>
			<div>{review.text}</div>
			<Button color="danger" onClick={() => onDelete(review.id)}>
				Delete
			</Button>
		</div>
	</div>
);

export default ReviewItem;
