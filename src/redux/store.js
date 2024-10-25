import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./reducers/todoReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
	todos: todoReducer,
	auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
