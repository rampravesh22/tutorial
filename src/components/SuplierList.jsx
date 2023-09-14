// SupplierList.js
import React, { useEffect, useState } from "react";
import SupplierCard from "./SuplierCard";
import axios from "axios";
const BASE_URL = "https://staging.iamdave.ai";
const APIHeaders = {
	"Content-Type": "application/json",
	"X-I2CE-ENTERPRISE-ID": "dave_vs_covid",
	"X-I2CE-USER-ID": "ananth+covid@i2ce.in",
	"X-I2CE-API-KEY": "0349234-38472-1209-2837-3432434",
};

function SupplierList() {
	const [suppliers, setSuppliers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);

	useEffect(() => {
		fetchSuppliers(currentPage);
	}, [currentPage]);

	const fetchSuppliers = async (pageNumber) => {
		try {
			const res = await axios.get(
				`${BASE_URL}/list/supply?_page_number=${pageNumber}`,
				{
					headers: APIHeaders,
				}
			);
			setSuppliers(res.data);
			setIsLastPage(data.is_last);
		} catch (error) {
			console.log("errors", error);
		}
	};

	const nextPage = () => {
		if (!isLastPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div>
			{/* Render supplier cards here */}
			<div className="supplier-container">
				{suppliers.map((supplier) => (
					<SupplierCard supplier={supplier} />
				))}
			</div>

			{/* Pagination controls */}
			<div className="pagination">
				<button onClick={nextPage}>Next Page</button>
			</div>
		</div>
	);
}

export default SupplierList;
