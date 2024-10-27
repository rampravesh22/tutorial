import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTodo } from "../redux/actions/todoActions";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllTodo());
	}, []);
	return <div>Home</div>;
};

export default Home;
