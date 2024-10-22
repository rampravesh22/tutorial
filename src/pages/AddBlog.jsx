import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../redux/actions/blogActions";

const AddBlog = () => {
	const [title, setTitle] = useState("");
	const { loading } = useSelector((state) => state.blogs);
	const dispatch = useDispatch();
	const [content, setContent] = useState(
		"Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and uses an easy-to-understand syntax that allows developers to write programs with fewer lines of code compared to other languages."
	);

	const handleAddBlog = (e) => {
		e.preventDefault();
		dispatch(createBlog({ title, content }));
	};
	return (
		<div className="h-full justify-center flex mt-20">
			<form
				onSubmit={handleAddBlog}
				className="max-w-[600px] w-[90%] flex flex-col gap-5"
			>
				<div className="text-3xl text-center">Add Blog</div>
				<Input
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					label="Title"
					required
					variant="bordered"
				/>
				<Textarea
					onChange={(e) => setContent(e.target.value)}
					value={content}
					label="Content"
					variant="bordered"
					required
				/>
				<Button
					isLoading={loading}
					isDisabled={loading}
					type="submit"
					variant="solid"
					color="primary"
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddBlog;
