//***************************  actionTypes ****************************************************
const ADD_TO_CART = "ADD_TO_CART";
const SET_PRODUCTS = "SET_PRODUCTS";
const LOADING = "LOADING";
//***************************  action Creaters ************************************************
export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		payload: { id: id },
	};
};

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: { products: products },
	};
};

export const toggleLoading = (data) => {
	return {
		type: LOADING,
		payload: { data: data },
	};
};

//***************************  reducers  ******************************************************
const initalState = {
	products: [],
	cartProducts: [],
	loading: false,
};
const productReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const data = state.products.find(
				(product) => product.id === action.payload.id
			);
			state.cartProducts.push(data);
			return state;
		case SET_PRODUCTS:
			return { products: action.payload.products };

		case LOADING:
			return { ...state, loading: action.payload.data };
		default:
			return state;
	}
};
export default productReducer;
