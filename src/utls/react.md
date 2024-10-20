To handle all CRUD (Create, Read, Update, Delete) operations with Redux and `redux-thunk`, you can implement actions and reducers for fetching all posts, fetching a single post, creating, updating, and deleting blog posts.

Here’s how you can create those:

### **Action Types**

First, define the action types for the CRUD operations:

```js
// actionTypes.js
export const BLOGS_REQUEST = "BLOGS_REQUEST";
export const BLOGS_SUCCESS = "BLOGS_SUCCESS";
export const BLOGS_FAIL = "BLOGS_FAIL";

export const BLOG_REQUEST = "BLOG_REQUEST";
export const BLOG_SUCCESS = "BLOG_SUCCESS";
export const BLOG_FAIL = "BLOG_FAIL";

export const BLOG_CREATE_REQUEST = "BLOG_CREATE_REQUEST";
export const BLOG_CREATE_SUCCESS = "BLOG_CREATE_SUCCESS";
export const BLOG_CREATE_FAIL = "BLOG_CREATE_FAIL";

export const BLOG_UPDATE_REQUEST = "BLOG_UPDATE_REQUEST";
export const BLOG_UPDATE_SUCCESS = "BLOG_UPDATE_SUCCESS";
export const BLOG_UPDATE_FAIL = "BLOG_UPDATE_FAIL";

export const BLOG_DELETE_REQUEST = "BLOG_DELETE_REQUEST";
export const BLOG_DELETE_SUCCESS = "BLOG_DELETE_SUCCESS";
export const BLOG_DELETE_FAIL = "BLOG_DELETE_FAIL";
```

### **Actions**: `/actions/blogActions.js`

Define the action creators for each operation.

#### Fetch All Blogs

```js
import axios from "axios";
import {
	BLOGS_REQUEST,
	BLOGS_SUCCESS,
	BLOGS_FAIL,
	BLOG_REQUEST,
	BLOG_SUCCESS,
	BLOG_FAIL,
	BLOG_CREATE_REQUEST,
	BLOG_CREATE_SUCCESS,
	BLOG_CREATE_FAIL,
	BLOG_UPDATE_REQUEST,
	BLOG_UPDATE_SUCCESS,
	BLOG_UPDATE_FAIL,
	BLOG_DELETE_REQUEST,
	BLOG_DELETE_SUCCESS,
	BLOG_DELETE_FAIL,
} from "./actionTypes";

// Fetch all blogs
export const fetchBlogs = () => async (dispatch) => {
	try {
		dispatch({ type: BLOGS_REQUEST });

		const { data } = await axios.get("/api/blogs"); // Adjust the URL as needed

		dispatch({
			type: BLOGS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOGS_FAIL,
			payload: error.message,
		});
	}
};
```

#### Fetch Single Blog

```js
// Fetch a single blog by ID
export const fetchBlog = (id) => async (dispatch) => {
	try {
		dispatch({ type: BLOG_REQUEST });

		const { data } = await axios.get(`/api/blogs/${id}`);

		dispatch({
			type: BLOG_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOG_FAIL,
			payload: error.message,
		});
	}
};
```

#### Create a New Blog

```js
// Create a new blog
export const createBlog = (newBlog) => async (dispatch) => {
	try {
		dispatch({ type: BLOG_CREATE_REQUEST });

		const { data } = await axios.post("/api/blogs", newBlog);

		dispatch({
			type: BLOG_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOG_CREATE_FAIL,
			payload: error.message,
		});
	}
};
```

#### Update Blog

```js
// Update a blog post
export const updateBlog = (id, updatedBlog) => async (dispatch) => {
	try {
		dispatch({ type: BLOG_UPDATE_REQUEST });

		const { data } = await axios.put(`/api/blogs/${id}`, updatedBlog);

		dispatch({
			type: BLOG_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BLOG_UPDATE_FAIL,
			payload: error.message,
		});
	}
};
```

#### Delete Blog

```js
// Delete a blog post
export const deleteBlog = (id) => async (dispatch) => {
	try {
		dispatch({ type: BLOG_DELETE_REQUEST });

		await axios.delete(`/api/blogs/${id}`);

		dispatch({
			type: BLOG_DELETE_SUCCESS,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: BLOG_DELETE_FAIL,
			payload: error.message,
		});
	}
};
```

