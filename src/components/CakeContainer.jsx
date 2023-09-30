import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

const CakeContainer = () => {
	const numberOfCakes = useSelector((state) => state.numberOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<div>CakeContainer</div>
			<div>{numberOfCakes}</div>
			<button onClick={() => dispatch(buyCake())}>Buy cake</button>
		</div>
	);
};

export default CakeContainer;
