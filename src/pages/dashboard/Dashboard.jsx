import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/ContextProvider";
import axios from "axios";
import { API_URL } from "../../api/api";

const Dashboard = () => {
	const { token, setToken } = useContext(GlobalContext);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getUsers = async () => {
			try {
				console.log(token);
				const { data } = await axios.get(`${API_URL}/user/allusers`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				console.log(data);

				setTimeout(() => {
					setUsers(data.users);
				}, 2000);
			} catch (error) {
				console.log(error);
			}
		};

		getUsers();
	}, []);

	return (
		<ul className="flex flex-col items-stretch list-none gap-2 p-5">
			{users.length > 0 ? loading : null}
		</ul>
	);
};

export default Dashboard;
