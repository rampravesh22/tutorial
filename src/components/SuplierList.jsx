import React, { useEffect, useState } from "react";
import SupplierCard from "./SuplierCard";
import axios from "axios";
import Error from "./Error";
const BASE_URL = "https://staging.iamdave.ai";

function SupplierList() {
	const [loading, setLoading] = useState(false);
	const [suppliers, setSuppliers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchSuppliers(currentPage);
	}, [currentPage]);

	const fetchSuppliers = async (pageNumber) => {
		setLoading(true);
		try {
			const res = await axios.get(
				`${BASE_URL}/list/supply?_page_number=${pageNumber}`,
				{
					headers: {
						"Content-Type": "application/json",
						"X-I2CE-ENTERPRISE-ID": "dave_vs_covid",
						"X-I2CE-USER-ID": "ananth+covid@i2ce.in",
						"X-I2CE-API-KEY": "0349234-38472-1209-2837-3432434",
					},
				}
			);
			setSuppliers(res.data.suppliers); // Update the state with the suppliers data
			setIsLastPage(res.data.is_last); // Fix the variable assignment
			setLoading(false);
		} catch (error) {
			console.log("errors", error);
			setError(true);
			setLoading(false);
		}
	};

	const nextPage = () => {
		if (!isLastPage) {
			setCurrentPage((prevState) => prevState + 1);
		}
	};

	return (
		<div>
			{loading ? (
				<div className="loader-wrapper">
					<div className="loader1"></div>
				</div>
			) : null}
			{!error ? (
				<div>
					<div className="supplier-container">
						{suppliers.map((supplier) => (
							<SupplierCard key={supplier.id} supplier={supplier} />
						))}
					</div>

					<div className="pagination">
						<button onClick={nextPage}>Next Page</button>
					</div>
				</div>
			) : (
				<Error />
			)}
		</div>
	);
}

export default SupplierList;
