import { combineReducers, createStore } from "redux";
import counterReducer from "./counter/reducer";
import bugReducer from "./bugs/reducer";

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	bugReducer: bugReducer,
});
const store = createStore(rootReducer);
export default store;
