import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
	const products = useSelector((state) => state.productsReducer.products);
	const loading = useSelector((satte) => satte.productsReducer.loading);
	return (
		<>
			{!loading ? (
				<div className="products-wrapper justify-items-center justify-center gap-4 mt-4 grid md:grid-cols-2 lg:grid-cols-3 ">
					{products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
				</div>
			) : (
				<div className="flex justify-center mt-2">
					<div className="h-12 w-12 border-2 border-r-red-600 rounded-full animate-spin"></div>
				</div>
			)}
		</>
	);
};

export default Products;
