import React, { createContext, useState } from "react";

export const TodoGlobalContext = createContext();

const TodoConextProvider = (props) => {
	const [todos, setTodos] = useState([]);
	return (
		<TodoGlobalContext.Provider value={{ todos, setTodos }}>
			{props.children}
		</TodoGlobalContext.Provider>
	);
};

export default TodoConextProvider;
