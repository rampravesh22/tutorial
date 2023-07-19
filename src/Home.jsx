import React from "react";
import { useContext } from "react";
import { Context } from "./App";
const Home = () => {
	const { data, setData } = useContext(Context);
	return (
		<div>
			<div>{data}</div>
			<button onClick={() => setData(Math.floor(Math.random() * 10))}>
				Click
			</button>
		</div>
	);
};

export default Home;
