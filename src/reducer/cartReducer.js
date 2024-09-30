const ACTIONS = {
	ADD_TO_CART: "ADD_TO_CART",
	LOAD_CART_ITEMS: "LOAD_CART_ITEMS",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	INCREMENT_CART_ITEM: "INCREMENT_CART_ITEM",
	DECREMENT_CART_ITEM: "DECREMENT_CART_ITEM",
};

// action
export const loadCartItems = () => {
	return { type: ACTIONS.LOAD_CART_ITEMS };
};

export const addItemToCart = (product) => {
	return { type: ACTIONS.ADD_TO_CART, payload: { product: product } };
};

export const removeFromCart = (id) => {
	return { type: ACTIONS.REMOVE_FROM_CART, payload: { id: id } };
};

export const incrementCartItem = (id) => {
	return { type: ACTIONS.INCREMENT_CART_ITEM, payload: { id: id } };
};

export const decrementCartItem = (id) => {
	return { type: ACTIONS.DECREMENT_CART_ITEM, payload: { id: id } };
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.LOAD_CART_ITEMS:
			return state;
		case ACTIONS.ADD_TO_CART:
			return [...state, { ...action.payload.product, quantity: 1 }];

		case ACTIONS.REMOVE_FROM_CART:
			return state.filter((item) => item.id !== action.payload.id);

		case ACTIONS.DECREMENT_CART_ITEM:
			return state
				.map((item) => {
					if (item.quantity > 0 && item.id === action.payload.id) {
						return { ...item, quantity: item.quantity - 1 };
					}
				})
				.filter((item) => item.quantity > 0);

		case ACTIONS.INCREMENT_CART_ITEM:
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
	}
};

export default cartReducer;
