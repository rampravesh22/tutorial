import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/actions/blogActions";

const Blogs = () => {
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blogList);
	console.log(blogs);

	useEffect(() => {
		dispatch(fetchBlogs());
	}, []);
	return <div>Blogs</div>;
};

export default Blogs;
