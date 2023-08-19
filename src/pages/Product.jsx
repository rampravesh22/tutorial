import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/AppContext";
import ProductItem from "../components/ProductItem";
import APIurl from "../context/api";
import axios from "axios";
import ACTIONS from "../reducer/action";
const Product = () => {
	const [categoryState, setCategoryState] = useState("");
	const { category } = useParams();
	const { products, dispatch } = useContext(GlobalContext);
	useEffect(() => {
		setCategoryState(category);
	}, [category]);

	useEffect(() => {
		const getProduct = async () => {
			try {
				if (categoryState == "all") {
					const res = await axios.get(`${APIurl}/product/}`);
					dispatch({
						type: ACTIONS.UPDATE_PRODUCT,
						payload: { data: res.data },
					});
				} else {
					const res = await axios.get(
						`${APIurl}/product/?category=${categoryState}`
					);
					dispatch({
						type: ACTIONS.UPDATE_PRODUCT,
						payload: { data: res.data },
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, [categoryState]);

	return (
		<div className="flex md:flex-row flex-col content-center gap-3 flex-wrap justify-center md:my-0 my-10">
			{products.map((product) => {
				return <ProductItem product={product} key={product.id} />;
			})}
		</div>
	);
};

export default Product;
