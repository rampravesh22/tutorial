import ACTIONS from "./action";
const reducer = (products, action) => {
	switch (action.type) {
		case ACTIONS.ADD_PRRODCT:
			return;

		case ACTIONS.DELETE_PRODUCT:
			return;

		case ACTIONS.UPDATE_PRODUCT:
			return;
		case ACTIONS.SET_ALL_PRODUCT:
			return action.payload.data;
		default:
			console.log(products);
			return products;
	}
};

export default reducer;
