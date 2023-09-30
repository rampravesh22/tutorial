import { BUY_CAKE } from "./cakeType";
const initialState = {
	numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return { ...state, numberOfCakes: state.numberOfCakes - 1 };

		default:
			return state;
	}
};

export default cakeReducer;
