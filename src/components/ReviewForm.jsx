import React, { useState } from "react";
import { Textarea, Button, Spacer } from "@nextui-org/react";

const ReviewForm = ({ onSubmit }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(text);
		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Textarea
				fullWidth
				minRows={4}
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Write your review..."
			/>
			<Spacer y={1} />
			<Button type="submit" color="secondary">
				Submit Review
			</Button>
		</form>
	);
};

export default ReviewForm;
