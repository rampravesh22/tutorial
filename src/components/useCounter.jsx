import { useState } from "react";

const useCounter = (initialValue) => {
	const [count, setCount] = useState(0);

	const increament = () => {
		return setCount((preState) => {
			return preState + 1;
		});
	};
	const decreament = () => {
		return setCount((preState) => {
			return preState - 1;
		});
	};
	const reset = () => {
		setCount(0);
	};
	const increamentBy_10 = () => {
		setCount((preSatte) => {
			return preSatte + 10;
		});
	};
	const increamentByValue = (value) => {
		setCount((preSatte) => {
			return preSatte + parseInt(value);
		});
	};

	return {
		count,
		increament,
		decreament,
		reset,
		increamentBy_10,
		increamentByValue,
	};
};

export default useCounter;
