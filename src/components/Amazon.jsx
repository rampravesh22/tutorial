import React from "react";
import products from "../data";
import Card from "./Card";

const Amazon = () => {
	return (
		<div className="flex flex-wrap m-5 justify-center gap-10">
			{products.map((product, index) => {
				return <Card key={index} product={product} />;
			})}
		</div>
	);
};

export default Amazon;
