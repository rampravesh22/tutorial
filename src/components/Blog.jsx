import { Link } from "@nextui-org/react";
import React from "react";
import { Link as RLink } from "react-router-dom";

const Blog = ({ blog }) => {
	return (
		<div className="shadow-lg border p-4 flex flex-col rounded-md">
			<div className="text-3xl first-letter:uppercase">{blog.title}</div>
			<div className="h-[0.5px] bg-black mb-5"></div>
			<p>{blog.content}</p>
			<Link as={RLink} to={`/blog/${blog._id}`} className="self-start mt-2">
				Goto
			</Link>
			<p className="self-end text-xs mt-5">
				{new Date(blog.createdAt).toLocaleString()}
			</p>
		</div>
	);
};

export default Blog;
