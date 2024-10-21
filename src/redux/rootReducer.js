import { combineReducers } from "redux";
import blogReducer from "../redux/reducers/blogsReducer";

const rootReducer = combineReducers({
	blogs: blogReducer,
});

export default rootReducer;
