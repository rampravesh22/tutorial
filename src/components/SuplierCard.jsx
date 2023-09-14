// SupplierCard.js
import React from "react";

function SupplierCard({ supplier }) {
	return (
		<div className="supplier-card">
			<h3>{supplier.category}</h3>
			<p>Channel: {supplier.channel}</p>
			<p>Description: {supplier.request_description}</p>
			{/* Add more supplier information here */}
		</div>
	);
}

export default SupplierCard;
