import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/ContextProvider";
import axios from "axios";
import { API_URL } from "../../api/api";
import { Skeleton } from "@nextui-org/react";

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/user/getusers`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				setUsers(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getUsers();
	}, []);

	return (
		<ul className="flex flex-col items-stretch list-none gap-2 p-5">
			{loading
				? Array.from({ length: 5 }).map((_, index) => {
						return <Skeleton key={index} className="rounded-lg h-8" />;
				  })
				: users.map((user) => <li key={user._id}>{user.name}</li>)}
		</ul>
	);
};

export default Dashboard;
