import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

const AddBlog = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState(
		"Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and uses an easy-to-understand syntax that allows developers to write programs with fewer lines of code compared to other languages."
	);
	return (
		<div className="h-full justify-center flex mt-20">
			<form className="max-w-[600px] w-[90%] flex flex-col gap-5">
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
				<Button type="submit" variant="solid" color="primary">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddBlog;
