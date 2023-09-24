import Loading from "./utils/Loading";
import { useGlobalContext } from "./context/contextapi";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
	const { products, loading } = useGlobalContext();
	return (
		<>
			<div className="app-wrapper">
				<Header />
				{loading && <Loading />}
				<Products />
			</div>
		</>
	);
}

export default App;
