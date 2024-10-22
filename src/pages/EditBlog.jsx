import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../redux/actions/blogActions";

const EditBlog = () => {
	const { id } = useParams();
	const { blog } = useSelector((state) => state.blogs.blog);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleBlog(id));
	}, []);

	console.log(blog);
	return <div>EditBlog</div>;
};

export default EditBlog;
