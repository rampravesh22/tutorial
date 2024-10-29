import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "../components/ListTodo";

const Home = () => {
	return (
		<div>
			<AddTodo />
			<ListTodo />
		</div>
	);
};

export default Home;
