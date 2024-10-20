import React, { useState, useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button, Input, Textarea } from "@nextui-org/react";

const ReviewItem = ({ review, onDelete, onEdit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(review.review.text || "");

	useEffect(() => {
		setEditText(review.review.text || "");
	}, [review.text]);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		if (!editText.trim()) return;
		onEdit(review.id, editText);
		setIsEditing(false);
	};

	const handleCancelClick = () => {
		setEditText(review.text || "");
		setIsEditing(false);
	};

	return (
		<div className="border rounded-lg p-4 my-2 group">
			{isEditing ? (
				<div className="space-y-2">
					<Input
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
						className="w-full  text-black"
						name="review"
					/>
					<div className="flex gap-2">
						<Button onClick={handleSaveClick}>Save</Button>
						<Button variant="outline" onClick={handleCancelClick}>
							Cancel
						</Button>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-between">
					<p className="text-sm">{review.review.text}</p>
					<div className="flex gap-2">
						<Button variant="outline" size="sm" onClick={handleEditClick}>
							<Edit className="h-4 w-4 mr-1" />
							Edit
						</Button>
						<Button
							variant="destructive"
							size="sm"
							onClick={() => onDelete(review.id)}
						>
							<Trash2 className="h-4 w-4 mr-1" />
							Delete
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ReviewItem;
