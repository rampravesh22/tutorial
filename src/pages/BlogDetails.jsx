import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBlog, fetchSingleBlog } from "../redux/actions/blogActions";
import Loader from "../components/Loader";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { Button } from "@nextui-org/react";

const BlogDetails = () => {
	const { blog, loading } = useSelector((state) => state.blogs);
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleBlog(id));
	}, []);

	if (loading) {
		return <Loader className="mt-12" />;
	}

	const handleDeleteBlog = () => {
		dispatch(deleteBlog(blog?._id));
		navigate("/");
	};

	return (
		<div className="max-w-[600px] mx-auto mt-10">
			<div className="text-3xl first-letter:uppercase">{blog?.title}</div>
			<div className="h-[1px] bg-black"></div>
			<p>{blog?.content}</p>
			<div className="flex justify-end gap-2 mt-2">
				<Button
					as={Link}
					to={`/edit-blog/${blog?._id}`}
					variant="bordered"
					size="sm"
					className="flex items-center gap-2 text-blue-600 border"
				>
					<LuPencil /> Edit
				</Button>
				<Button
					size="sm"
					variant="bordered"
					onClick={handleDeleteBlog}
					className="flex items-center gap-2 text-red-600 border"
				>
					<LuTrash2 /> Remove
				</Button>
				<button></button>
			</div>
		</div>
	);
};

export default BlogDetails;