### **Reducers**: `/reducers/blogReducer.js`

Define reducers to handle the state for each operation.

#### All Blogs Reducer

```js
import {
	BLOGS_REQUEST,
	BLOGS_SUCCESS,
	BLOGS_FAIL,
	BLOG_REQUEST,
	BLOG_SUCCESS,
	BLOG_FAIL,
	BLOG_CREATE_REQUEST,
	BLOG_CREATE_SUCCESS,
	BLOG_CREATE_FAIL,
	BLOG_UPDATE_REQUEST,
	BLOG_UPDATE_SUCCESS,
	BLOG_UPDATE_FAIL,
	BLOG_DELETE_REQUEST,
	BLOG_DELETE_SUCCESS,
	BLOG_DELETE_FAIL,
} from "../actions/actionTypes";

// Fetch all blogs
export const blogListReducer = (state = { blogs: [] }, action) => {
	switch (action.type) {
		case BLOGS_REQUEST:
			return { loading: true, blogs: [] };
		case BLOGS_SUCCESS:
			return { loading: false, blogs: action.payload };
		case BLOGS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
```

#### Single Blog Reducer

```js
// Fetch single blog
export const blogDetailsReducer = (state = { blog: {} }, action) => {
	switch (action.type) {
		case BLOG_REQUEST:
			return { loading: true, ...state };
		case BLOG_SUCCESS:
			return { loading: false, blog: action.payload };
		case BLOG_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
```

#### Create Blog Reducer

```js
// Create blog
export const blogCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case BLOG_CREATE_REQUEST:
			return { loading: true };
		case BLOG_CREATE_SUCCESS:
			return { loading: false, success: true, blog: action.payload };
		case BLOG_CREATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
```

#### Update Blog Reducer

```js
// Update blog
export const blogUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case BLOG_UPDATE_REQUEST:
			return { loading: true };
		case BLOG_UPDATE_SUCCESS:
			return { loading: false, success: true, blog: action.payload };
		case BLOG_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
```

#### Delete Blog Reducer

```js
// Delete blog
export const blogDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case BLOG_DELETE_REQUEST:
			return { loading: true };
		case BLOG_DELETE_SUCCESS:
			return { loading: false, success: true };
		case BLOG_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
```

### **Combining the Reducers**: `/reducers/index.js`

Now, combine all the reducers in one root reducer.

```js
import { combineReducers } from "redux";
import {
	blogListReducer,
	blogDetailsReducer,
	blogCreateReducer,
	blogUpdateReducer,
	blogDeleteReducer,
} from "./blogReducer";

const rootReducer = combineReducers({
	blogList: blogListReducer,
	blogDetails: blogDetailsReducer,
	blogCreate: blogCreateReducer,
	blogUpdate: blogUpdateReducer,
	blogDelete: blogDeleteReducer,
});

export default rootReducer;
```

### **Store Setup**: `/store/store.js`

Make sure your store uses the `rootReducer` and `redux-thunk` middleware.

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

const middleware = [thunk];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
```

### **Component Integration Example**

In your component, you can now use `useDispatch` and `useSelector` to fetch, create, update, and delete blogs:

```js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchBlogs,
	createBlog,
	updateBlog,
	deleteBlog,
} from "./actions/blogActions";

const BlogComponent = () => {
	const dispatch = useDispatch();

	const blogList = useSelector((state) => state.blogList);
	const { loading, blogs, error } = blogList;

	useEffect(() => {
		dispatch(fetchBlogs());
	}, [dispatch]);

	const handleCreate = (newBlog) => {
		dispatch(createBlog(newBlog));
	};

	const handleUpdate = (id, updatedBlog) => {
		dispatch(updateBlog(id, updatedBlog));
	};

	const handleDelete = (id) => {
		dispatch(deleteBlog(id));
	};

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			<ul>
				{blogs.map((blog) => (
					<li key={blog._id}>
						{blog.title}
						<button
							onClick={() => handleUpdate(blog._id, { title: "Updated Title" })}
						>
							Update
						</button>
						<button onClick={() => handleDelete(blog._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogComponent;
```

Now you have a fully functional Redux setup with Thunk to handle fetching, creating, updating, and deleting blogs!
