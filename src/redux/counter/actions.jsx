import { DECREMENT, INCREMENT, INCREMENT_BY_NUMBER } from "./actionTypes";

export const increament = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const incrementByNumber = (count) => {
	return {
		type: INCREMENT_BY_NUMBER,
		payload: { count: count },
	};
};
