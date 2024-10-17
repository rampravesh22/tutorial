import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "../reducers/authReducer";
import movieReducer from "../reducers/movieReducer";
import watchlistReducer from "../reducers/watchlistReducer";
import reviewReducer from "../reducers/reviewReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	movies: movieReducer,
	watchlist: watchlistReducer,
	reviews: reviewReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
