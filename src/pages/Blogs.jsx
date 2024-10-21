import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/actions/blogActions";
import Blog from "../components/Blog";
import Loader from "../components/Loader";

const Blogs = () => {
	const dispatch = useDispatch();
	const { blogs, loading } = useSelector((state) => state.blogs);
	useEffect(() => {
		dispatch(fetchBlogs());
	}, []);
	if (loading) {
		return <Loader className="mt-20" />;
	}
	return (
		<div className="max-w-[700px] w-[95%] mx-auto mt-5 flex flex-col gap-5">
			{blogs.length && blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
		</div>
	);
};

export default Blogs;
