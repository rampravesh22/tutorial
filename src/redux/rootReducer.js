import { combineReducers } from "redux";
import { blogListReducer } from "./reducers/blogReducer";

const rootReducer = combineReducers({
	blogList: blogListReducer,
});

export default rootReducer;
