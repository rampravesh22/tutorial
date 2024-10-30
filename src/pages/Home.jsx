import React from "react";
import ListTodo from "../components/ListTodo";
import AddTodo from "../components/AddTodo";

const Home = () => {
	return (
		<div>
			<AddTodo />
			<ListTodo />
		</div>
	);
};

export default Home;
