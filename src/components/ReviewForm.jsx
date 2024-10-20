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
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Write your review..."
				className="text-black border rounded-md"
			/>
			<Spacer y={1} />
			<Button type="submit" size="md" color="secondary">
				Submit Review
			</Button>
		</form>
	);
};

export default ReviewForm;
