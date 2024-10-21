import Layout from "./components/Layout";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />}></Route>
						<Route path="blog/:id" element={<BlogDetails />}></Route>
						<Route path="add-blog" element={<AddBlog />}></Route>
						<Route path="edit-blog" element={<EditBlog />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
