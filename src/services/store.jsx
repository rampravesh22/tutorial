import { createStore, combineReducers } from "redux";
import productReducer from "./cartRedux";

const rootReducers = combineReducers({
	productsReducer: productReducer,
});

const store = createStore(rootReducers);
export default store;
