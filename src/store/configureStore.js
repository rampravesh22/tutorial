import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "../reducers/authReducer";
import searchMovieReducer from "../reducers/searchMovieReducer";
import watchlistReducer from "../reducers/watchlistReducer";
import reviewReducer from "../reducers/reviewReducer";
import moviesDataReducer from "../reducers/moviesDataReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	searchMovie: searchMovieReducer,
	watchlist: watchlistReducer,
	reviews: reviewReducer,
	moviesData: moviesDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
